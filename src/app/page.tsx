// import Image from "next/image";
import MonsterList from "@/app/components/MonsterList"

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen sm:p-16 bg-orange-50">
      <main className="">
        <div className="text-center font-bold">
          <h1 className="text-xl">
             Welcome to Monster Selector!
             </h1>
        </div>
        <div className="">
          <MonsterList/>
        </div>
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
