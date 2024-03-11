import '../components-style/task.css';

import React from 'react';

export default class Task extends React.Component {
  render() {
    const { title, onDelete, onCompleted, completed } = this.props;
    let completeClazz = '';

    if (completed) {
      completeClazz += ' completed';
    }

    return (
      <>
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
              <span className="created">created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit" onClick={() => console.log('123')}></button>
            <button className="icon icon-destroy" onClick={onDelete}></button>
            <input type="text" className="edit" />
          </div>
        </li>
      </>
    );
  }
}
