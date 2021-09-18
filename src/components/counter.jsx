import React, { Component } from "react";

class counter extends Component { 

  // constructor(){
  //     super()
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }
 

  render() { 

    return (
      <div> 
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="m-2 btn  btn-secondary "
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
          className="m-2 btn  btn-danger btn-sm"
        >
          Delete
        </button> 
      </div>
    );
  }
   
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    // classes += (this.state.count <= 0) ? "warning" : "primary";
    if (this.props.counter.value === 0) {
      classes += "warning";
    } else if (this.props.counter.value <= 0) {
      classes += "danger";
    } else {
      classes += "primary";
    }
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default counter;
