"use client";

import Link from "next/link";
import sogetec from "@/public/sogetec.png";
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { ArrowRight, FileBraces, LucideFileBraces, Mail } from "lucide-react";
import { RiFacebookCircleFill, RiLinkedinBoxFill, RiTwitterXFill } from "@remixicon/react";
export default function footer() {
  return (
    <footer className="grid md:grid-cols-4 font-inter.classname p-10 md:grid-rows-1 md:gap-10 grid-cols-1 grid-rows-4 gap-6 bg-primary/96 text-white/80">
      <div className="flex flex-col  gap-3">
        <img src={sogetec.src} alt="Sogetec Logo" width={64} height={64} />
        <h1 className="text-green-800 text-xl font-extrabold sm:text-2xl">
          SOGETEC-SARL
        </h1>
        <p>
          Sogetec, votre expert en solutions électriques fiables, durables et
          performantes.
        </p>
        <div className="flex items-center gap-4 text-2xl">
          <Link className="  cursor-pointer" href="https://www.linkedin.com/company/sogetec-sarl/" >
            <RiLinkedinBoxFill />
          </Link>
          <Link className="  cursor-pointer" href="https://www.facebook.com/sogetec.sarl" >
            <RiFacebookCircleFill />
          </Link>
          <Link className="  cursor-pointer" href="https://twitter.com/sogetec_sarl" >
            <RiTwitterXFill />
          </Link>
          <Link className="  cursor-pointer" href="mailto:sogetec-sarl@gmail.com">
            <Mail />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-sky-500">Liens Utiles</h1>
          <span className="mx-0 block h-1 w-10 rounded bg-green-800"></span>
        </div>
        <div className="flex flex-col ">
          <div className="flex items-center hover:transform hover:translate-x-2 ease-in duration-200 gap-2 hover:text-sky-500  ">
            <ArrowRight size={20} /><Link href="/" className="cursor-pointer">Accueil</Link>
          </div>
          <div className="flex items-center hover:transform hover:translate-x-2 ease-in duration-200 gap-2 hover:text-sky-500  ">
            <ArrowRight size={20} /><Link href="/services" className="cursor-pointer">Services</Link>
          </div>
          <div className="flex items-center hover:transform hover:translate-x-2 ease-in duration-200 gap-2 hover:text-sky-500  ">
            <ArrowRight size={20} /><Link href="/boutique" className="cursor-pointer">Boutique</Link>
          </div>
          <div className="flex items-center hover:transform hover:translate-x-2 ease-in duration-200 gap-2 hover:text-sky-500  ">
            <ArrowRight size={20} /><Link href="/a-propos" className="cursor-pointer">À propos</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-sky-500">Nos Services</h1>
          <span className="mx-0 block h-1 w-10 rounded bg-green-800"></span>
        </div>
        <div className="flex flex-col">
          <p>-Produits d’entretien industriel</p>
          <p>-Automatisme électrique et pneumatique industriel</p>
          <p>-Câblage, éclairage</p>
          <p>-mesure, protection et commande</p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
         <div>
          <h1 className="text-sky-500">Newsletter</h1>
          <span className="mx-0 block h-1 w-10 rounded bg-green-800"></span>
        </div>
        <div className="flex">
            <Input type="email" className="border-green-800 outline-green-800 " placeholder="votre e-mail" /><Button className="bg-green-800" >OK</Button>
        </div>
      </div>
    </footer>
  );
}
