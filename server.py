from flask import Flask, render_template, jsonify
import time
import requests
from bs4 import BeautifulSoup as bs


app = Flask(__name__)


@app.route('/')
def index():
    """Display homepage."""
    text = requests.get("https://www.gutenberg.org/browse/scores/top#books-last7")
    soup= bs(text.content, 'html.parser')
    last_30 = soup.find(id = "books-last30")
    siblings = list(last_30.findNextSiblings())
    book_list= []
    book_dict={}
    for ul in siblings:
        for li in ul.findAll('li'):
            book_list.append(li)
    # removing the ul element from the list
    book_list.pop(0)

    for li in book_list[:99]:
        book_title_auth= li.text.split("by", 1)
        book_title= book_title_auth[0]
        if len(book_title_auth)>1:
            book_auth= book_title_auth[1][:-7]
        else:
            book_auth= "No author"
        book_url=li.findAll('a')[0]['href']
        book_dict[book_title] = {"url":book_url, "author":book_auth}

    return render_template('reactlibs.html', book_dict= book_dict)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
