import React, { Component } from 'react';
import ButtonDecrement from './ButtonDecrement';
import ButtonIncrement from './ButtonIncrement';
import css from './counter.module.css';
import Steps from './Steps';
import Values from './Values';

export default class Counter extends Component {
    constructor(){
        super();
        this.state ={
            currentCounter: 2,
            steps: 0
        };        
    };
    handleClickUp = (type) =>{
        const {currentCounter, steps} = this.state;
        this.setState({
            currentCounter: type === '+' ? currentCounter + 1 : currentCounter -1,
            steps: steps + 1
        })
    };
  render() {
      const { currentCounter, steps} = this.state;
    return (
        <div className={css.counter}>
            <ButtonDecrement onDecrement={this.handleClickUp}/>

            <Values onValues={currentCounter}/>

            <ButtonIncrement onIncrement={this.handleClickUp}/>

            <Steps onSteps={steps}/>
        </div>
    );
  }
}
