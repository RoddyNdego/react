function Todo({task}) {
    return (
        <div className="todo-item">
            <h2>{task}</h2>
            <button>Remove</button>
        </div>
    )
}
export default Todo;