import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import defaultConfig from '../config/revealjs-default.json'
import { getAssetUrlBuilder } from '../lib'
import { presentationSlideRemixLoader } from '../lib.server'
import { createSlideSectionWithBackgroundImage } from '../components/ipca-default-theme/DefaultSlideSection'
import { RevealJsBaseElement } from '../components/RevealJsBaseElement'
import { MainTitle } from '../components/ipca-default-theme/MainTitle'
import { SubTitle } from '../components/ipca-default-theme/SubTitle'
import { LiturgySteps } from '../components/ipca-default-theme/LiturgyStepsList'
import { LITURGY_STEP_TYPES, LiturgyStep } from '../components/ipca-default-theme/LiturgyStep'
import { VideoSlide } from '../components/ipca-default-theme/VideoSlide'

const PAGE_TITLE = "A Alegria de Servir a Cristo - 26 de Janeiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-33", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-71", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-104", extension: "mp4", resourceType: "video" }
]

export const meta = () => {
  return [
    { title: PAGE_TITLE }
  ]
}

export async function loader(remixLoaderContext) {
  return presentationSlideRemixLoader(remixLoaderContext, CDN_ASSETS_LIST)
}

export default function SlidePage() {
  const [mode, assets] = useLoaderData()

  useEffect(() => {
    window.Reveal = require('reveal.js').default

    if (window.Reveal) {
      const r = window.Reveal()
      r.initialize({ ...defaultConfig, width: 1600 })
    }
  })

  const getAssetUrl = getAssetUrlBuilder(mode, assets)
  const SlideWithBackground = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/cruz-wallpaper-light"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>A ALEGRIA DE SERVIR A CRISTO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA DE SERVIR A CRISTO</MainTitle>
          <SubTitle>TENDO O PRAZER EM SERVIR A CRISTO, NOS ALEGRAMOS NO SENHOR, EM NOSSA ADORAÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 100</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: MARAVILHAS DIVINAS, nº 33</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-33")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao Deus de amor e de imensa bondade,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com voz de júbilo, vinde aclamai!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com coração transbordante de graças,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Seu grande amor, todos, vinde louvai.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No céu, na terra, que maravilhas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vai operando o poder do Senhor!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas seu amor, aos homens perdidos,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Das maravilhas é sempre a maior.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Já nossos pais nos contaram a história</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De Deus, falando com muito prazer,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que nas tristezas, nos grandes perigos,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ele os salvou por seu grande poder.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No céu, na terra, que maravilhas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vai operando o poder do Senhor!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas seu amor, aos homens perdidos,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Das maravilhas é sempre a maior.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Hoje também, nós bem alto, cantamos</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que as orações ele nos atendeu:</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Seu forte braço, que é tão compassivo</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Em nosso auxílio ele sempre estendeu.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No céu, na terra, que maravilhas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vai operando o poder do Senhor!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas seu amor, aos homens perdidos,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Das maravilhas é sempre a maior.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Como até hoje, e daqui para frente,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ele será nosso eterno poder,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nosso castelo bem forte e seguro,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E nossa Fonte de excelso prazer.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No céu, na terra, que maravilhas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vai operando o poder do Senhor!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas seu amor, aos homens perdidos,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Das maravilhas é sempre a maior.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA DE SERVIR A CRISTO</MainTitle>
          <SubTitle>AO SERVIR AO SENHOR, RECONHECEMOS QUE PECAMOS CONTRA NOSSO DEUS, POR ISSO CONFESSAMOS AS NOSSAS FRAQUEZAS, DIANTE DELE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 JOÃO 1.5-10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERDÃO SENHOR, nº 71</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 04 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-71")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se sofrimento te causei, ó Deus!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se ao meu exemplo o fraco tropeçou,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se eu não andei nos bons caminhos teus,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Perdão, Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se vão e fútil foi o meu falar,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se amor a meu irmão não demonstrei;
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se ao sofredor eu não quis ajudar,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Perdão, Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se negligente foi o meu viver,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sem me dispor a pelejar por ti,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se firme em teu trabalho eu não quis ser.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Perdão, Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Escuta, ó Deus, a minha oração
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E vem livrar-me do pecado vil.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Renova este pobre coração!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Amém, Senhor!
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Pergunta 04: O que Deus é?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Deus é Espírito, Infinito, Eterno e Imutável em seu ser, Sabedoria, Poder, Santidade, Justiça, Bondade e Verdade.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA DE SERVIR A CRISTO</MainTitle>
          <SubTitle>ALEGRANDO-SE NO SENHOR, DEVOLVEMOS NOSSOS DÍZIMOS E OFERTAS, CERTOS DE QUE TEMOS RECEBIDO SEU CUIDADO E PROVIDÊNCIA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ATOS 20.35</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO EM ESPÍRITO E EM VERDADE</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em espírito, em verdade, te adoramos, te adoramos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em espírito, em verdade, te adoramos, te adoramos
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Rei dos reis e Senhor te entregamos nosso viver
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Rei dos reis e Senhor te entregamos nosso viver
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pra te adorar ó Rei dos reis, foi que eu nasci ó Rei Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu prazer é te louvar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu prazer é estar nos átrios do Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu prazer é viver na casa de Deus onde flui o amor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em espírito e em verdade, te adoramos, te adoramos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em espírito e em verdade, te adoramos, te adoramos
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Rei dos reis e Senhor te entregamos nosso viver
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Rei dos reis e Senhor te entregamos nosso viver
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pra te adorar ó Rei dos reis, foi que eu nasci ó Rei Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu prazer é te louvar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu prazer é estar nos átrios do Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu prazer é viver na casa de Deus onde flui o amor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pra te adorar ó Rei dos reis foi que eu nasci ó Rei Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu prazer é te louvar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu prazer é estar nos átrios do Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu prazer é viver na casa de Deus ministrando o louvor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Ministrando o louvor, ministrando o louvor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Ministrando o louvor, ministrando o louvor
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA DE SERVIR A CRISTO</MainTitle>
          <SubTitle>AO SERVIR AO SENHOR, TEMOS O PRAZER EM MEDITAR NA SANTA PALAVRA DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 1.19-26 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA DE SERVIR A CRISTO</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>LINDA MELODIA, nº 104</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-104")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Mais do que milhares é Cristo, meu bom Mestre,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Ele é a luz do mundo, a estrela da manhã!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            É o Rei da glória, e, em meu coração,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Contente vou cantando a divinal canção!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantarei em meu coração, esta linda melodia,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois eu tenho em meu coração
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Gozo, paz e alegria.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantarei em meu coração,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantarei, sim, noite e dia.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Aleluia! Aleluia! Feliz sempre cantarei.
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cristo libertou-me dos males do pecado,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E agora alegre canto, pois para o céu irei.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cristo resgatou-me, ele é o meu Salvador;
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Dou toda glória a ele, meu Mestre e bom Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantarei em meu coração, esta linda melodia,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois eu tenho em meu coração
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Gozo, paz e alegria.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantarei em meu coração,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantarei, sim, noite e dia.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Aleluia! Aleluia! Feliz sempre cantarei.
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>POSLÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVISOS</MainTitle>
        </section>
      </SlideWithBackground>

    </RevealJsBaseElement>
  )
}
