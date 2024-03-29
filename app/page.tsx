"use client"

import AddTodoDrawer from "@/components/add-todo-drawer";
import Navs from "@/components/navs";
import TopBar from "@/components/top-bar";
import { useSnapshot } from "valtio";
import store from '@/app/store/store'
import { useEffect } from "react";


export default function Home() {

  const snap = useSnapshot(store)

  useEffect(()=>{
    localStorage.setItem('todoLists', JSON.stringify(store.todos))
  }, [store.todos])

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <div className="w-full max-w-3xl mx-auto">
        <TopBar/>
        <Navs/>
        <AddTodoDrawer/>
      </div>
    </main>
  );
}
