from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "only_us"

PASSWORD = "Love Birds"

def check_auth():
    return session.get("auth")

@app.route("/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        if request.form["password"] == PASSWORD:
            session["auth"] = True
            return redirect("/home")
    return render_template("login.html")

@app.route("/home")
def home():
    if not check_auth():
        return redirect("/")
    return render_template("home.html")

@app.route("/journey")
def journey():
    if not check_auth():
        return redirect("/")
    return render_template("journey.html")

@app.route("/gallery")
def gallery():
    if not check_auth():
        return redirect("/")
    return render_template("gallery.html")

@app.route("/letter")
def letter():
    if not check_auth():
        return redirect("/")
    return render_template("letter.html")

if __name__ == "__main__":
    app.run(debug=True)
