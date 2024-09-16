import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import TodoSummary from "./Components/TodoSummary";
import useTodos from "./hook/useTodos";

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompleted,
  } = useTodos();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm 
          onSubmit={addTodo}
        />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary
        todos={todos}
        deleteAllCompleted={deleteAllCompleted}
      />
    </main>
  );
}

export default App;
