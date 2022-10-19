from flask import url_for, Flask, render_template, request, send_file, redirect
import sys
import lxml.html as lh
import io

application = Flask(__name__)

@application.route("/")
def main():
    return render_template("main.html")

if __name__ == "__main__":
    application.run(host='0.0.0.0')