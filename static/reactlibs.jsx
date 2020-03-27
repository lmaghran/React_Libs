





function ContactCard(props) {
    return (
        <div className="contact-card">
                <img src={props.contact.imgUrl}/>
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
    );
}


function MainContent () {
    return(
    <div className="contacts">
                        <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />

    </div>
    );
}

function Header () {
    const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: 24
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#2E0927"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }

    return(
    <div>
    <header className="navbar"> To Do List </header>
    <h1 style= {styles}> It is currently about {date.getHours()} o'clock!,  Good {timeOfDay} !</h1>
    </div>
    )
}



function Footer () {
    return(
    <footer>
        <h3> This is my footer </h3>
    </footer>
    )
}


function MyApp() {
    return (

    <div className="todo-list">
    <Header />
    <MainContent />
    <Footer />
    </div>

    )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
