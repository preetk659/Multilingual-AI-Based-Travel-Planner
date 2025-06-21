from flask import Flask, request, jsonify
from ai_logic import generate_itinerary
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    itinerary = generate_itinerary(data['destination'], int(data['days']), int(data['budget']))
    return jsonify({"itinerary": itinerary})

if __name__ == "__main__":
    app.run(port=5000)
