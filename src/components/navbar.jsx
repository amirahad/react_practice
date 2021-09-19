// import React, { Component } from "react";
import React from 'react';


// CLass COmponent

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Total Counters: {" "}
//           <span className="badge badge-pill badge-warning">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }
// export default Navbar;

//Stateless Functional Component

const Navbar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href=" ">
        Total Counters:{" "}
        <span className="badge badge-pill badge-warning">
          { totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
