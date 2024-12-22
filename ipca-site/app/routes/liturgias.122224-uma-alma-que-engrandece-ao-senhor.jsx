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

const PAGE_TITLE = "Uma alma que engrandece ao Senhor - 22 de Dezembro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-240", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-231", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/oracao-silenciosa-hino-208", extension: "mp3", resourceType: "video" }
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
        <MainTitle>UMA ALMA QUE ENGRANDECE AO SENHOR</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
          <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA ALMA QUE ENGRANDECE AO SENHOR</MainTitle>
          <SubTitle>LOUVA O NOME QUE ESTÁ ACIMA DE TODO NOME</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: FILIPENSES 2.5-11</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PRIMEIRO NATAL, nº 231</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-231")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA ALMA QUE ENGRANDECE AO SENHOR</MainTitle>
          <SubTitle>CAMINHA EM HUMILDADE DIANTE DO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 PEDRO 5.5-7</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO PODER PRA SALVAR</LiturgyStep>
          </LiturgySteps>
        </section>
        <section>

          <MainTitle>ORAÇÃO SILENCIOSA</MainTitle>

          <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/oracao-silenciosa-hino-208")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>
        <section>
          <MainTitle>UMA ALMA QUE ENGRANDECE AO SENHOR</MainTitle>
          <SubTitle>CAMINHA EM HUMILDADE DIANTE DO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 PEDRO 5.5-7</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO PODER PRA SALVAR</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Todos necessitam de um amor perfeito
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Perdão e compaixão
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Todos necessitam de graça e esperança
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            De um Deus que salva
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cristo move as montanhas
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E tem poder pra salvar, tem poder pra salvar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pra sempre, Autor da Salvação
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus a morte venceu, sobre a morte venceu
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Me aceitas com meus medos, falhas e temores
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Enche meu viver
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            A minha vida entrego, pra seguir Teus passos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            A Ti me rendo
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cristo move as montanhas
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E tem poder pra salvar, tem poder pra salvar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pra sempre, Autor da Salvação
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus a morte venceu, sobre a morte venceu
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Possa o mundo ver brilhar a Luz
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantamos, para a glória do Senhor Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Possa o mundo ver brilhar a Luz
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantamos, para a glória do Senhor Jesus
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cristo move as montanhas
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E tem poder pra salvar, tem poder pra salvar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pra sempre, Autor da Salvação
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus a morte venceu, sobre a morte venceu
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA ALMA QUE ENGRANDECE AO SENHOR</MainTitle>
          <SubTitle>ENCONTRA REFÚGIO EM SUA GRAÇA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 34.4-8</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: LOUVOR ANGELICAL, nº 240</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-240")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA ALMA QUE ENGRANDECE AO SENHOR</MainTitle>
          <SubTitle>É EDIFICADA PELAS PALAVRAS DE VIDA ETERNA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Rev. Alceu Petró</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA ALMA QUE ENGRANDECE AO SENHOR</MainTitle>
          <SubTitle>TESTEMUNHA O AMOR DE CRISTO AO MUNDO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO BENDITO SEJA SEMPRE O CORDEIRO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            De todas as tribos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Povos e raças
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Muitos virão te louvar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            De todas culturas
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Línguas e nações
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            No tempo e no espaço virão te adorar
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Bendito seja sempre o Cordeiro
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Filho de Deus, raiz de Davi
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Bendito seja o seu santo nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cristo Jesus presente aqui
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Remidos comprados
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Grande multidão
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Muitos virão te louvar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O povo escolhido
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu reino e nação
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            No tempo e no espaço virão te adorar
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Bendito seja sempre o Cordeiro
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Filho de Deus, raiz de Davi
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Bendito seja o seu santo nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cristo Jesus presente aqui
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E a nós só nos tudo dedicar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Oferta suave ao Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Dons e talentos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Queremos consagrar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E a vida no teu altar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pra teu louvor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Bendito seja sempre o Cordeiro
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Filho de Deus, raiz de Davi
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Bendito seja o seu santo nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cristo Jesus presente aqui
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} />
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
