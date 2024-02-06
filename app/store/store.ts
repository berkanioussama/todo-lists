'use client'
import { proxy } from 'valtio'

type Filter = 'Daily' | 'Weekly' | 'Monthly'

type Todo = {
    id: number
    text: string
    subject: Filter
    done: boolean
}

const addTodo = (
    todos: Todo[], text: string, subject: Filter
)=>[
    ...todos, {
        id: Math.max(0, Math.max(...todos.map(({id}) => id))) + 1,
        text,
        subject: subject,
        done: false
    }
]

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
    todos.map((item) => ({
        ...item,
        done: item.id === id ? !item.done : item.done,
}));

const deleteTodo = (todos: Todo[], id: number) => (
    todos.filter((todo) => todo.id !== id)
)

interface storeProps {
    todos: Todo[],
    newTodo: string,
    subject: Filter,
    add: () => void,
    toggle: (id: number) => void,
    delete: (id: number) => void,
    updateTodo?: (id: number, text: string) => void,
}

    const getTodo = ()=>{
        if(typeof localStorage !== 'undefined') {
            const jsonValue = localStorage.getItem('todoLists')
            if (jsonValue != null){
                return JSON.parse(jsonValue)
            }
        }
        return []
    }

    const local: Todo[] = getTodo()

const store = proxy<storeProps>({
    
    todos: local,
    newTodo: "",
    subject: "Daily",
    add() {
        store.todos = addTodo(store.todos, store.newTodo, store.subject)
        store.newTodo = ""
    },
    toggle(id: number) {
        store.todos = toggleTodo(store.todos, id)
    },
    delete(id: number) {
        store.todos = deleteTodo(store.todos, id)
    }
})

export default store