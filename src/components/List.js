import React, { Component } from "react";
import Item from "./Item";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnAll: true,
      isOnComplete: false,
      isOnActive: false
    };
    this.onAll = this.onAll.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.onActive = this.onActive.bind(this);
    this.onAllChecked = this.onAllChecked.bind(this);
  }

  onAll() {
    this.setState({
      isOnAll: !this.state.isOnAll,
      isOnComplete: false,
      isOnActive: false
    });
  }
  onComplete() {
    this.setState({
      isOnComplete: !this.state.isOnComplete,
      isOnAll: false,
      isOnActive: false
    });
  }
  onActive() {
    this.setState({
      isOnActive: !this.state.isOnActive,
      isOnAll: false,
      isOnComplete: false
    });
  }
  onAllChecked() {
    if (this.state.isOnComplete) {
      this.props.allCompleteChecked();
    }
    if (this.state.isOnActive) {
      this.props.allActiveChecked();
    }
  }

  render() {
    const item = this.props.items;
    let buttonAll = "button-default";
    let buttonComplete = "button-default";
    let buttonActive = "button-default";
    let buttonDisAll = false;
    let buttonDisComplete = false;
    let buttonDisActive = false;
    let buttonToggle = false;
    let elmItem = null;
    let elmItem1 = item.map((item) => {
      return (
        <div>
          <Item
            key={item.id}
            name={item.name}
            id={item.id}
            complete={item.complete}
            onClickDelete={this.props.onClickDelete}
            taskDone={this.props.taskDone}
          />
          <p>
            <br />
          </p>
        </div>
      );
    });

    let elmItem2 = item
      .filter((item) => item.complete === true)
      .map((item) => {
        return (
          <div>
            <Item
              key={item.id}
              name={item.name}
              id={item.id}
              complete={item.complete}
              onClickDelete={this.props.onClickDelete}
              taskDone={this.props.taskDone}
            />
            <p>
              <br />
            </p>
          </div>
        );
      });

    let elmItem3 = item
      .filter((item) => item.complete === false)
      .map((item) => {
        return (
          <div>
            <Item
              key={item.id}
              name={item.name}
              id={item.id}
              complete={item.complete}
              onClickDelete={this.props.onClickDelete}
              taskDone={this.props.taskDone}
            />
            <p>
              <br />
            </p>
          </div>
        );
      });
    if (this.state.isOnAll) {
      elmItem = elmItem1;
      buttonAll = "button-active";
      buttonDisAll = true;
      buttonToggle = true;
    }
    if (this.state.isOnComplete) {
      elmItem = elmItem2;
      buttonComplete = "button-active";
      buttonDisComplete = true;
    }
    if (this.state.isOnActive) {
      elmItem = elmItem3;
      buttonActive = "button-active";
      buttonDisActive = true;
    }

    return (
      <div>
        {elmItem}
        <button
          className="button-Toggle"
          onClick={this.onAllChecked}
          disabled={buttonToggle}
        >
          Toggle All
        </button>
        <br />
        <br />
        <table>
          <tbody>
            <tr>
              <td style={{ width: "50px" }}> Fillter:</td>
              <td style={{ width: "80px" }}>
                <button
                  onClick={this.onAll}
                  type="button"
                  className={buttonAll}
                  disabled={buttonDisAll}
                >
                  All
                </button>
              </td>
              <td style={{ width: "125px" }}>
                <button
                  onClick={this.onComplete}
                  type="button"
                  className={buttonComplete}
                  disabled={buttonDisComplete}
                >
                  Complete
                </button>
              </td>
              <td style={{ width: "100px" }}>
                <button
                  onClick={this.onActive}
                  type="button"
                  className={buttonActive}
                  disabled={buttonDisActive}
                >
                  Active
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
