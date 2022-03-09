class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        console.log('Registered successful login')
        sessionStorage.setItem('authenticatedUser', username);
    }
}

export default new AuthenticationService()