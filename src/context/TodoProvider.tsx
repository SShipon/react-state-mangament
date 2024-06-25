import { ReactNode, createContext } from "react";

export const TodoContext = createContext(undefined)

type TodoProviderProps ={
    children:ReactNode;
}

const TodoProvider = ({children}:TodoProviderProps) => {
    const values = {
        todoTitle: "this is a todo Title"
    }
    return (
        <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
    );
};

export default TodoProvider;