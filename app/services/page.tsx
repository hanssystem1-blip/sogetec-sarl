
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { LucideColumnsSettings, ShieldCheck, Signpost, TrafficCone, Zap, Percent, ShieldCog, Leaf } from "lucide-react"
export default function Services() {
  return (
    <>
       <section className="w-full px-4 py-10 pt-25 md:py-10">

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h1 className="text-2xl text-sky-700 font-semibold pb-2">
            Nos Services
          </h1>
          <span className="mx-auto block h-1 w-20 rounded bg-green-800"></span>
          <p className="pt-8 text-gray-700">
            Solutions électriques fiables et innovantes, adaptées aux besoins
            des particuliers et des entreprises.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 px-2 md:grid-rows-3 md:grid-cols-2">
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
            <Leaf className="mb-4 h-10 w-10 text-green-700" /> 
            <CardTitle>Solutions en énergies renouvelables</CardTitle>
            <CardDescription>
              développement des projets liés aux énergies renouvelables, notamment les installations permettant une production d’énergie plus durable.
            </CardDescription>
            <CardFooter>
              <Link href="">savoir plus</Link>
            </CardFooter>
          </Card>
          <Card className="p-6 hover:transition hover:-translate-y-2 duration-200 ease-in animate__slideInUp animate__animated">
            <Zap className="mb-4 h-10 w-10 text-green-700" /> 
            <CardTitle>Installation électrique générale et industrielle</CardTitle>
            <CardDescription>
              conception, installation et  mise en service des systèmes électriques pour les bâtiments résidentiels, commerciaux et industriels.
            </CardDescription>
            <CardFooter>
              <Link href="">savoir plus</Link>
            </CardFooter>
          </Card>
          <Card className="p-6 hover:transition hover:-translate-y-2 duration-200 ease-in animate__slideInUp animate__animated">
            <ShieldCog className="mb-4 h-10 w-10 text-green-700" />     
            <CardTitle>Maintenance, suivi et dépannage électrique</CardTitle>
            <CardDescription>
              Nous assurons la maintenance préventive et corrective des installations afin d’éviter les pannes et garantir la continuité des activités.
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
    </>
  )
}
