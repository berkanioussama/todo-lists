"use client"

import AddTodoDrawer from "@/components/add-todo-drawer";
import Navs from "@/components/navs";
import TopBar from "@/components/top-bar";
import { useSnapshot } from "valtio";
import state from '@/app/store/store'

export default function Home() {

  const snap = useSnapshot(state)

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
