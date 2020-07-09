import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 4 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return <div>{this.renderCounters()}</div>;
  }

  handleDelete = (counterId) => {
    console.log("event handle call", counterId);
    const counters = this.state.counters.filter(
      (count) => count.id !== counterId
    );
    this.setState({ counters });
  };

  renderCounters() {
    return this.state.counters.map((count) => (
      <Counter key={count.id} counter={count} onDelete={this.handleDelete}>
        {/* <h4>Counter #{count.id}</h4> */}
      </Counter>
    ));
  }
}

export default Counters;
