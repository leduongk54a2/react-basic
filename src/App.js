import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./views/todos/ListTodo";
// import MyComponent from './views/example/MyComponents'
import ListTodo from "./views/todos/ListTodo";
import Nav from "./views/nav/Nav.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./views/example/MyComponents";
import Home from "./views/example/Home.js";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/todo" element={<ListTodo />} />
            <Route exact path="/about" element={<MyComponent />} />
          </Routes>
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
