const bookArray = [{"author": " Lyster H. Dewey and Jason L. Merrill ", "title": "Hemp Hurds as Paper-Making Material ", "url": "/ebooks/17855"}, {"author": " Daniel Defoe ", "title": "A Journal of the Plague Year ", "url": "/ebooks/376"}, {"author": " Mary Wollstonecraft Shelley ", "title": "Frankenstein; Or, The Modern Prometheus ", "url": "/ebooks/84"}, {"author": " Lewis Carroll ", "title": "Alice's Adventures in Wonderland ", "url": "/ebooks/11"}, {"author": " Oscar Wilde ", "title": "The Importance of Being Earnest: A Trivial Comedy for Serious People ", "url": "/ebooks/844"}, {"author": " Jonathan Swift ", "title": "A Modest Proposal ", "url": "/ebooks/1080"}, {"author": " Plato ", "title": "Ion ", "url": "/ebooks/1635"}, {"author": " Henrik Ibsen ", "title": "Et dukkehjem. English ", "url": "/ebooks/2542"}, {"author": " Robert Louis Stevenson ", "title": "The Strange Case of Dr. Jekyll and Mr. Hyde ", "url": "/ebooks/43"}, {"author": " Edgar Allan Poe ", "title": "The Masque of the Red Death ", "url": "/ebooks/1064"}, {"author": " Charles Dickens ", "title": "A Tale of Two Cities ", "url": "/ebooks/98"}, {"author": " Edgar Allan Poe ", "title": "The Works of Edgar Allan Poe, The Raven Edition ", "url": "/ebooks/25525"}, {"author": " Jack London ", "title": "The Call of the Wild ", "url": "/ebooks/215"}, {"author": " Louisa May Alcott ", "title": "Little Women ", "url": "/ebooks/514"}, {"author": " Arthur Conan Doyle ", "title": "The Adventures of Sherlock Holmes ", "url": "/ebooks/1661"}, {"author": " Dick; Or, The Whale by Herman Melville ", "title": "Mo", "url": "/ebooks/2701"}, {"author": " Charlotte Perkins Gilman ", "title": "The Yellow Wallpaper ", "url": "/ebooks/1952"}, {"author": " Giovanni Boccaccio ", "title": "The Decameron of Giovanni Boccaccio ", "url": "/ebooks/23700"}, {"author": " Robert Louis Stevenson ", "title": "Treasure Island ", "url": "/ebooks/120"}, {"author": " Jane Austen ", "title": "Emma ", "url": "/ebooks/158"}, {"author": " Mark Twain ", "title": "Adventures of Huckleberry Finn ", "url": "/ebooks/76"}, {"author": " Jacob Grimm and Wilhelm Grimm ", "title": "Grimms' Fairy Tales ", "url": "/ebooks/2591"}, {"author": " Charles Dickens ", "title": "A Christmas Carol in Prose; Being a Ghost Story of Christmas ", "url": "/ebooks/46"}]


class Book extends React.Component {
    constructor (){
        super()
        this.state = {
            answer: "This is the book list",
            bookName :""
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange (event) {
        this.setState({
            bookName: event.target.value
        })
    }



    render (){
    return (
        <div>
        <form>
            <input type="text" placeholder = "Book Name" onChange = {this.handleChange}/>
            <h1> {this.state.bookName} </h1>
        </form>

            <h1> {this.state.answer} </h1>
            <h2>Book Name: {this.props.book.title}</h2>
            <p> Author: {this.props.book.author} </p>
        </div>
    )
    }
}

class App extends React.Component {
    render(){
    const bookComponents= bookArray.map(item => <Book key={item.title} book = {item}/>)

    return(
        <div>
            {bookComponents}
        </div>
    )
    }
}



ReactDOM.render(<App />, document.getElementById("root"))
