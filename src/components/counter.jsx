import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // state = {
  //   value: this.props.counter.value,
  // };

  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <div>
        {/* {this.props.children} */}

        <div class="row">
          <div class="col-1">
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
          </div>
          <div class="col">
            <button
              onClick={() => {
                this.props.onIncrement(this.props.counter);
                // this.handleIncrement(product);
              }}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>

            <button
              onClick={() => {
                this.props.onDecrement(this.props.counter);
                // this.handleIncrement(product);
              }}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge primary m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
