function MainContent () {
    return(
    <main>
    <label>Check boxes</label>
             <input type = "checkbox"
                 id = "chkEggs"
                 value = "greenEggs" />
                 <label for = "chkEggs">
                 Green Eggs
                 </label>
                 
            <input type = "checkbox"
                 id = "chkHam"
                 value = "ham" />

        <label for = "chkHam">Ham</label>
    </main>
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

    <div>
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
