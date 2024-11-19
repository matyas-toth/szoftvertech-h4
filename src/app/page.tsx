import Link from "next/link";
import PageTransition from "./PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-sky-600">Szoftvertechnológia H4 beadandó</h1>
        <p className="text-2xl text-gray-600 mt-2">Válassz egy fejezetet!</p>

        <div className="flex flex-row gap-4 mt-12">
          <Link href="/analizis-modell" className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-lg">
            Analízis modell
          </Link>
          <Link href="/rendszertervezes" className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-lg">
            Rendszertervezés
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}