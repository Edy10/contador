import React, { Component} from 'react';
import Counter from './components/counter/Counter';

export default class App extends Component{
  render() {
    return (
      <>
        <Counter />
        <Counter />
        <Counter />
      </>      
    );
  }
}
