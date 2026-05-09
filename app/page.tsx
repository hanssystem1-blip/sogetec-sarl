
"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"
import Link from "next/link";
import sogetec from "@/public/sogetec.png";
import { MenuIcon } from "lucide-react";
export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <>
      <header>
        <nav className="flex items-center justify-between p-4 w-full bg-gray-50">
          <div className="flex items-center justify-center gap-4 ">
            <img src={sogetec.src} alt="Sogetec Logo"
              width={80}
              height={80}
            />
            <h1 className="text-green-800 text-2xl font-extrabold " >SOGETEC-SARL</h1>

          </div>
          <div className="md:flex sm:flex-none items-center gap-10 font-bold  " >
            <Link href="/" >Accueil</Link>
            <Link href="/services" >Services</Link>
            <Link href="/boutique" >Boutique</Link>
            <Link href="/a-propos" >a propos</Link>
            <Link href="/devis">
            <Button variant="outline" size="sm" className="ml-4 font-bold  ">
              Demander un devis
            </Button></Link>

          </div>
          <div className=" lg:flex-none">
            <MenuIcon

            />
          </div>
        </nav>
      </header>
      <main className="flex py-10 w-full justify-center bg-green-50  ">
        <div className=" text-center w-2/4  justify-center  ">
          <h2 className="text-4xl font-bold  mb-6">Votre partenaire en électricité et
            travaux techniques</h2>
          <p className="text-md pb-8 text-gray-700">
            Nous sommes une entreprise spécialisée dans les services de qualité pour répondre à vos besoins. Découvrez nos services et notre boutique pour trouver ce qui vous convient le mieux.
          </p>
          
          <div className="flex justify-center gap-6">
            <Button className="bg-sky-700">Nous contacter</Button>
            <Link href="/devis">
            <Button className="bg-sky-700">Demander un devis</Button>
            </Link>
          </div>
        </div>
        
      </main>
      <Carousel
      plugins={[plugin.current]}
      className="w-full  sm:max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full">
        
          <CarouselItem className="w-full" >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center  justify-center p-6">
                  <img src="sogetec.png" alt="" />
                  <span className="text-4xl font-semibold"></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src="sogetec.png" alt="" />
                  <span className="text-4xl font-semibold"></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src="sogetec.png" alt="" />
                  <span className="text-4xl font-semibold"></span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      <section className="flex flex-col justify-center  py-10 w-full">
        <div className="flex flex-col justify-center  items-center ">
          <h1 className="text-2xl text-sky-700 font-semibold pb-2">Nos Services</h1>
          <span className="h-1 w-20 text-center rounded bg-green-800 "></span>
          <p className="pt-8 text-gray-700">solutions électriques fiables et innovantes, adaptées aux
            besoins des particuliers et des entreprises.</p>
        </div>
      </section>
      <section className="flex flex-col justify-center  py-10 w-full">
        <div className="flex flex-col justify-center  items-center ">
          <h1 className="text-2xl text-sky-800 font-semibold pb-2">Explorer Nos equipements
            et materielles</h1>
          <span className="h-1 w-20 text-center rounded bg-green-800 "></span>
          <p className="pt-8 text-gray-700">Des équipements de qualité sélectionnés pour garantir
            performance, fiabilité et durabilité.</p>
        </div>
      </section>
      <section className="flex flex-col justify-center  py-10 w-full">
        <div className="flex flex-col justify-center  items-center ">
          <h1 className="text-2xl text-cyan-800 font-semibold pb-2">Qui Sommes nous ?</h1>
          <span className="h-1 w-20 text-center rounded bg-green-800 "></span>
          <p className="pt-8 text-gray-700 text-center w-2/3 ">Chez Sogetec, chaque projet est une opportunité de transformer une idée en une solution concrète et
            performante. Depuis nos débuts, nous accompagnons entreprises et particuliers avec une seule ambition : apporter
            de l’énergie, de la fiabilité et de l’innovation au cœur de leurs installations.

          </p>
        </div>
      </section>
    </>
  );
}
