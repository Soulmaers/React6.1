import moment from "moment";
import React from "react";


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.toOffsetDate(this.props.utc),
            title: this.props.title
        }

    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    toOffsetDate(utc) {
        return moment.utc().utcOffset(Number(utc) * 60).format("HH:mm:ss");
    }
    tick() {
        this.setState({
            time: this.toOffsetDate(this.props.utc),
        });
    }

    render() {
        const { handleRemove } = this.props;
        return (
            <div className="watch_item">
                <div className="item_title">{this.state.title}</div>
                <div className="item_time">{this.state.time}</div>
                <button className="item_remove" onClick={() => handleRemove(this.props.id)}>🗙</button>
            </div>
        );
    }
}

export default Clock;