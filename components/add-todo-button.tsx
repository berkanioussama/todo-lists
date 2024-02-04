"use client"

import { GoPlus } from "react-icons/go";
import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Textarea } from "./ui/textarea";

import { useSnapshot } from "valtio";
import store from '@/app/store/store'

/* f7f7f7*/


const AddTodoButton = () => {

    const snap = useSnapshot(store)

    return (
        <Drawer>
            <div className="flex w-full justify-center items-center">
                <DrawerTrigger asChild>
                    <Button variant="outline"><GoPlus /><span className="text-sm">Add task</span></Button>
                </DrawerTrigger>
            </div>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Add Task</DrawerTitle>
                        <DrawerDescription>
                            Set your activity goal.
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className="p-4 pb-0">
                        <div className="flex flex-col items-center justify-center space-x-2">
                            <Textarea placeholder="New task here..." value={snap.newTodo} onChange={(ev) => store.newTodo = ev.target.value}/>
                            <div className="flex gap-4">
                                <button onClick={()=> store.subject = "Daily"}>Daily</button>
                                <button onClick={()=> store.subject = "Weekly"}>Weekly</button>
                                <button onClick={()=> store.subject = "Monthly"}>Monthly</button>
                            </div>
                        </div>
                    </div>

                    <DrawerFooter>
                        <Button onClick={()=> store.add()} >Add todo</Button>
                        <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
 
export default AddTodoButton;