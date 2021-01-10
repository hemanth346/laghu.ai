# app.py
from flask import Flask, render_template, request, redirect, send_file, Response
# import boto3
# from utils.config import BUCKET_NAME
# from utils.helpers import s3, upload_file_to_s3


app = Flask(__name__)

@app.route("/")
def hello():
        return render_template('index.html')

@app.route("/classify/image", methods=['GET', 'POST'])
def img_trainer():
        if request.method == 'POST':
                return ''
        return render_template('image_classify.html')

@app.route("/classify/text", methods=['GET', 'POST'])
def text_trainer():
        if request.method == 'POST':
                return ''
        return render_template('text_classify.html')


# @app.route("/img_classifier", methods=['GET', 'POST'])
# def img_trainer():
#         l = {'check': 'uploaded'}
#         if request.method == 'POST':
#                 # myForm
#                 class_name = request.form["input_text"]
#                 for uploaded_file in request.files.getlist('file'):
#                         if uploaded_file.filename != '':
#                                 path = '/'.join([class_name,uploaded_file.filename])
#                                 l['file'] = uploaded_file.filename
#                                 l['path'] = path
#                                 # upload_file_to_s3(uploaded_file, BUCKET_NAME, fname=path)
#                 return l
#         return render_template('home.html')

if __name__ == '__main__':
      app.run(debug=True)