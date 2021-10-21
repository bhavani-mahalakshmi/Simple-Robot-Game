import os
from flask import Flask, request, jsonify, send_from_directory
from firebase_admin import credentials, firestore, initialize_app
from flask_cors import CORS, cross_origin
import traceback

# Initialize Flask app
app = Flask(__name__, static_folder='frontend/build', static_url_path='')
CORS(app, support_credentials=True)

# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()
collection = db.collection('feedback')

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/add', methods=['POST'])
@cross_origin()
def create():
    try:
        doc = collection.add(request.json)
        return jsonify({"success": True, "id": doc[1]._path[1]}), 200
    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"success": False, "message": "An Error Occured"}), 500

@app.route('/list', methods=['GET'])
@cross_origin()
def read():
    try:
        todo_id = request.args.get("id")
        if todo_id:
            todo = collection.document(todo_id).get()
            return jsonify(todo.to_dict()), 200
        else:
            all_todos = [doc.to_dict() for doc in collection.stream()]
            return jsonify(all_todos), 200
    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"success": False, "message": "An Error Occured"}), 500

@app.route('/update', methods=['POST', 'PUT'])
@cross_origin()
def update():
    try:
        id = request.args.get("id")
        update_obj = {
            "feedback": request.json
        }
        collection.document(id).update(update_obj)
        return jsonify({"success": True}), 200
    except Exception as e:
        print(traceback.format_exc())
        return jsonify({"success": False, "message": "An Error Occured"}), 500

if __name__ == '__main__':
    app.run(threaded=True, host='0.0.0.0', port=8080)