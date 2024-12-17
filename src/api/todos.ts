import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 2176;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodo = () => {
  return client.post<Todo>(`/todos?userId=${USER_ID}`, {
    title: 'Learn JS',
    userId: USER_ID,
    completed: true,
  });
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};