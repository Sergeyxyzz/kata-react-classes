import React from 'react';
import Task from './task';
import '../components-style/taskList.css';

export default class TaskList extends React.Component {
  render() {
    const { onDelete, onCompleted } = this.props;
    const elements = this.props.data.map((elem) => {
      const { id, ...itemProps } = elem;
      return (
        <Task
          key={id}
          {...itemProps}
          onDelete={() => onDelete(id)}
          onCompleted={() => onCompleted(id)}
        />
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}
