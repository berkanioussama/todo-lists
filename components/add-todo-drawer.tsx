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

const AddTodoDrawer = () => {

    const snap = useSnapshot(store)

    return (
        <Drawer>
            <div className="flex w-full justify-center items-center">
                <DrawerTrigger asChild>
                    <Button variant="outline" size="lg" className="flex gap-4 px-5 items-center rounded-full font-semibold"><GoPlus size={20} /><span className="text-sm">Add task</span></Button>
                </DrawerTrigger>
            </div>
            <DrawerContent>
                <div className="mx-auto w-full max-w-3xl">
                    <DrawerHeader>
                        <DrawerTitle>Add Task</DrawerTitle>
                        <DrawerDescription>
                            Set your activity goal.
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className="p-4 pb-0">
                        <div className="flex flex-col items-center justify-center space-x-2">
                            <Textarea placeholder="New task here..." value={snap.newTodo} onChange={(ev) => store.newTodo = ev.target.value}/>
                            <div className="flex gap-4 mt-4">
                                <Button variant={snap.subject === "Daily" ? 'default' : 'outline'} onClick={()=> store.subject = "Daily"} className="px-2 py-1 border rounded-md">Daily</Button>
                                <Button variant={snap.subject === "Weekly" ? 'default' : 'outline'} onClick={()=> store.subject = "Weekly"} className="px-2 py-1 border rounded-md">Weekly</Button>
                                <Button variant={snap.subject === "Monthly" ? 'default' : 'outline'} onClick={()=> store.subject = "Monthly"} className="px-2 py-1 border rounded-md">Monthly</Button>
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
 
export default AddTodoDrawer;