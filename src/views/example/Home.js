import React from "react";
import withRouter from "../../hoc/withRouter";
import Color from "../../hoc/color";

// import { useNavigate } from 'react-router-dom';
class Home extends React.Component {
    componentDidMount() {   
        setTimeout(() => {
            this.props.navigate('/todo')
        },3000)
    }
    render() {

        return (
            <div>
                hello my react-basic
            </div>
        )
    }
}

export default Color(withRouter(Home))