from flask import Flask, render_template, jsonify
import time


app = Flask(__name__)


@app.route('/')
def index():
    """Display homepage."""

    return render_template('reactlibs.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
