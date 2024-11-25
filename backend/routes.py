# backend/routes.py
import jwt
import datetime
from flask import current_app as app, request, jsonify, session
from backend.models import Usuario
from backend import db
from sqlalchemy import text  
from functools import wraps


SECRET_KEY = "12345678"

def init_app(app):
    @app.route('/register', methods=['POST'])
    def register():
        print("ENTREI EM REGISTER")
        if request.method == 'OPTIONS':
            
            return jsonify({'message': 'CORS preflight check'}), 200

        try:
            data = request.get_json()
            if not data.get('email') or not data.get('senha'):
                return jsonify({'error': 'Email e senha são obrigatórios'}), 400
            
            if Usuario.query.filter_by(email=data['email']).first():
                return jsonify({'error': 'Usuário já existe'})

            new_user = Usuario(
                nome=data['nome'],
                email=data['email']
            )
            new_user.set_password(data['senha'])
            db.session.add(new_user)
            db.session.commit()

            return jsonify({'message': 'Usuário criado com sucesso'}), 201
        except Exception as e:
            return jsonify({'error': str(e)}), 500
        
    @app.route('/login', methods=['POST'])
    def login():
        try:
            print("ENTREI EM LOGIN")
            data=request.get_json()
            view_email = data.get('email')
            view_pass = data.get('senha')
            if not data.get('email') or not data.get('senha'):
                print(view_email)
                print(view_pass)
                return jsonify({'error': 'Email e senha são obrigatórios'}), 400
        
            user = Usuario.query.filter_by(email=data['email']).first()
            if user and user.check_password(data['senha']):
                token = jwt.encode(
                    {'id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
                    SECRET_KEY,
                    algorithm = 'HS256'
                )
                return jsonify({'message': 'Login bem-sucedido!', 'token':f'Bearer {token}'}), 200
            else:
                return jsonify({'error': 'Email ou senha invalidos'}), 401
        
        except Exception as e:
            return jsonify({'error': str(e)}), 500
        
    @app.route('/protected', methods=['GET'])
    @token_required
    def protected_required(current_user):
        return jsonify({'message': f'Bem-vindo, {current_user.nome}!'})
        
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token=request.headers.get('Authorization')
        if not token:
            return jsonify({'error': "Token de acesso ausente"}), 401
        
        try:
            data = jwt.decode(token,SECRET_KEY, algorithms=['HS256'])
            current_user = Usuario.query.get(data['id'])
            if not current_user:
                return jsonify({'error': 'Usuario inválido'}), 401
            
        except jwt.ExpiredSignatureError:
                return jsonify({'error': 'Token expirado'}), 401
        
        except jwt.InvalidTokenError:
            return jsonify({'error': 'Token inválido'}), 401
        
        return f(current_user, *args, **kwargs)
    return decorated
        

def ensure_schema(app):
    with app.app_context():
            
        db.session.execute(text('CREATE SCHEMA IF NOT EXISTS beeter;'))
        db.session.commit()

def ensure_table(app):
      with app.app_context():
        db.session.execute(text('''
            CREATE TABLE IF NOT EXISTS usuarios (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                senha VARCHAR(255) NOT NULL,
                data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        '''))
        db.session.commit()
   
def create_tables(app):
    ensure_schema(app)  
    ensure_table(app)
    with app.app_context():   
        db.create_all()
        print("Tabelas criadas com sucesso!")
