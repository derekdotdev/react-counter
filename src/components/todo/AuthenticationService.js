class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        console.log('Registered successful login')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }
}

export default new AuthenticationService()