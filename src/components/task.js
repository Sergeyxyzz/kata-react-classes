import '../components-style/task.css';
import { formatDistanceToNow } from 'date-fns';

import React from 'react';
export default class Task extends React.Component {
  render() {
    const { title, onDelete, onCompleted, completed, timeCreated } = this.props;
    const taskTimer = formatDistanceToNow(timeCreated, { includeSeconds: true, addSuffix: true });
    let completeClazz = '';

    if (completed) {
      completeClazz += ' completed';
    }

    return (
      <li className={completeClazz}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed ? 1 : 0}
            onChange={onCompleted}
          />
          <label>
            <span className="description" onClick={onCompleted}>
              {title}
            </span>
            <span className="created">{taskTimer}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDelete}></button>
          <input type="text" className="edit" />
        </div>
      </li>
    );
  }
}
