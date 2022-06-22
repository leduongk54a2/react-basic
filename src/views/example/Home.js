import React from "react";
import withRouter from "../../hoc/withRouter";
import Color from "../../hoc/color";
import { connect } from "react-redux";
class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.navigate("/todo");
    // }, 3000);
  }

  handleDeleteUser = (user) => {
    console.log(">>>> check user ", user);
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux()
  };
  render() {
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>hello my react-basic</div>
        <div>
          <img
            src="/assets/images/avatar.jpg"
            alt=""
            style={{ width: "200px", height: "200px", marginTop: "20px" }}
          />
        </div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({
        type: "DELETE_USER",
        payload: userDelete,
      }),
    addUserRedux: () =>
      dispatch({
        type: "CREATE_USER",
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color(withRouter(Home)));
