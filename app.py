from flask import Flask
from flask import render_template, url_for, flash, redirect, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SECRET_KEY'] = '8e9f77aa52475ddc83f12bfd2fd4fea39c8025a61396e8e28fc17d48cfa1dbcd'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug=True)
