import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    value: this.props.counter.value,
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
            // this.handleIncrement(product);
          }}
          className="btn btn-secondary btn-sm"
        >
          Imcrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge primary m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
