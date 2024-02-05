"use client"

import { useSnapshot } from "valtio";
import store from "../store/store";

import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

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
                        <div className="flex gap-5 items-center" >
                            <Checkbox id={todo.text}  onClick={()=> store.toggle(todo.id)} checked={todo.done} className="w-5 h-5" />
                            <label
                                htmlFor={todo.text}
                                className={`text-md font-medium leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${todo.done ? 'line-through' : ''}`}
                            >
                                {todo.text}
                            </label>
                        </div>
                        <Badge variant="secondary" onClick={() => store.delete(todo.id)}>Delete</Badge>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Daily ;