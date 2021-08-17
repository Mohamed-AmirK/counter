import React from "react"


class Counter extends React.Component {
    render() {
        return (
            <>
                <p>my name is {this.props.me}</p>
                <h2>
                    {this.props.count}
                </h2>
                <button className="moins" onClick={this.props.substract} >-</button>
                <button className="plus" onClick={this.props.increment}>+</button>
            </>
        )
    }
}


export default Counter;