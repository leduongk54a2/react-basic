import React from "react";
import withRouter from "../../hoc/withRouter";
import axios from "axios";


const API_URL = "https://reqres.in/api/users/";
class DetailUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  async componentDidMount() {
    if (this.props && this.props.params) {
      let id = this.props.params.id;
      let res = await axios.get(`${API_URL}+${id}`);
      this.setState({
        user: res?.data?.data || {},
      });
      console.log(">>>> check res ", res);
    }
  }

  handleBackButton = () => {
    this.props.navigate(`/users`);
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>hello user with id: {this.props.params.id} </div>
        {!isEmptyObj && (
          <>
            <div>
              User name: {user.first_name} {user.last_name}
            </div>
            <div>Email: {user.email}</div>
            <div>
              <img src={user.avatar} alt=""></img>
            </div>
            <div>
              <button type="button" onClick={() => this.handleBackButton()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
