import os

from flask import Flask, render_template

import ling

app = Flask(__name__)
all_words_dict = {}

# Views
@app.route('/')
@app.route('/index', methods=['GET'])
def index():
    global all_words_dict
    all_words_dict = {}
    all_words_dict = ling.parse_texts()
    print "all words"
    print all_words_dict

    return render_template('index.html')

@app.route('/line')
def line():
    global all_words_dict
    line = ling.get_next_line(all_words_dict)

    return line

@app.route('/generate')
def generate():
    lines = ling.loop(all_words_dict)
    return lines

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
