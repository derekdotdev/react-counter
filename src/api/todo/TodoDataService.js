import axios from "axios"

class TodoDataService {
    retrieveAllTodos(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    // executeHelloWorldBeanService() {
    //     return axios.get('http://localhost:8080/hello-world-bean')
    // }
    
    // // Notice the use of 'tick' character instead of single or double quotes
    // executeHelloWorldPathVariableService(name) {
    //     return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    // }

}

export default new TodoDataService()