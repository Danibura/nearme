import Link from "next/link";
import man from "@/assets/man.svg";


export default function Home() {
  return (
    <div>
      <div className="absolute top-60 left-50">
        <div className=" flex flex-wrap gap-30 items-center">
          <div>
            <h1 className="font-semibold text-9xl">Nearme</h1>
            <h3 className="font-semibold text-6xl mt-10">
              Interact with people near you
            </h3>
          </div>
          <img src={man.src} alt="man" className="w-100" />
        </div>
        <div>
          <Link href={"/signup"}>
            <button className="bg-stone-50 text-stone-900 rounded-2xl px-10 py-4 text-3xl font-bold">
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
