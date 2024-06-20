import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import Editor from "./components/Editor";
import "./App.css";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";

type Action =
    | {
          type: "CREATE";
          data: {
              id: number;
              content: string;
          };
      }
    | {
          type: "DELETE";
          id: number;
      };

function reducer(state: Todo[], action: Action) {
    switch (action.type) {
        case "CREATE": {
            return [...state, action.data];
        }
        case "DELETE": {
            return state.filter((item) => item.id !== action.id);
        }
    }
}

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<{
    onClickAdd: (text: string) => void;
    onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
    const dispatch = useContext(TodoDispatchContext);

    if (!dispatch) throw new Error("TodoDispatchContext error");

    return dispatch;
}

function App() {
    const [todos, dispatch] = useReducer(reducer, []);

    const idRef = useRef(0);

    const onClickAdd = (text: string) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                content: text,
            },
        });
    };

    const onClickDelete = (id: number) => {
        dispatch({
            type: "DELETE",
            id: id,
        });
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div className="App">
            <h1>Todo</h1>
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider
                    value={{ onClickAdd, onClickDelete }}
                >
                    <Editor />
                    <div>
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} {...todo} />
                        ))}
                    </div>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
