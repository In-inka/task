import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';
import { addTask } from 'components/redux/actions';
import { useDispatch } from 'react-redux';

export const TaskForm = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(e.target.value);
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
