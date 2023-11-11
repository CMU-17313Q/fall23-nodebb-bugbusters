from flask import Flask, request

from predict import predict

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>NodeBB!</p>"

@app.route("/predict", methods=["GET"])
def predict_student():
    # Get parameters from the URL query string
    student_id = request.args.get("student_id")
    gender = request.args.get("gender")
    age = request.args.get("age")
    major = request.args.get("major")
    gpa = request.args.get("gpa")
    extra_curricular = request.args.get("extra_curricular")
    num_programming_languages = request.args.get("num_programming_languages")
    num_past_internships = request.args.get("num_past_internships")

    # Create a dictionary with the input parameters
    student = {
        "student_id": student_id,
        "gender": gender,
        "age": age,
        "major": major,
        "gpa": gpa,
        "extra_curricular": extra_curricular,
        "num_programming_languages": num_programming_languages,
        "num_past_internships": num_past_internships
    }

    # Call the predict function to get the prediction
    prediction_result = predict(student)
    # Convert 'int64' to 'int' for JSON serialization
    prediction_result['good_employee'] = int(prediction_result['good_employee'])

    return prediction_result