
import Link from "next/link";
import Image from "./components/Image";
import Hero from "./components/Hero"
export default function Home() {
  return (
    <div>
      <div className="text-[20vw] text-center mt-[90px]">Home</div>
      <div className="flex justify-center gap-5">
      <Link className="text-center py-1 px-5 rounded-lg border-[1px] border-black" href={"/todos"}>Todos</Link>
        <Link className="text-center py-1 px-5 rounded-lg border-[1px] border-black" href={"/products"}>Products</Link>
        <Link className="text-center py-1 px-5 rounded-lg border-[1px] border-black" href={"/recipes"}>Recipes</Link>
        <Link className="text-center py-1 px-5 rounded-lg border-[1px] border-black" href={"/users"}>All Users</Link>
      </div>
   </div>
  );
}
