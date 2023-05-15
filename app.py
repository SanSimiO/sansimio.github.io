from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return "<p>HOME</p>"


@app.route('/saludar/<nombre>')
def hello(nombre):
    return f'<h1>hola te saludo {nombre.upper()}</h1>'

@app.route('/edad/<int:edad>')
def mostrar_edad(edad):
    return f'<h3>tu edad es : {edad}</h3>'

@app.route('/mostrar/<nombre>', methods=['GET', 'POST'])
def mostrar_nombre(nombre):
    return render_template('mostrar.html', nombre_parametro=nombre)

@app.route('/redirect')
def mi_redirect():
    return redirect(url_for('home'))

@app.errorhandler(404)
def pagina_error(error):
    return render_template('404.html', error=error), 404




