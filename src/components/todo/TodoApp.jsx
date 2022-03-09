import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './WithParams'
import AuthenticationService from './AuthenticationService.js'


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
                        <Route path="/logout" element={<LogoutComponent />} />
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
                        <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2022 @derekdotdev</span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.    
                </div>
            </>
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
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
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
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}                    {/* <ShowLoginSuccessMessage id='validCredentials' showSuccessMessage={this.state.showSuccessMessage} /> */}

                    User Name: <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked} >Login</button>
                </div>
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
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                <tr>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>         
        </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.params.name}. You can manage your todos <Link to="/todos">here</Link>      
                </div>
            </>
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