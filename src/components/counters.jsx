// import React, { Component } from "react";
import React from 'react'; 
import Counter from "./counter";



//Class Component

// class Counters extends Component {
//   render() {
//     return (
//       <>
//         {this.props.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             onIncrement={this.props.onIncrement}
//             onDecrement={this.props.onDecrement}
//             onDelete={this.props.onDelete}
//             counter={counter}
//             // value={counter.value}
//             //selected
//             // id={counter.id}}
//             //
//           />
//         ))}
//         <button
//           onClick={this.props.onReset}
//           className="btn btn-primary btn-lg m-3"
//         >
//           Reset All
//         </button>
//       </>
//     );
//   }
// }

// export default Counters;




//Stateless Functional Component

const Counters = ({
  onReset,
  counters,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete} 
          counter={counter}
          // value={counter.value}
          //selected
          // id={counter.id}}
          //
        />
      ))}
      <button onClick={onReset} className="btn btn-primary btn-lg m-3">
        Reset All
      </button>
    </>
  );
};

export default Counters;
