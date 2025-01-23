




const withFilterHOC = (todos, filter) => {
    switch (filter) {
        case "completed":
            return todos.filter(todo => !todo.completed);
        case "incomplete":
            return todos.filter(todo => todo.completed);
        default:
            return todos
    }
}
export default withFilterHOC;