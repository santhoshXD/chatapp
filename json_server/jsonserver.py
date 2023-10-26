from flask import Flask, jsonify, render_template_string, request, abort
import json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def welcome():
    template = """
    <html>
        <head>
            <title>JSON server</title>
        </head>
        <body>
            <h1>Welcome to our JSON server!</h1>
        </body>
    </html>
    """
    return render_template_string(template)

@app.route('/gethistroy', methods=['GET'])
def getHistroy():
    with open('userdetails.json', 'r') as file:
        data = json.load(file)
    return jsonify(data)

@app.route('/getchat', methods=['GET'])
def getChat():
    conversionid = request.args.get('conversionid')
    if(conversionid == None):
        abort(404)
        return
    print("conversionid : ", conversionid)
    with open('chatdetails.json', 'r') as file:
        data = json.load(file)
        conversion = data.get(conversionid)
        if(conversion == None):
            print("Invalid conversion :: ", conversion)
            abort(404)
    return jsonify(conversion)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1234, debug=True)
