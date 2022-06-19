import React from "react";


class MyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'duong',
            channel: 'VTI'
        }
    }

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChange(event)} />
                    <br />
                    hello my Component by {this.state.name}
                </div>
                <div>
                    my channel: {this.state.channel}
                </div>
            </>
        )
    }
}


export default MyComponent