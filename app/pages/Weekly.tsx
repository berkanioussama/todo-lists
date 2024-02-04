"use client"

import { useSnapshot } from "valtio";
import store from "../store/store";

import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

type Filter = 'Daily' | 'Weekly' | 'Monthly'

type Todo = {
    id: number
    text: string
    subject: Filter
    done: boolean
}

const Weekly = () => {

    const snap = useSnapshot(store)

    const dailyTodo = snap.todos.filter((item) => { return item.subject === snap.subject})
    
    return (
        <div className="px-8">
            {
                dailyTodo.map((todo: Todo)=>(
                    <div key={todo.id}>
                        <div className="flex justify-between items-center gap-2">
                            <div className="flex gap-4" 
                            >
                                <Checkbox id={todo.text} onClick={()=> store.toggle(todo.id)} checked={todo.done} />
                                <label
                                    htmlFor={todo.text}
                                    className={`text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${todo.done ? 'line-through' : ''}`}
                                >
                                    {todo.text}
                                </label>
                            </div>
                            <Badge variant="secondary" onClick={() => store.delete(todo.id)}>Delete</Badge>
                        </div>
                        <Separator className="my-4"/>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Weekly ;