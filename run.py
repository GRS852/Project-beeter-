import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend import create_app, db

from backend import create_app, db 

app = create_app()

for rule in app.url_map.iter_rules():
    
    print(f"Rota: {rule}, Métodos: {rule.methods}")
    
if __name__ == '__main__':
    app.run(debug=True)