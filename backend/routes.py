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
            required_fields = ['nome_usuario','cpf', 'data_nasc', 'empresa', 'setor_empresa', 'email', 'senha']
            missing_fields = [field for field in required_fields if not data.get(field)]
            if missing_fields:
                return jsonify({'error': f"Campos obrigatórios faltando: {', '.join(missing_fields)}"}), 400
            
            if Usuario.query.filter_by(email=data['email']).first():
                return jsonify({'error': 'Usuário já existe'})

            new_user = Usuario(
                nome_usuario=data['nome_usuario'],
                data_nasc=data['data_nasc'],
                cpf=data['cpf'],
                empresa=data['empresa'],
                setor_empresa=data['setor_empresa'],
                email=data['email'],
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

                return jsonify({'message': 'Login bem-sucedido!', 'token': token, 'permissao_usuario': user.permissao_usuario}), 200
            else:
                return jsonify({'error': 'Email ou senha invalidos'}), 401
        
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    
    @app.route('/user-info', methods=['GET'])
    @token_required
    def get_user_data(current_user):
        try:
            return jsonify({
                'id': current_user.id,
                'nome_usuario': current_user.nome_usuario,
                'email': current_user.email,
                'permissao_usuario': current_user.permissao_usuario,
                'data_nasc': current_user.data_nasc.strftime('%d/%m/%Y'),
                'cpf': current_user.cpf,
                'empresa': current_user.empresa,
                'setor_empresa': current_user.setor_empresa
            }), 200
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
            
        db.session.execute(text('CREATE SCHEMA IF NOT EXISTS better;'))
        db.session.commit()

def ensure_table(app):
      with app.app_context():
        db.session.execute(text(''' 
            CREATE TABLE IF NOT EXISTS usuarios (
            id INT AUTO_INCREMENT PRIMARY KEY,  
            nome_usuario VARCHAR(255),          
            data_nasc DATE,                     
            cpf VARCHAR(14),                    
            empresa VARCHAR(255),               
            setor_empresa VARCHAR(255),             
            email VARCHAR(255) UNIQUE,          
            senha VARCHAR(255),                 
            permissao_usuario TINYINT,         
            data_registro DATETIME DEFAULT CURRENT_TIMESTAMP  
        );
        '''))
        db.session.commit()
   
def create_tables(app):
    ensure_schema(app)  
    ensure_table(app)
    with app.app_context():   
        db.create_all()
        print("Tabelas criadas com sucesso!")
