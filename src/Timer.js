import {Component} from "react";
import * as React from "react";

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {secondsElapsed: 0}
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
          <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
}

export default Timer;