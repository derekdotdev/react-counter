import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import withNavigation from './WithNavigation'


class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent)
        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome" element={<WelcomeComponent />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome derekdotdev</div>
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
            this.props.navigate(`/welcome`)
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