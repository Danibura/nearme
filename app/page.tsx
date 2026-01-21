import Link from "next/link";
import man from "@/assets/man.svg";

export default function Home() {
  return (
    <div>
      <div className="absolute top-10 left-10 md:top-60 md:left-50">
        <div className=" flex flex-wrap md:gap-30 items-center">
          <div>
            <h1 className="font-semibold text-7xl md:text-9xl">Nearme</h1>
            <h3 className="font-semibold text-3xl md:text-6xl mt-4 md:mt-10">
              Interact with people near you
            </h3>
          </div>
          <img
            src={man.src}
            alt="man"
            className="w-60  md:w-100 mt-10 md:mt-0"
          />
        </div>
        <div>
          <Link href="/signup">
            <button className="bg-stone-50 text-stone-900 rounded-2xl px-10 py-4 text-3xl font-bold cursor-pointer hover:scale-110 duration-75 mt-10 md:mt-0">
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
