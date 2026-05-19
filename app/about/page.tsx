
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Lightbulb, TrendingUp } from "lucide-react"
export default function About() {
  return (
    <>
      <section className="w-full px-4 md:mt-15 py-10 bg-secondary/60">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="text-2xl text-sky-700 font-semibold pb-2">
            Qui sommes-nous ?
          </h1>
          <span className="mx-auto block h-1 w-20 rounded bg-green-800"></span>
          <p className="mx-auto pt-8 text-base leading-7 text-gray-700 md:text-lg">
            Chez Sogetec, chaque projet est une opportunité de transformer une
            idée en une solution concrète et performante. Depuis nos débuts,
            nous accompagnons entreprises et particuliers avec une seule
            ambition : apporter de l’énergie, de la fiabilité et de l’innovation
            au cœur de leurs installations.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center">
            <CardTitle className="mb-6 text-left text-2xl font-semibold flex flex-col gap-3 text-green-800 md:flex-row md:items-center">
              <Lightbulb className="h-6 w-6" /> Nos Missions
            </CardTitle>
            <div className="flex flex-col items-center gap-6 text-base leading-7 md:flex-row md:text-lg">
              <p className="max-w-xl">
                La mission de Sogetec est d’accompagner ses clients dans la
                conception, la réalisation et la maintenance de solutions
                électriques et techniques fiables, performantes et durables.
              </p>
              <img
                src="boite.png"
                width={180}
                className="rounded-full"
                height={180}
                alt="Boîte"
              />
            </div>
            <CardTitle className="mb-6 text-2xl font-semibold flex flex-col gap-3 text-green-800 md:flex-row md:items-center ">
              <TrendingUp className="h-6 w-6" /> Nos Objectifs
            </CardTitle>
            <div className="flex flex-col items-center gap-6 text-base leading-7 md:flex-row md:text-lg">
              <img
                src="rouleau.png"
                width={180}
                className="rounded-full"
                height={180}
                alt="Rouleau"
              />
              <p className="max-w-xl">
                Nous aspirons à bâtir un avenir où performance énergétique,
                sécurité et innovation se conjuguent pour offrir des
                infrastructures modernes et efficaces, tout en contribuant au
                développement des secteurs industriel et résidentiel.
              </p>
            </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Button className=" animate__animated animate__pulse w-xs duration-initial animate__duration-infinite p-4 rounded-2xl bg-sky-600 text-xl hover:bg-sky-700"  >
            Contactez-Nous
          </Button>
        </div>
      </section>
    </>
  )
}
