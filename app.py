from flask import Flask, render_template, redirect, request

app = Flask(__name__, static_url_path='/static')

# Эта функция добавляет заголовок Content-Security-Policy для всех маршрутов
@app.after_request
def add_security_headers(response):
    response.headers['Content-Security-Policy'] = "frame-ancestors 'self' http://127.0.0.1:5000;"
    return response

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/punk')
def about():
    return render_template('punk.html')

# Страницы для разных языков

@app.route('/ch')
def chinese_index():
    return render_template('index-zh.html')

@app.route('/es')
def spanish_index():
    return render_template('index-es.html')

@app.route('/punkZH')
def punkch():
    return render_template('punk_zh.html')

@app.route('/punkES')
def punkes():
    return render_template('punk_es.html')



if __name__ == "__main__":
    app.run(debug=True)
