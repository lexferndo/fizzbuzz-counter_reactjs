import React from "react";
// import { createRoot } from "react-dom/client";

import CounterDisplay from "./CounterDisplay";
import ButtonDisplay from "./ButtonDisplay";

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onDecreaseEventHandler = this.onDecreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  }

  onDecreaseEventHandler() {
    if (this.state.count > 0) {
      this.setState((previousState) => {
        return {
          count: previousState.count - 1,
        };
      });
    }
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <ButtonDisplay params={this.onIncreaseEventHandler} name="Increase" />
        <CounterDisplay count={this.state.count} />
        <ButtonDisplay params={this.onDecreaseEventHandler} name="Decrease" />
        <ButtonDisplay params={this.onResetEventHandler} name="Reset" />
      </div>
    );
  }
}

export default CounterApp;
