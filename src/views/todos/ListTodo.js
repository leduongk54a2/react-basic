import React from "react";
import "./ListTodo.scss";
import { toast } from "react-toastify";
import AddTodo from "./AddTodo.js";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "doing homework" },
      { id: "todo2", title: "making videos" },
      { id: "todo3", title: "fixing bugs" },
    ],
    editTodo: {},
  };

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

      return;
    }

    this.setState({
      editTodo: todo,
    });


    toast.success("Edit success");
  };

  handleOnchangeEditTodo = (event) => {
    console.log(event);
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>> check empty object: ", isEmptyObj);
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(ev) => this.handleOnchangeEditTodo(ev)}
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  {/* <input value={item.title} /> */}
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
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
    );
  }
}

export default ListTodo;