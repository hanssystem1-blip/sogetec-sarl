import React from "react";
import Link from "next/link";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Img from "@/public/img.png";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export default function Devis() {
  return (
    <>
      <main className="w-full h-full md:h-screen  flex bg-secondary gap-6 flex-col justify-center items-center">
        <div className="md:pt-20 pt-20 "  >
          <h1 className="md:text-3xl text-xl font-bold">Commencer un projet ?</h1>
        </div>
        <section className="bg-gray-50 py-10 px-5 flex ">
          <div className="md:flex hidden" >
            <img
              src="img.png"
              className="w-100 h-auto grayscale-25"
              alt="baniere"
            />
          </div>
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft />
              retour
            </Link>

            <div className="grid md:grid-cols-2   items-center px-6  gap-4 md:gap-4">
              <div>
                <label htmlFor="nom">
                  Nom<span className="text-destructive">*</span>
                </label>
                <Input id="nom" placeholder="ex: mark jonhson" required />
              </div>
              <div>
                <label htmlFor="email">
                  E-mail<span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  placeholder="ex: jonhson@gmail.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="telephone">
                  Telephone<span className="text-destructive">*</span>
                </label>
                <Input
                  id="telephone"
                  type="number"
                  placeholder="ex: 690 41 41 41 "
                  required
                />
              </div>
              <div>
                <label htmlFor="telephone">
                  services<span className="text-destructive">*</span>
                </label>
                <NativeSelect>
                  <NativeSelectOption value="">
                    Installation électrique
                  </NativeSelectOption>
                  <NativeSelectOption value="">
                    systèmes automatisés
                  </NativeSelectOption>
                  <NativeSelectOption value="">
                    pneumatique industriel
                  </NativeSelectOption>
                  <NativeSelectOption value=" ">
                    énergies renouvelables
                  </NativeSelectOption>
                  <NativeSelectOption value="">
                    distribution de matériel électrique
                  </NativeSelectOption>
                  <NativeSelectOption value="">
                    systèmes électriques
                  </NativeSelectOption>
                  <NativeSelectOption value="">
                    maintenance electrique
                  </NativeSelectOption>
                  <NativeSelectOption value="">
                    Câblage, éclairage, mesure
                  </NativeSelectOption>
                </NativeSelect>
              </div>
            </div>
            <div className="flex items-center py-4 px-6 gap-6"> 
              <Textarea
                name=""
                placeholder="description de la demande..."
                className=" outline"
                id="msg"
              ></Textarea>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
