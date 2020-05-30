import hashlib
from flask import Flask, render_template, request, redirect, url_for,send_from_directory, make_response
from werkzeug.utils import secure_filename
from pymongo import MongoClient
import os


app = Flask(__name__)


client = MongoClient('localhost', 27017)
db=client.users

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/")
def home():    
    return render_template("index.html") 

@app.route('/login')
def startpage():
	return render_template("login.html")

@app.route('/loginned',methods=['POST'])
def login():
	check=0
	user_name=request.form['user_name']
	user_password=request.form['user_password']
	user_password=hashlib.md5(user_password.encode()).hexdigest()
	for user in db.info.find({"login":user_name,"password":user_password}):
		if user.get("password")==user_password:
			check=1
		else:
			check=0
	if check==1:
			return render_template('index.html')
	else:
			return render_template('login.html',error="Invalid login or password")
@app.route('/logout',methods=['POST'])
def logout():
	return render_template('index.html')

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
	