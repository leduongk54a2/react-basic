import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import "./App.scss";
import "./views/todos/ListTodo";
// import MyComponent from './views/example/MyComponents'
import ListTodo from "./views/todos/ListTodo";
import Nav from "./views/nav/Nav.js";
import Home from "./views/example/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./views/example/MyComponents";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
          </Switch>
          {/* <MyComponent /> */}

     
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
