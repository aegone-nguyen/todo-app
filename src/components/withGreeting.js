import React from "react";

const withGreeting = (WrappedComponent, before, after) => {
  class WithGreeting extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        Sentence: before
      };
    }

    changeSentence = () => {
      this.setState({
        Sentence: after
      });
    };

    turnback = () => {
      this.setState({
        Sentence: before
      });
    };
    render() {
      return (
        <WrappedComponent
          Sentence={this.state.Sentence}
          changeSentence={this.changeSentence}
          turnback={this.turnback}
          {...this.props}
        />
      );
    }
  }
  return WithGreeting;
};

export default withGreeting;
