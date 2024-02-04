"use client"

import AddTodoDrawer from "@/components/add-todo-drawer";
import Navs from "@/components/navs";
import TopBar from "@/components/top-bar";
import { useSnapshot } from "valtio";
import state from '@/app/store/store'
import Daily from "./pages/Daily";

export default function Home() {

  const snap = useSnapshot(state)

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <TopBar/>
      <Navs/>
      <AddTodoDrawer/>
    </main>
  );
}
