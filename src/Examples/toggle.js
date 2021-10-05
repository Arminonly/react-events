import React, { Component } from "react";

export default class Toggle extends Component {
constructor(props){
    super(props);
    this.state = {
        isToggleOn:true
    }
    this.btnClck =   this.btnClck.bind(this)
}

btnClck(){
    this.setState(prev=>({
        isToggleOn: !prev.isToggleOn
    }))
}

  render() {

    const styles = {
      btn: {
        cursor: "pointer",
      },
      counter: {
        color: "red",
      },
      hr:{
        width:'400px'
      }
    };
    return (
      <div>
      <h3>Toggle</h3>
       <button className='btn btn-warning' onClick={this.btnClck}> {
        this.state.isToggleOn ? 'switch on the light':'switch off the light'
       } </button>
       <hr style={styles.hr}/>
      </div>
    );
  }
}
