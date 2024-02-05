"use client"

import { useSnapshot } from "valtio";
import store from "../store/store";

import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge";

type Filter = 'Daily' | 'Weekly' | 'Monthly'

type Todo = {
    id: number
    text: string
    subject: Filter
    done: boolean
}

const Daily = () => {

    const snap = useSnapshot(store)

    const dailyTodo = snap.todos.filter((item) => { return item.subject === snap.subject})
    
    return (
        <div className="px-6">
            {
                dailyTodo.map((todo: Todo)=>(
                    <div key={todo.id} className="flex justify-between items-center gap-2 bg-white p-4 rounded-md mb-4">
                        <div className="flex gap-4 items-center" >
                            <Checkbox id={todo.text} onClick={()=> store.toggle(todo.id)} checked={todo.done} />
                            <label
                                htmlFor={todo.text}
                                className={`text-md font-medium leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer ${todo.done ? 'line-through' : ''}`}
                            >
                                {todo.text}
                            </label>
                        </div>
                        <Badge variant="secondary" onClick={() => store.delete(todo.id)} className=" cursor-pointer">Delete</Badge>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Daily ;