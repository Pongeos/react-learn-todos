import { useEffect, useState } from "react";
import { Todo } from "../Type/todo";
import { dummyData } from "../Data/todos";

export default function useTodos () {
  const [todos, setTodos] = useState(() => {
    const saveTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    return saveTodos.length > 0 ? saveTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  const addTodo = (title: string) => {
    setTodos((prevTodos) => [
      {
        id: Date.now(),
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const deleteAllCompleted = () => {
    setTodos((prevTodo) => prevTodo.filter((todo) => !todo.completed));
  };

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted,
  };
}
