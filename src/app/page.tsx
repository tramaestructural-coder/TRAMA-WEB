import { Hero } from "@/components/sections/Hero";
import { Presentacion } from "@/components/sections/Presentacion";
import { ServiciosPreview } from "@/components/sections/ServiciosPreview";
import { Metodologia } from "@/components/sections/Metodologia";
import { ProyectosDestacados } from "@/components/sections/ProyectosDestacados";
import { EquipoPreview } from "@/components/sections/EquipoPreview";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Presentacion />
      <ServiciosPreview />
      <Metodologia />
      <ProyectosDestacados />
      <EquipoPreview />
      <CTAFinal />
    </>
  );
}
