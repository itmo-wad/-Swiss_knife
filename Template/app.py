import hashlib
from flask import Flask, render_template, request, redirect, url_for,send_from_directory, make_response
from werkzeug.utils import secure_filename
from pymongo import MongoClient
import jwt
import os
import asyncio

app = Flask(__name__)

jwt_secret = '( ͡° ͜ʖ ͡°)'

client = MongoClient('localhost', 27017)
db=client.users

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/")
def home():   
	token = request.cookies.get('user')
	if token is not None:
		try:
			user = jwt.decode(token, jwt_secret, algorithm='HS256')
			return render_template("index.html", username = user["login"])
		except:
			pass
	return render_template("index.html")

@app.route('/login')
def startpage():
	return render_template("login.html")

@app.route('/logged',methods=['POST'])
def login():
	user_password=hashlib.md5(request.form['user_password'].encode()).hexdigest()
	user = db.info.find_one({"login":request.form['user_name'],"password":user_password})
	if user:
		encoded_jwt = jwt.encode({"login":request.form['user_name']}, jwt_secret, algorithm='HS256')
		res = make_response(redirect('/'))
		res.set_cookie('user', encoded_jwt)
		return res
	else:
		return render_template("login.html", error="Invalid login or password")

@app.route('/logout',methods=['GET'])
def logout():
	res = make_response(redirect('/'))
	res.set_cookie('user', "", expires=0)
	return res

@app.route('/register')
def reg():
	return render_template('registration.html')
	
@app.route('/newuser',methods=['POST'])
def newuser():
	user_name=request.form['user_name']
	user_password=request.form['user_password']
	user_password=hashlib.md5(user_password.encode()).hexdigest()
	user_email=request.form['user_email']
	db.info.insert({"login": user_name, "password": user_password, "e-mail":user_email})
	return render_template('index.html',user_name=user_name)
	
if __name__ == "__main__":
	app.run()
	