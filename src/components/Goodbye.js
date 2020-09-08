import React from "react";
import withGreeting from "./withGreeting";

class Goodbye extends React.Component {
  render() {
    const { Sentence, changeSentence, turnback } = this.props;
    return (
      <h4 onMouseOver={changeSentence} onMouseLeave={turnback}>
        {Sentence}
      </h4>
    );
  }
}

export default withGreeting(Goodbye, "LogOut", "Bye!!");
