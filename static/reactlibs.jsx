const todosData = [
    {
        id: 1,
        text: "Take out the trash",
        completed: true
    },
    {
        id: 2,
        text: "Grocery shopping",
        completed: false
    },
    {
        id: 3,
        text: "Clean gecko tank",
        completed: false
    },
    {
        id: 4,
        text: "Mow lawn",
        completed: true
    },
    {
        id: 5,
        text: "Catch up on Arrested Development",
        completed: false
    }
]


function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p> {props.item.text} </p>
        </div>
    );
}


function MyApp() {
    const todoItems= todosData.map(item => <TodoItem item= {item} />)
    return (
        <div className="todo-list">
        <h1> To Do List </h1>
            {todoItems}
        </div>
    )
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
