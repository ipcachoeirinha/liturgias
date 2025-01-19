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

const PAGE_TITLE = "Alegria em meio ao sofrimento - 19 de Janeiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-6", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-11", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-71", extension: "mp4", resourceType: "video" }
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
        <MainTitle>ALEGRIA EM MEIO AO SOFRIMENTO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>ALEGRIA EM MEIO AO SOFRIMENTO</MainTitle>
          <SubTitle>REGOZIJANDO-SE NO SENHOR, TEMOS MOTIVOS PARA NOS ALEGRAR EM TEMPOS DE DOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 113</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TRINDADE SANTÍSSIMA, nº 11</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-11")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Deus Onipotente!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Louvam nossas vozes teu nome com fervor!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Justo e compassivo!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            És Deus Triúno, Excelso Criador!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Nós, os pecadores,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Não podemos ver tua glória sem temor.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu somente és Santo! Só tu és perfeito,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Deus Soberano, imenso em teu amor.
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Todos os remidos,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Juntos com os anjos, proclamam teu louvor!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Antes de formar-se o firmamento e a terra
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eras, e sempre és, e hás de ser Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Deus Onipotente!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tuas obras louvam teu nome com fervor.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Justo e compassivo!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Deus Soberano, Excelso Criador! Amém.
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>ALEGRIA EM MEIO AO SOFRIMENTO</MainTitle>
          <SubTitle>REGOZIJANDO-SE NO SENHOR, CONFESSAMOS OS NOSSOS PECADOS CERTOS QUE JÁ RECEBEMOS PERDÃO POR MEIO DE CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 JOÃO 1.5-10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERDÃO SENHOR, nº 71</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 03 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
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
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Pergunta 03: Qual é a coisa principal que as Escrituras nos ensinam?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>A coisa principal que as Escrituras nos ensinam é o que o homem deve crer acerca de Deus e o dever que Deus requer do homem.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>ALEGRIA EM MEIO AO SOFRIMENTO</MainTitle>
          <SubTitle>ALEGRANDO-SE NO SENHOR, DEVOLVEMOS NOSSOS DIZIMOS E OFERTAS, CERTOS DE QUE TEMOS RECEBIDO SEU CUIDADO E PROVIDÊNCIA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MALAQUIAS 3.6-10</LiturgyStep>
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
          <MainTitle>ALEGRIA EM MEIO AO SOFRIMENTO</MainTitle>
          <SubTitle>REGOZIJANDO-SE NO SENHOR TEMOS O DELEITE NA SANTA PALAVRA DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 1.12-18 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>ALEGRIA EM MEIO AO SOFRIMENTO</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO HÁ UM LUGAR</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar de descanso em Ti
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar de refrigério em Ti
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar onde a verdade reina
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar onde as pessoas não me influenciam
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar onde eu ouço Teu Espírito
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar de vitória em meio à guerra
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar onde a inconstância não me domina
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar onde minha fé é fortalecida
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar onde a paz é quem governa
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar onde os sonhos não se abortam
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar onde os seus medos não te dominam
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Há um lugar que quando se perde é que se ganha
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eu descobri que
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Esse lugar é no Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu és tudo o que eu preciso, Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu és tudo o que eu preciso, Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu és tudo o que eu preciso, Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu és tudo o que eu preciso, Jesus
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu és tudo o que eu preciso, Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu és tudo o que eu preciso, Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu és tudo o que eu preciso, Jesus
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
