import React from "react";
import withGreeting from "./withGreeting";
import { ItemConsumer } from "./itemContext";

class Hello extends React.Component {
  render() {
    const { Sentence, changeSentence, turnback } = this.props;
    return (
      <h2 onMouseOver={changeSentence} onMouseLeave={turnback}>
        {Sentence}
        <ItemConsumer>
          {(username) => {
            return <div>{username}!!</div>;
          }}
        </ItemConsumer>
      </h2>
    );
  }
}

export default withGreeting(Hello, "Welcom,", "Hello,");
