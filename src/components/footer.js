import React from 'react';
import '../components-style/footer.css';
import TasksFilter from './tasksFilter';

export default class Footer extends React.Component {
  render() {
    const { tasksCompleted, clearList, filter, onFilterSelect } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{tasksCompleted} items left</span>
        <ul className="filters">
          <TasksFilter filter={filter} onFilterSelect={onFilterSelect} />
        </ul>
        <button className="clear-completed" onClick={clearList}>
          Clear completed
        </button>
      </footer>
    );
  }
}
