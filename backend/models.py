from werkzeug.security import generate_password_hash, check_password_hash
from backend import db

class Usuario(db.Model):
    __tablename__ = 'usuarios'
    __table_args__ = {'schema': 'better'}

    id = db.Column(db.Integer, primary_key=True)
    nome_usuario = db.Column(db.String(100), nullable=False)
    data_nasc = db.Column(db.Date, nullable=False)
    cpf = db.Column(db.String(14), nullable=False)
    setor_empresa = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    senha = db.Column(db.String(255), nullable=False)
    permissao_usuario = db.Column(db.Integer, default=0, nullable=False)

    def set_password(self, senha):
        self.senha = generate_password_hash(senha)
    
    def check_password(self, senha):
        return check_password_hash(self.senha, senha)

