import React, { Component } from "react";


class Counter extends Component {
    render() {
        return(
            <div className="typingContainer">
                <textarea placeholder="test" onClick={this.props.startTime} cols="120" rows="10"></textarea>
                <br/><span>Time of {this.props.countValue} Seconds</span>
                <br/>
                <p idName="result">Input is</p>
                <p idName="wpm">{this.props.wpm} wpm</p>
            </div>
        );
    }
};

export default Counter;