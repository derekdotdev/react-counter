import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './WithParams'


class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent)
        const WelcomeComponentWithParams = withParams(WelcomeComponent)
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/> 
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodosComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.derekdotdev.github.io" className="navbar-brand">derekdotdev</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/derekdotdev">Home</Link></li>
                        <li><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr/>Footer
            </div>
        )
    }
}

class LoginComponent extends Component {
    
    // Create state inside for both props
    constructor(props) {
        super(props)
        this.state = {
            username: 'derekdotdev',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    
    // Generic change handler for username && password
    handleChange(event) {
        // console.log(event.target.value)
        // console.log(this.state)
        this.setState(
            {
                [event.target.name]
                  :event.target.value
            }
        )
    }

    // handlePasswordChange(event) {
    //     console.log(event.target.value)
    //     this.setState({username:event.target.value})
    // }
    
    // handlePasswordChange(event) {
    //     console.log(event.target.value)
    //     this.setState({password:event.target.value})
    // }

    loginClicked() {
        //derekdotdev,dummy
        if(this.state.username==='derekdotdev' && this.state.password==='dummy') {
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
        } else {
            console.log('Failed')
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
        }
        // console.log(this.state)
    }

    render() {
        return(
            <div>
                {/* <ShowInvalidCredentials id='invalidCredentials' hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {/* <ShowLoginSuccessMessage id='validCredentials' showSuccessMessage={this.state.showSuccessMessage} /> */}
                {this.state.showSuccessMessage && <div>Login Successful!</div>}
                User Name: <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
                Password: <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked} >Login</button>
            </div>
        )
    }

}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do! Contact support at abcd-efgh-ijkl</div>
}

class ListTodosComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            todos : 
            [
                { id: 1, description: 'Become a React Expert', done:false, targetDate: new Date()},
                { id: 2, description: 'Learn Web APIs', done:false, targetDate: new Date()},
                { id: 3, description: 'Learn Micronaut Web', done:false, targetDate: new Date()}
            ]
        }
    }
    
    render() {
        return (
        <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>done</th>
                        <th>targetDate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map (
                            todo =>
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>         
        </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link> 
            </div>
        )

    }
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Successful</div>
//     }
//     return null
// }

export default TodoApp