import React from 'react';

export default class TasksFilter extends React.Component {
  render() {
    const { filter, onFilterSelect } = this.props;

    const buttonsData = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Completed' }
    ];

    const buttons = buttonsData.map(({ name, label }) => {
      const active = filter === name;
      const clazz = active ? 'selected' : '';
      return (
        <li key={name}>
          <button type="button" className={`btn ${clazz}`} onClick={() => onFilterSelect(name)}>
            {label}
          </button>
        </li>
      );
    });

    return <>{buttons}</>;
  }
}
