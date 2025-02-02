# Projeto Beeter

## Visão Geral
O Project Beeter é um projeto acadêmico desenvolvido para a faculdade, com o objetivo de criar um sistema CRUD e páginas para uma plataforma que oferece cursos para funcionários de uma empresa. A versão inicial é focada no desenvolvimento web, com um frontend construído em React e um backend baseado em Flask.

## Tecnologias Utilizadas

### Frontend
- React 18.3.1
- React Bootstrap 2.10.4
- Bootstrap 5.3.3
- React Router DOM 6.26.1

### Backend
- Flask (Framework web baseado em Python)
- SQLAlchemy (ORM para interações com banco de dados)

### Dependências Adicionais
- Bibliotecas de testes: `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`
- Performance web: `web-vitals`

## Instalação e Configuração

### Pré-requisitos
- Node.js e npm instalados
- Python 3.x instalado

### Configuração do Frontend
1. Navegue até o diretório do projeto.
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```
   A aplicação estará disponível em `http://localhost:3000`.

### Configuração do Backend
1. Configure um ambiente virtual (opcional, mas recomendado):
   ```sh
   python -m venv venv
   source venv/bin/activate  # No Windows use `venv\Scripts\activate`
   ```
2. Instale as dependências:
   ```sh
   pip install -r requirements.txt
   ```
3. Execute a aplicação Flask:
   ```sh
   python run.py
   ```
   O backend será executado em `http://localhost:5000`.

## Variáveis de Ambiente
As configurações são armazenadas no arquivo `.env`. As seguintes variáveis são necessárias:
```
HOST=0.0.0.0
SQLALCHEMY_ECHO=True
SECRET_KEY="sua_chave_secreta"
```

## Executando Testes
Para rodar os testes do frontend:
```sh
npm test
```

Para testes no backend (supondo que estejam configurados):
```sh
pytest
```

## Implantação
1. Gere o build do frontend:
   ```sh
   npm run build
   ```
2. Faça a implantação do backend com um servidor pronto para produção, como `gunicorn`:
   ```sh
   gunicorn -w 4 -b 0.0.0.0:5000 run:app
   ```

## Endpoints da API
O backend expõe vários endpoints de API. Para visualizar as rotas disponíveis, execute:
```sh
python run.py
```
Isso imprimirá as rotas disponíveis no console.
