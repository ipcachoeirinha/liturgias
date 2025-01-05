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

const PAGE_TITLE = "A Alegria Na Expansão Do Evangelho - 5 de Janeiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-10", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-74", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-108", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-269", extension: "mp4", resourceType: "video" }
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
  const SupperSlide = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/santa-ceia-bg"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle>A ALEGRIA DO EVANGELHO NOS LEVA A UMA ADORAÇÃO VERDADEIRA AO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 100</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A CRIAÇÃO E SEU CRIADOR, nº 10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-10")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle>CRER NO EVANGELHO NOS LEVA A CONFISSÃO DE NOSSOS PECADOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 32</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SINCERIDADE, nº 74</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 01 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-74")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Pergunta 01: Qual é o fim principal do homem?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>O fim principal do homem é glorificar a Deus, e alegrar-se nele para sempre.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle>DEVOLVEMOS NOSSOS DÍZIMOS E OFERTAS, PARA CONTRIBUIÇÃO NA EXPANSÃO DO EVANGELHO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 126</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO SANTO PARA SEMPRE</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            As muitas gerações rendidas em louvor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantando ao cordeiro uma canção
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Os que em Ti se foram e os que hão de crer
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantando ao cordeiro uma canção
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu nome é o mais alto
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu nome é o maior
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu nome é sobre todos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Os tronos e domínios
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Governos e poderes
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu nome é sobre todos
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E os anjos clamam: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Toda criação: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Exaltado És, Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo pra sempre
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Quem foi perdoado e redimido foi
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cante ao cordeiro uma canção
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Aquele que é livre e leva o Seu nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cante ao cordeiro uma canção
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantaremos para sempre, amém
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E os anjos clamam: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Toda criação: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Exaltado És, Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo pra sempre
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O Teu povo canta: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sim, ao Rei dos Reis, Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu sempre serás Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo pra sempre
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle>COM ALEGRIA RECEBEMOS O EVANGELHO PELA PREGAÇÃO DA PALAVRA DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 1.1-11 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-108")} />
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-269")} />
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
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
