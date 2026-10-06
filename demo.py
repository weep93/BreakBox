from flask import Flask, jsonify
from flask_cors import COPS, CORS 

app = Flask(_ name__) 
CORS(app) 

@app.route("/api/data")
def get_data():
    return jsonify({
        "status": "online",
        "user": "cupid",
        "projects": ["portfolio", "homelab", "ai-agents"]
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)