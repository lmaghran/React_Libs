function ToDoItem() {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    )
}


function MainContent () {
    return(
    <div>
    <ToDoItem/>
    <ToDoItem/>
    <ToDoItem/>
    </div>
    )
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
