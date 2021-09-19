import React, { Component } from "react";

class counter extends Component {
  // constructor(){
  //     super()
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    return (
      <div className="row">
      <div className="col-1 ">
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      </div>
      <div className="col">
      <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className=" btn btn-secondary "
          disabled = {this.props.counter.value <= 0 ? "disabled" : ""}
        >
          -
        </button>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="m-2 btn  btn-secondary "
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className=" btn btn-danger btn-sm "
        >
          Delete
        </button>
      </div>
        
        
      </div>
    );
  }

  getBadgeClasses() {
    let classes = " mt-3 badge badge-";
    classes += (this.props.counter.value <= 0) ? "warning" : "primary";
    // if (this.props.counter.value === 0) {
    //   classes += "warning";
    // } else if (this.props.counter.value <= 0) {
    //   classes += "danger";
    // } else {
    //   classes += "primary";
    // }
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default counter;
