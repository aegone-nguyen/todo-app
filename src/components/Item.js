import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let className = "";
    let defChecked = false;
    if (this.props.complete) {
      className = className + "taskdone";
      defChecked = true;
    }
    return (
      <table style={{ color: "#81b2e0" }}>
        <tbody>
          <tr>
            <th className={className} style={{ width: "10%" }}>
              <input
                type="checkbox"
                defaultChecked={defChecked}
                onChange={() => this.props.taskDone(this.props.id)}
              />
            </th>
            <th className={className} style={{ width: "40%" }}>
              {this.props.name}
            </th>
            <th style={{ width: "10%" }}>
              <button
                onClick={() => this.props.onClickDelete(this.props.id)}
                className="button-delete"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </th>
          </tr>
          <tr />
        </tbody>
      </table>
    );
  }
}

export default Item;
