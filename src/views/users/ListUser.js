import React from "react";
import axios from "axios";
import './ListUser.scss'
import withRouter from "../../hoc/withRouter";

const API_URL = "https://reqres.in/api/users?page=2";
class ListUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: []
        }
    }

    async componentDidMount() {
       
        let res =  await axios.get(API_URL)

        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })

       
    }

    handleDetailUser = (user) => {
        this.props.navigate(`/users/${user.id}`)
    }

    render() {
        let { listUsers } = this.state
        return (
            <div className="list-user-container">
                <div className="title">
                    ListUser
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item,index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleDetailUser(item)}
                                >
                                    {index+1} - {item.first_name} {item.last_name}                                     
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser)