import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class ListTodosComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            deleteMessage : null,
            updateMessage : null,
            todos : 
            [
                // Do not make GET requests in constructor!
                // Initialize as blank and fill in 
                // using setState inside componentDidMount()
                // Order: constructor, render, componentDidMount, render
            ]
            
        }
            
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }
    
    // Called just before page change to free up a resource
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    // An opportunity to improve the performance of an application
    // Should I really call the render for every change of state?
    // If yes, return true. If no, return false. 
    // Try with conditionals!
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos()
        console.log(this.state)    
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    this.setState({todos : response.data})
                }
            )
    }

    render() {
        return (
        <div>
            <h1>To Do List</h1>
            {this.state.deleteMessage && <div className="alert alert-success">{this.state.deleteMessage}</div>}
            {this.state.updateMessage && <div className="alert alert-success">{this.state.updateMessage}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>         
        </div>
        )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        console.log(id + " " + username)
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({deleteMessage : `Delete of Todo ${id} Successful`})
                    this.refreshTodos()
                }
                )
    }
            
    updateTodoClicked(id) {
        console.log('update ' + id)
        // let username = AuthenticationService.getLoggedInUserName()
        // TodoDataService.updateTodo(username, id)
        // .then(
        //     response => {
        //         this.setState({updateMessage : `Update of Todo ${id} Successful`})
        //         this.refreshTodos()
        // }
        // )
        this.props.navigate(`todos/${id}`)
    }
    
}

export default ListTodosComponent