import React, { Component } from 'react'
import FirstComponent from './components/learning-examples/FirstComponent'
import {SecondComponent} from './components/learning-examples/SecondComponent'
import TodoApp from './components/todo/TodoApp';
import './App.css'
import './bootstrap.css'



// by = property used for display
// and increment method
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
        {/* <Counter/> */}
      </div>
    )
  }
}



class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
       Hello World!
       <FirstComponent />
       <SecondComponent />
      </div>
    )
  }
}

// // Class Component must extend Component and Override render()
// // Class Componenets have additional features 
// // when compared to functional components:
// // - State
// class FirstComponent extends Component {
//   render() {
//     return (
//       <div className="firstComponent">
//        <p>
//         FirstComponent
//        </p>
//       </div>
//     );
//   }
// }

// Function Components are much simpler, but have less features
// Custom Components MUST be Capitalized, not camelCased
// function SecondComponent() {
//   return (
//     <div className="secondComponent">
//       <p>
//         SecondComponent
//       </p>
//     </div>
//   );
// }

export default App

// App js is now created as a Function Component;
// however, for the full-stack course, we are using
// App.js as a Class component (older versions used it this way)
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;