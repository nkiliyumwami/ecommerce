import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default  function Home() {
  const {data: session} = useSession()
  console.log(session)
  return <Layout>
    <div className="text-blue-900 flex justify-between">
      <h2>Hello, <b>{session?.user?.name}</b></h2>
      <div className="flex gap-1 bg-gray-300 text-black items-center rounded-lg p-1">
        <img src={session?.user?.image} alt="image" className="rounded-lg w-8 h-8"/>
        {session?.user?.name}
      </div>
      
      
    </div>
  </Layout>
}





