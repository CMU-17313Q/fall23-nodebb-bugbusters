from flask import Flask, request
from predict import predict
app = Flask(__name__)


@app.route("/")
def test():
    return "<p>works!</p>"


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


    prediction_result = predict(student)
    prediction_result['good_employee'] = int(prediction_result['good_employee'])
    return prediction_result


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)