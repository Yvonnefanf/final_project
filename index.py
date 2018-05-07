import json
from flask import Flask, render_template, request, Response

app = Flask(__name__, static_url_path="/assets", static_folder="assets")

with open('traceData.json') as fp:
    trace_data = json.load(fp)

humans = [
    {
        "name": "weige",
        "isSigned": False,
        "avatar": "weige.jpg",
        "activityData": trace_data
    },
    {
        "name": "daTangZong",
        "isSigned": False,
        "avatar": "daTangZong.jpg",
        "activityData": trace_data
    },
    {
        "name": "小哲哲",
        "isSigned": False,
        "avatar": "weige.jpg",
        "activityData": trace_data
    },
    {
        "name": "datangzong",
        "isSigned": False,
        "avatar": "weige.jpg",
        "activityData": trace_data
    },
]


def make_response_json(content):
    resp = Response(content)
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route('/')
def index():
    return render_template('index.html', humans=humans)


@app.route('/personProfile/')
def personProfile():
    name = request.args.get('name')

    # NOTE: now_human may be None!
    for human in humans:
        if human["name"] == name:
            now_human = human

    # Check whether this person has signed
    for record in trace_data:
        if record['name'] == now_human['name']:
            now_human['isSigned'] = True

    return render_template('personProfile.html', human=now_human)


@app.route('/echarts/')
def echarts():
    content = json.dumps(trace_data)
    return make_response_json(content)
