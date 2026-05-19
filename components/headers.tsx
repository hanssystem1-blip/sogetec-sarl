'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import sogetec from '@/public/sogetec.png'
export default function header() {
  return (
    
      <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-200/70 backdrop-blur-xl bg-white/60 dark:bg-slate-950/80">
        <nav className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-3">
            <img src={sogetec.src} alt="Sogetec Logo" width={64} height={64} />
            <h1 className="text-green-800 text-xl font-extrabold sm:text-2xl">
              SOGETEC-SARL
            </h1>
          </div>
          <div className="hidden items-center gap-8 font-semibold text-slate-700 md:flex">
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
          <div className="md:hidden">
            <MenuIcon className="h-6 w-6 text-slate-700" />
          </div>
        </nav>
      </header>
   
  )
}
