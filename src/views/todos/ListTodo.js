import React from "react";
import { toast } from "react-toastify";
import AddTodo from "./AddTodo.js";
import "./ListTodo.scss";

import Color from "../../hoc/color.js";
const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";
class ListTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodos: [],
      editTodo: {},
    };
  }
  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          listTodos: json,
        });
      });
  }
  addNewTodo = (todo) => {
    let currentListTodo = this.state.listTodos;
    currentListTodo.push(todo);
    this.setState({
      listTodos: currentListTodo,
    });

    toast.success("Wow so easy!");
  };

  handleDeleteTodo = (todo) => {
    let currenTodos = this.state.listTodos;
    currenTodos = currenTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currenTodos,
    });

    toast.success("Delete success");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Edit success");
      return;
    }

    this.setState({
      editTodo: todo,
    });
  };

  /**
   * handleOnchangeEditTodo
   * @param {Object} event
   */
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  checkValue = (todo) => {
    let todos = this.state.listTodos;
    todos.forEach((element) => {
      if (element.id === todo.id) {
        element.completed = !element.completed;
      }
    });
    this.setState({
      listTodos: todos,
    });

    toast.success("success");
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <>
        <p>Todo app with reactJS!</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    <input
                      type="checkbox"
                      defaultChecked={item.completed}
                      onChange={() => this.checkValue(item)}
                    />
                    {isEmptyObj ? (
                      <>
                        <span
                          style={
                            item.completed
                              ? { textDecoration: "line-through" }
                              : {}
                          }
                        >
                          {index + 1} - {item.title}
                        </span>
                      </>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span
                            style={
                              item.completed
                                ? { textDecoration: "line-through" }
                                : {}
                            }
                          >
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(ev) => this.handleOnchangeEditTodo(ev)}
                            />
                          </span>
                        ) : (
                          <span
                            style={
                              item.completed
                                ? { textDecoration: "line-through" }
                                : {}
                            }
                          >
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}

                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {!isEmptyObj && editTodo.id === item.id ? "Save" : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
