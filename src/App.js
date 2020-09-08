import React, { Component } from "react";
import List from "./components/List";
import Form from "./components/Form";
import Title from "./components/Title";
import "./styles.css";
//import { remove } from "lodash";
import { v4 as uuidv4 } from "uuid";
import itemtsk from "./data/task";
import Hello from "./components/Hello";
import Goodbye from "./components/Goodbye";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: itemtsk
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.handleCompleteChecked = this.handleCompleteChecked.bind(this);
    this.handleActiveCheked = this.handleActiveCheked.bind(this);
  }
  //add
  handleSubmit(formValues) {
    const add = this.state.items;
    const objadd = { id: uuidv4(), ...formValues };
    add.push(objadd);
    this.setState({ items: add });
  }
  //check
  completeTask(id) {
    let item = this.state.items.find((i) => {
      return i.id === id;
    });
    item.complete = !item.complete;
    this.setState({
      items: this.state.items
    });
    console.log(item);
  }
  //delete
  deleteTask(id) {
    this.setState({
      items: this.state.items.filter((item) => item.id !== id)
    });
  }
  //all complete checked
  handleCompleteChecked() {
    let itemsCompletechecked = this.state.items.filter(
      (item) => item.complete === true
    );
    itemsCompletechecked.forEach(
      (eleitem) => (eleitem.complete = !eleitem.complete)
    );
    this.setState({ items: this.state.items });
  }
  //all active checked
  handleActiveCheked() {
    let itemsActivechecked = this.state.items.filter(
      (item) => item.complete === false
    );
    itemsActivechecked.forEach(
      (eleitem) => (eleitem.complete = !eleitem.complete)
    );
    this.setState({ items: this.state.items });
  }

  render() {
    let items = this.state.items;

    return (
      <div>
        <nav className="hero">
          <Hello /> {/* Higer order componen*/}
          <Title hasUser={this.props.hasUser} onSubmit={this.handleSubmit} />
          <button onClick={this.props.handleLogout}>
            <Goodbye /> {/* Higer order componen*/}
          </button>
        </nav>
        <div className="app-background">
          <br />
          <Form onSubmit={this.handleSubmit} />
          <br />
          <div className="list-decor">
            <List
              onClickDelete={this.deleteTask}
              taskDone={this.completeTask}
              items={items}
              allCompleteChecked={this.handleCompleteChecked}
              allActiveChecked={this.handleActiveCheked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
