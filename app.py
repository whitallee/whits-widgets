<<<<<<< HEAD
from flask import Flask, flash, redirect, render_template, request, session
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/timer")
def timer():
    return render_template("timer.html")

@app.route("/counter")
def counter():
    return render_template("counter.html")

@app.route("/mail")
def mail():
=======
from flask import Flask, flash, redirect, render_template, request, session
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/timer")
def timer():
    return render_template("timer.html")

@app.route("/counter")
def counter():
    return render_template("counter.html")

@app.route("/mail")
def mail():
>>>>>>> 064d5ec30a537a1da428d256f6d8ffd9d56f3700
    return render_template("mail.html")