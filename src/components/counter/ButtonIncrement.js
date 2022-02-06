import React, { Component } from 'react';
import css from './counter.module.css';

export default class ButtonIncrement extends Component {
    handleClickUp = () =>{
        this.props.onIncrement('+');
    };
  render() {
    return (
        <button 
            className={css.btn2} 
            onClick={this.handleClickUp}
        >
            +
        </button>
        );
  }
}
