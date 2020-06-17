import React, { Component } from 'react';

export default class Lifecycles extends Component {
  constructor() {
    super();
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  render() {
    console.log('render');
    return (
      <div className='lifecycles'>
        <h3>Lifecycles Component</h3>
        {this.props.text}
      </div>
    );
  }
}
