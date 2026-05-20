"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import 'animate.css';
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import sogetec from "@/public/sogetec.png";
import avis from "@/public/avis.png";
import avis2 from "@/public/avis2.png";
import avis3 from "@/public/avis3.png";
import avis4 from "@/public/avis4.png";
import multimetre from "@/public/multimetre.png";
import cable from "@/public/cable.png";
import boite from "@/public/boite.png";
import rouleau from "@/public/rouleau.png";
import prise from "@/public/prise.png";
import tree_m from "@/public/tree_m.png";
import mazda from "@/public/mazda.png";
import legrand from "@/public/legrand.png";
import pirelli from "@/public/pirelli.png";
import philips from "@/public/Philips.png";
import disjoncteur from "@/public/disjoncteur.png";
import {
  Lightbulb,
  LucideColumnsSettings,
  MenuIcon,
  PenToolIcon,
  Percent,
  ShieldCheck,
  Signpost,
  Star,
  StarHalf,
  StarIcon,
  TrafficCone,
  TrendingUp,
  Zap,
} from "lucide-react";
export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  );
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full px-4 pt-30 pb-10 text-center bg-green-50 ">
        <div className="w-full max-w-4xl ">
          <h2 className="text-3xl animate__fadeInDown animate__animated font-semibold  leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl mb-6">
            Votre partenaire en électricité et travaux techniques
          </h2>
          <p className="mx-auto animate__fadeIn animate__animated mb-8 max-w-2xl text-base leading-7 text-gray-700 md:text-lg">
            Nous sommes une entreprise spécialisée dans les services de qualité
            pour répondre à vos besoins. Découvrez nos services et notre
            boutique pour trouver ce qui vous convient le mieux.
          </p>

          <div className="flex flex-col items-center animate__fadeInUp animate__animated justify-center gap-4 sm:flex-row">
            <Link className="w-full sm:w-auto" href= "https://wa.link/vthve5" >
              <Button className="w-full md:w-auto bg-sky-700">
              Nous contacter
            </Button>
            </Link>
            <Link href="/devis" className="w-full sm:w-auto">
              <Button className="w-full md:w-auto bg-sky-700">
                Demander un devis
              </Button>
            </Link>
          </div>
        </div>
      </main>
      {/* partie du carrousel */}
      <section className="w-full px-4 py-10 animate__slideInLeft animate__animated">
        <div className="mx-auto w-full flex flex-col justify-center items-center max-w-8xl">
          <Carousel plugins={[plugin.current]} className="w-full max-w-250  ">
            <CarouselContent className="w-full h-[24rem] md:h-[24rem]">
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-6 h-full p-6 text-center md:flex-row md:text-left">
                      <img
                        src="rouleau.png"
                        className="max-h-44 md:max-h-56"
                        alt=""
                      />
                      <span className="text-md font-semibold md:text-3xl">
                        Retrouvez vos câbles haut de gamme chez Sogetec
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-6 h-full p-6 text-center md:flex-row md:text-left">
                      <img
                        src="disjoncteur.png"
                        className="max-h-44 md:max-h-56"
                        alt=""
                      />
                      <span className="text-md font-semibold md:text-3xl">
                        Équipements de protection électriques fiables.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-6 h-full p-6 text-center md:flex-row md:text-left">
                      <img
                        src="prise.png"
                        className="max-h-44 md:max-h-56"
                        alt=""
                      />
                      <span className="text-md font-semibold md:text-3xl">
                        Prises et accessoires adaptés à tous vos besoins.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-6 h-full p-6 text-center md:flex-row md:text-left">
                      <img
                        src="rouleau.png"
                        className="max-h-44 md:max-h-56"
                        alt=""
                      />
                      <span className="text-md font-semibold md:text-3xl">
                        Solutions de câbles et matériels haut de gamme.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-6 h-full p-6 text-center md:flex-row md:text-left">
                      <img
                        src="boite.png"
                        className="max-h-44 md:max-h-56"
                        alt=""
                      />
                      <span className="text-md font-semibold md:text-3xl">
                        Boîtes et coffrets pour installations robustes.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-6 h-full p-6 text-center md:flex-row md:text-left">
                      <img
                        src="cable.png"
                        className="max-h-44 md:max-h-56"
                        alt=""
                      />
                      <span className="text-md font-semibold md:text-3xl">
                        Câbles et accessoires adaptés aux usages professionnels.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center gap-6 h-full p-6 text-center md:flex-row md:text-left">
                      <img
                        src="multimetre.png"
                        className="max-h-44 md:max-h-56"
                        alt=""
                      />
                      <span className="text-md font-semibold md:text-3xl">
                        Multimètres et outils de mesure précis.
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* section de nos services */}

      <section className="w-full px-4 py-10">

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="md:text-2xl text-lg text-sky-700 font-semibold pb-2">
            Nos Services
          </h1>
          <span className="mx-auto block h-1 w-20 rounded bg-green-800"></span>
          <p className="pt-6 text-md md:text-lg  text-gray-700">
            Solutions électriques fiables et innovantes, adaptées aux besoins
            des particuliers et des entreprises.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-2 md:grid-cols-2 xl:grid-cols-3">
          <Card className="p-6 hover:transition hover:-translate-y-2 duration-200 ease-in animate__slideInUp animate__animated">
            <LucideColumnsSettings className="mb-4 h-10 w-10 text-green-700" />
            <CardTitle>
              Automatisme électrique et pneumatique industriel
            </CardTitle>
            <CardDescription>
              Conception et mise en œuvre de systèmes automatisés pour optimiser
              vos processus industriels.
            </CardDescription>
            <CardFooter>
              <Link href="">savoir plus</Link>
            </CardFooter>
          </Card>
          <Card className="p-6 hover:transition hover:-translate-y-2 duration-200 ease-in animate__slideInUp animate__animated">
            <ShieldCheck className="mb-4 h-10 w-10 text-green-700" />
            <CardTitle>
              Câblage, éclairage, mesure, protection et commande
            </CardTitle>
            <CardDescription>
              Installation complète de réseaux électriques incluant éclairage,
              dispositifs de mesure et systèmes de protection.
            </CardDescription>
            <CardFooter>
              <Link href="">savoir plus</Link>
            </CardFooter>
          </Card>
          <Card className="p-6 hover:transition hover:-translate-y-2 duration-200 ease-in animate__slideInUp animate__animated">
            <Signpost className="mb-4 h-10 w-10 text-green-700" />
            <CardTitle>Produits d’entretien industriel</CardTitle>
            <CardDescription>
              Fourniture de produits professionnels pour le nettoyage et la
              maintenance des environnements industriels.
            </CardDescription>
            <CardFooter>
              <Link href="">savoir plus</Link>
            </CardFooter>
          </Card>
          <Card className="p-6 hover:transition hover:-translate-y-2 duration-200 ease-in animate__slideInUp animate__animated">
            <Percent className="mb-4 h-10 w-10 text-green-700" />
            <CardTitle>Vente et distribution de matériel électrique</CardTitle>
            <CardDescription>
              Sogetec agit comme grossiste et distributeur d’équipements électriques pour particuliers, entreprises et industries.
            </CardDescription>
            <CardFooter>
              <Link href="">savoir plus</Link>
            </CardFooter>
          </Card>
          <Card className="p-6 hover:transition hover:-translate-y-2 duration-200 ease-in animate__slideInUp animate__animated">
            <Zap className="mb-4 h-10 w-10 text-green-700" /> 
            <CardTitle>Solutions en énergies renouvelables</CardTitle>
            <CardDescription>
              développement des projets liés aux énergies renouvelables, notamment les installations permettant une production d’énergie plus durable.
            </CardDescription>
            <CardFooter>
              <Link href="">savoir plus</Link>
            </CardFooter>
          </Card>
          <Card className="p-6 hover:transition hover:-translate-y-2 duration-200 ease-in animate__slideInUp animate__animated">
            <TrafficCone className="mb-4 h-10 w-10 text-green-700" />
            <CardTitle>Travaux Haute Tension (HT) et Basse Tension (BT)</CardTitle>
            <CardDescription>
              Nous interviennons sur les infrastructures haute et basse tension destinées au transport et à la distribution d’électricité.
            </CardDescription>
            <CardFooter>
              <Link href="">savoir plus</Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* section boutique */}

      <section className="flex flex-col justify-center  py-10 w-full">
        <div className="flex flex-col justify-center text-center items-center ">
          <h1 className="text-lg md:text-2xl  text-sky-700 font-semibold pb-2">
            Explorer Nos equipements et materielles
          </h1>
          <span className="mx-auto block h-1 w-20 rounded bg-green-800"></span>
          <p className="pt-6 text-md md:text-lg text-gray-700">
            Des équipements de qualité sélectionnés pour garantir performance,
            fiabilité et durabilité.
          </p>
        </div>
      </section>

      {/* partie a propos */}
      <section className="w-full px-4 py-10 bg-secondary/60">
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
        <div className="flex flex-col gap-8">
          <Card className="mx-auto w-full max-w-3xl px-6 py-8">
            <CardTitle className="mb-6 text-2xl font-semibold flex flex-col gap-3 text-green-800 md:flex-row md:items-center">
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
          </Card>
          <Card className="mx-auto w-full max-w-3xl px-6 py-8">
            <CardTitle className="mb-6 text-2xl font-semibold flex flex-col gap-3 text-green-800 md:flex-row md:items-center md:justify-end">
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
          </Card>
        </div>
        <div className="mt-10 flex justify-center">
          <Button className=" animate__animated animate__pulse w-xs duration-initial animate__duration-infinite p-4 rounded-2xl bg-sky-600 text-xl hover:bg-sky-700"  >
            Contactez-Nous
          </Button>
        </div>
      </section>
      {/* partie temoignage */}

      <section>
        <div className="flex flex-col justify-center px-10  ">
          <h1 className="text-md md:text-2xl text-sky-700 font-semibold pb-2">
            Que disent nos clients ?
          </h1>
          <span className="h-1 w-15 md:w-20 text-center rounded bg-green-800 "></span>
        </div>
        <div className="grid md:grid-cols-2 flex-wrap p-6 gap-8 grid-rows-2">
          <div className="bg-secondary rounded-md hover:transform hover:scale-101 duration-200 p-6 ">
            <div className="flex gap-4 text-sm md:text  ">
              <div>
                <img src="avis.png" width={60} height={60} alt="" className="rounded-full" />
              </div>
              <div className="">
                <h1>Andrew Johnson</h1>
                <p>DG Simtech 3D</p>
              </div>
              <div className="flex gap-1">
                <Star className="text-yellow-400 " />
                <Star className="text-yellow-400 " />
                <Star className="text-yellow-400 " />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 ">
              
              <CardDescription>
                “Une équipe très professionnelle !” Sogetec a réalisé notre
                installation électrique avec rigueur et efficacité. Le travail
                est propre et conforme aux normes.
              </CardDescription>
            </div>
          </div>
          <div className="bg-secondary rounded-md hover:transform hover:scale-101 duration-200 p-6 ">
            <div className="flex gap-4 text-sm md:text ">
              <div>
                <img src="avis2.png"  alt="" className="rounded-full w-15 max-h-15" />
              </div>
              <div>
                <h1>Andrew Johnson</h1>
                <p>DG Simtech 3D</p>
              </div>
              <div className="flex gap-1">
                <Star className="text-yellow-400 " />
                <Star className="text-yellow-400 " />
                <Star className="text-yellow-400 " />
                <StarHalf className="text-yellow-400 " />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 ">
              
              <CardDescription>
                “Un partenaire de confiance” Sogetec nous accompagne depuis
                plusieurs projets. Toujours disponibles, sérieux et à l’écoute
                de nos besoins.
              </CardDescription>
            </div>
          </div>
          <div className="bg-secondary rounded-md hover:transform hover:scale-101 duration-200 p-6 ">
            <div className="flex gap-4 text-sm md:text ">
              <div>
                <img src="avis3.png" width={60} height={60} alt="" className="rounded-full" />
              </div>
              <div>
                <h1>Andrew Johnson</h1>
                <p>DG Simtech 3D</p>
              </div>
               <div className="flex gap-1">
                <Star className="text-yellow-400 " />
                <Star className="text-yellow-400 " />
                <StarHalf className="text-yellow-400 " />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 ">
             
              <CardDescription>
                “Très bonne expertise technique” Leur maîtrise des systèmes
                électriques et industriels nous a permis d’optimiser nos
                installations.
              </CardDescription>
            </div>
          </div>
          <div className="bg-secondary rounded-md hover:transform hover:scale-101 duration-200 p-6 ">
            <div className="flex gap-4 text-sm md:text ">
              <div>
                <img src="avis4.png"  alt="" className="rounded-full w-15 max-h-15" />
              </div>
              <div>
                <h1>Andrew Johnson</h1>
                <p>DG Simtech 3D</p>
              </div>
              <div className="flex gap-1">
                <Star className="text-yellow-400 " />
                <Star className="text-yellow-400 " />
                <Star className="text-yellow-400 " />
                <Star className="text-yellow-400 " />
                <Star className="text-yellow-400 " />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4 ">
              
              <CardDescription>
                “Service rapide et fiable” Nous avons fait appel à Sogetec pour
                un dépannage urgent, et l’intervention a été rapide avec un
                excellent résultat.
              </CardDescription>
            </div>
          </div>
        </div>
      </section>
      {/* notre localisation */}

      <section className="bg-green-50 py-10 flex flex-col gap-4">
        <div className="flex  flex-col  px-10 ">
          <h1 className="text-md  md:text-2xl text-sky-700 font-semibold pb-2">
            Localisez-Nous
          </h1>
          <span className="h-1 w-20 text-center rounded bg-green-800 "></span>
        </div>
        <div className="w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d279.19929890507757!2d9.71187071203503!3d4.058560123116862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLittoral%20B.P.%2011058%2C%20CM%20cinema%20eden!5e0!3m2!1sfr!2scm!4v1779152508376!5m2!1sfr!2scm" width={600} height={450} className="w-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </section>
      {/* partenaire de confiance */}
      <section className="bg-green-50 py-10">
        <div className="flex flex-col justify-center  px-10  ">
          <h1 className="text-md md:text-2xl text-sky-700 font-semibold pb-2">
            Nos Partenaires
          </h1>
          <span className="h-1 w-20 text-center rounded bg-green-800 mb-4 "></span>
          <p>Toujours en collaboration avec ses partenaires europeens pour vous garantir des equipements de qualité</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
          <div
            className="hover:transform hover:scale-108   duration-100 ease-in"
          >
            <img src="philips.png" className="md:w-35 w-25 h-15 md:h-20" alt="Sogetec Logo" />
          </div>
          <div
            className="hover:transform hover:scale-108   duration-100 ease-in"
          >
            <img src="mazda.png" className="md:w-35 w-25 h-15 md:h-20" alt="Sogetec Logo" />
          </div>
          <div
            className="hover:transform hover:scale-108   duration-100 ease-in"
          >
            <img src="tree_m.png" className="md:w-35 w-25 h-15 md:h-20" alt="Sogetec Logo" />
          </div>
          <div className="hover:transform hover:scale-108   duration-100 ease-in">
            <img src="pirelli.png" className="md:w-35 w-25 h-15 md:h-20" alt="Sogetec Logo" />
          </div>
          <div className="hover:transform hover:scale-108   duration-100 ease-in">
            <img src="legrand.png" className="md:w-35 w-25 h-15 md:h-20" alt="Sogetec Logo" />
          </div>
        </div>
      </section>
    </>
  );
}
