from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.form
    name = data.get('name')
    age = data.get('age')
    file = request.files.get('file')

    if not name or not age or not file:
        return jsonify({"error": "All fields are required"}), 400

    # Save the uploaded file (if required)
    file.save(f"./uploads/{file.filename}")

    return jsonify({
        "message": "Form submitted successfully!",
        "data": {
            "name": name,
            "age": age,
            "file_name": file.filename
        }
    })

if __name__ == '__main__':
    app.run(debug=True)
