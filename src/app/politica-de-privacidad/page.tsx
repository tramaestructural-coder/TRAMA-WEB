import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Qué datos recopila el sitio de Trama Estructural, para qué se usan y cómo ejercer tus derechos según la Ley 19.628.",
  alternates: { canonical: "/politica-de-privacidad" },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <section className="bg-trama bg-paper pb-12 pt-20 lg:pb-20 lg:pt-24">
      <Container>
        <Reveal>
          <SectionLabel index="00" title="Política de privacidad" />
          <h1 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-4xl">
            Cómo tratamos tus datos en este sitio.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-ink/50">
            Última actualización: 3 de agosto de 2026.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 max-w-2xl space-y-8">
          <div className="space-y-3">
            <p className="text-base leading-relaxed text-ink/70">
              {site.name} SpA ("nosotros") respeta tu privacidad. Este documento explica, en
              términos simples, qué información recopilamos cuando visitas{" "}
              {site.domain} y cuando nos escribes por el formulario de contacto,
              con qué fin la usamos y qué derechos tienes sobre ella.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl text-ink">Qué datos recopilamos</h2>
            <p className="text-base leading-relaxed text-ink/70">
              <strong className="text-ink">Datos de navegación.</strong> Usamos Google
              Analytics 4 para entender, de forma agregada, cómo se usa el sitio:
              páginas visitadas, tiempo de permanencia, dispositivo aproximado y
              origen del tráfico. Si Google Signals está activo, esta medición
              puede incluir señales asociadas a tu cuenta de Google cuando estás
              conectado a ella en tu navegador. No usamos esta información para
              identificarte individualmente.
            </p>
            <p className="text-base leading-relaxed text-ink/70">
              <strong className="text-ink">Mapas de calor y grabaciones de sesión.</strong>{" "}
              También usamos Microsoft Clarity para entender, de forma agregada, cómo
              interactúan los visitantes con el sitio (clics, scroll y grabaciones de
              sesión). El texto que escribes en campos como el formulario de contacto se
              enmascara automáticamente antes de guardarse — Clarity no registra el
              contenido real de lo que escribes.
            </p>
            <p className="text-base leading-relaxed text-ink/70">
              <strong className="text-ink">Datos del formulario de contacto.</strong>{" "}
              Cuando completas el formulario en{" "}
              <a href="/contacto" className="text-walnut-500 hover:text-walnut-700">
                /contacto
              </a>
              , recibimos el nombre, el correo electrónico o teléfono de
              contacto que elijas dejar, y el mensaje que nos escribes. No te
              pedimos ni recopilamos ningún otro dato personal a través del
              formulario.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl text-ink">Para qué los usamos</h2>
            <p className="text-base leading-relaxed text-ink/70">
              Para responder tu consulta y evaluar tu proyecto, y para entender qué
              contenido del sitio es útil para nuestros visitantes y así poder
              mejorarlo. No usamos tus datos para fines distintos a estos.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl text-ink">Con quién se comparten</h2>
            <p className="text-base leading-relaxed text-ink/70">
              Los datos de navegación se procesan a través de Google Analytics
              (Google LLC) y Microsoft Clarity (Microsoft Corporation), bajo
              sus propias políticas de privacidad. No vendemos ni compartimos
              tus datos con terceros para fines comerciales o publicitarios.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl text-ink">Tus derechos</h2>
            <p className="text-base leading-relaxed text-ink/70">
              De acuerdo con la Ley N° 19.628 sobre Protección de la Vida
              Privada, puedes solicitarnos en cualquier momento acceder a los
              datos que tenemos sobre ti, rectificarlos si están incorrectos, o
              solicitar su cancelación. Para ejercer cualquiera de estos
              derechos, escríbenos a{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="text-walnut-500 hover:text-walnut-700"
              >
                {site.contactEmail}
              </a>
              .
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-xl text-ink">Responsable</h2>
            <p className="text-base leading-relaxed text-ink/70">
              {site.name} SpA — {site.contactEmail}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
