import React, { PureComponent } from 'react'
// life cycle method-> lcm
export default class ClassCounter extends PureComponent {
    // 1. first lcm  -> intiializes your state 
    constructor(props) {
        console.log("constructor");
        super(props)
        this.state = {
            count: 0
        }
        // this.incCount=this.incCount.bind(this);
    }
    incCount =  ()=> {
        // set state 
        this.setState({ count: this.state.count + 1 })
    }
     decCount =  ()=> {
        this.setState({ count: this.state.count - 1 })
    }
    // 2. second lcm -> it used to render the jsx
    componentDidMount(){
        console.log("run once after first render");
    }
    componentDidUpdate(){
        console.log("I will run after every update")
    }
    render() {
        console.log("render");
        return (
            <>
                <h1>Counter</h1>
                <h2>{this.state.count}</h2>
                <div>
                    <button onClick={this.incCount} >+</button>
                    <button onClick={this.decCount}>-</button>
                </div>

            </>
        )

    }
}


/***
 * class based componnet 
 *  -> only your life cycle methods had access to this -> you 
 * **/ 