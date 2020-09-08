import React from "react";

const Title = (props) => {
  const { hasUser } = props;
  return (
    <div className="todo-title">
      {hasUser ? (
        <h1 style={{ marginLeft: "-200px" }}>Your Todo List</h1>
      ) : (
        <h1 style={{ marginLeft: "350px" }}>Welcome to Todo App</h1>
      )}
    </div>
  );
};
export default Title;
