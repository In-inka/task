import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import btn from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={btn.wrapper}>
      <section className={btn.section}>
        <h2 className={btn.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={btn.section}>
        <h2 className={btn.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
