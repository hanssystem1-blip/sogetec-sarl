'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MenuIcon, X } from 'lucide-react'
import sogetec from '@/public/sogetec.png'
export default function header() {

const [isOpen, setOpen] = useState(false);
const toggleMenu = () => setOpen(!isOpen);

  return (
    
      <header className="fixed inset-x-0 top-0 z-20 border-b  backdrop-blur-xl bg-white/60 dark:bg-slate-950/80">
        <nav className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-3">
            <img src={sogetec.src} alt="Sogetec Logo" className='md:w-18 w-14 h-12 md:h-15'  />
            <h1 className="text-green-800  text-md md:text-xl font-extrabold sm:text-2xl">
              SOGETEC-SARL
            </h1>
          </div>
          <div  className="hidden items-center gap-8 font-semibold  text-slate-700 md:flex">
            <Link href="/">Accueil</Link>
            <Link href="/services">Services</Link>
            <Link href="/boutique">Boutique</Link>
            <Link href="/about">À propos</Link>
            <Link href="/devis">
              <Button variant="outline" size="sm" className="ml-4 font-bold">
                Demander un devis
              </Button>
            </Link>
          </div>
          <div  className="md:hidden mobile-menu">
            {isOpen ? (
              <X 
                className="h-6 w-6 text-slate-700 cursor-pointer" 
                onClick={toggleMenu}
              />
            ) : (
              <MenuIcon 
                className="h-6 w-6 text-slate-700 cursor-pointer" 
                onClick={toggleMenu}
              />
            )}
          </div>
        </nav>
        {/* Menu Mobile */}
        {isOpen && (
          <nav className="md:hidden animate__fadeInDown animate__animated border-t border-slate-200/70 bg-white/60 dark:bg-slate-950/90">
            <div className="flex flex-col gap-4 px-4 py-4 font-semibold text-slate-700">
              <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/boutique" onClick={() => setOpen(false)}>Boutique</Link>
              <Link href="/about" onClick={() => setOpen(false)}>À propos</Link>
              <Link href="/devis" onClick={() => setOpen(false)}>
                <Button variant="outline" size="sm" className="w-full bg-sky-700 hover:bg-sky-800 text-white ">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </header>
    )
}
