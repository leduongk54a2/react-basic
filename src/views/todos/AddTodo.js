import React from "react";

class AddTodo extends React.Component {
    state = {
        title : ''
    }

    handleOnChangeTitle =(event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAddItem = () => {
        if(!this.state.title ) {
            alert('chua nhap title')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() *10000), 
            title: this.state.title
        }

        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let title = this.state.title;
    return (

      <div className="add-todo">
        <input type="text" value={title}
            onChange={(event)=> this.handleOnChangeTitle(event)} />
        <button type="button" className="add"
        onClick={() => this.handleClickAddItem()}
        >Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
