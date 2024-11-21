from backend import create_app, db  

app = create_app()


def create_tables():
    db.create_all()
    print("Tabelas criadas com sucesso!")

if __name__ == '__main__':
    app.run(debug=True)