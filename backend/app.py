from flask import Flask

app = Flask(__name__)

@app.route("/api/data")
def data():
    return {"message": "Hello from Python", "status": "ok"}

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)