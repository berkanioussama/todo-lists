import Daily from "@/app/pages/Daily";
import Monthly from "@/app/pages/Monthly";
import Weekly from "@/app/pages/Weekly";
import store from "@/app/store/store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSnapshot } from "valtio";

const Navs = () => {

    const snap = useSnapshot(store)
    
    return (
        <Tabs defaultValue="Daily" className="">
            <div className="flex justify-center items-center p-4">
                <TabsList>
                    <TabsTrigger value="Daily" onClick={()=> store.subject = "Daily"} >Daily</TabsTrigger>
                    <TabsTrigger value="Weekly" onClick={()=> store.subject = "Weekly"}>Weekly</TabsTrigger>
                    <TabsTrigger value="Monthly" onClick={()=> store.subject = "Monthly"}>Monthly</TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="Daily">
                <Daily/>
            </TabsContent>
            <TabsContent value="Weekly">
                <Weekly/>
            </TabsContent>
            <TabsContent value="Monthly">
                <Monthly/>
            </TabsContent>
        </Tabs>
    );
}
 
export default Navs;