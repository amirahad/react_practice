import React, {Component} from "react";

class counter extends Component{
    state= {
        count: 0,
        tags: ['tag1','tag2'],
        // imageUrl: 'https://picsum.photos/200' 
    };

    // constructor(){
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this); 
    // }

    handleIncrement = () => { 
        this.setState({ count: this.state.count + 1})
    }

    handleDecrement = () => { 
        this.setState({ count: this.state.count - 1})
    }

    // reset = () => { 
    //     this.setState({ count: 0})
    // }

    render(){
       

        return(
            <div>
                {/* <img src={this.state.imageUrl} alt="anything"/><br/> */}
                <button onClick={this.handleDecrement} className="m-2 btn  btn-secondary ">-</button>
                <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="m-2 btn  btn-secondary ">+</button>
                {/* <ul>
                    {this.conditionalRendering()}
                </ul> */}

                {/* <button onClick={this.reset} className="m-2 btn  btn-secondary btn-lg">Reset All</button> */}
            </div>
        );
    }
    // conditionalRendering() {
    //     return (this.state.tags.length === 0) ? <h3>tags are empty!</h3> : this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += (this.state.count <= 0) ? "warning" : "primary";
        if(this.state.count === 0){
            classes += "warning"
        }else if(this.state.count <= 0){
            classes += "danger"
        }else{
            classes += "primary"
        }
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}


export default counter;