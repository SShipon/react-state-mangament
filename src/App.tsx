import TodoForm from "./components/todo/TodoForm";
import TodoProvider from "./context/TodoProvider";



const App = () => {

  return (
  <TodoProvider>
         <div > 
          <TodoForm />
      </div>
  </TodoProvider>
  );
};

export default App;