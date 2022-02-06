import React, { Component } from 'react';
import css from './counter.module.css';

export default class ButtonDecrement extends Component {
    handleClickDown = () => {
        this.props.onDecrement("-");
    };

  render() {
    return (
        <button 
            className={css.btn1} 
            onClick={this.handleClickDown} 
        > 
        - 
        </button>
    );
  }
}
