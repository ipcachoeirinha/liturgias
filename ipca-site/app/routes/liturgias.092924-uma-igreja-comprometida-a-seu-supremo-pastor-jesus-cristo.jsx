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

const PAGE_TITLE = "Uma igreja comprometida a seu Supremo Pastor, Jesus Cristo - 29 de Setembro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-301", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-75", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-221", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-299", extension: "mp4", resourceType: "video" },
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
        <MainTitle>UMA IGREJA COMPROMETIDA<br/>A SEU SUPREMO PASTOR, JESUS CRISTO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>PRELÚDIO</MainTitle>
        <audio data-autoplay><source
          type="audio/mpeg"

          src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


        />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA COMPROMETIDA<br/>A SEU SUPREMO PASTOR, JESUS CRISTO</MainTitle>
          <SubTitle>CRÊ E PROFESSA QUE JESUS É O FILHO DO DEUS VIVO,<br/>NOSSO ÚNICO SALVADOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MATEUS 16.13-16</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ROMANOS 10.8-10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: O ÚNICO SALVADOR, nº 301</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-301")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA COMPROMETIDA<br/>A SEU SUPREMO PASTOR, JESUS CRISTO</MainTitle>
          <SubTitle>CONFESSA SEUS PECADOS E SUPLICA GRAÇA E PERDÃO DIVINO DIARIAMENTE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 JOÃO 1.5-10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: ARREPENDIMENTO E SÚPLICA, nº 75</LiturgyStep>
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
          <MainTitle>UMA IGREJA COMPROMETIDA<br/>A SEU SUPREMO PASTOR, JESUS CRISTO</MainTitle>
          <SubTitle>CONFESSA SEUS PECADOS E SUPLICA GRAÇA E PERDÃO DIVINO DIARIAMENTE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 JOÃO 1.5-10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: ARREPENDIMENTO E SÚPLICA, nº 75</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-75")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA COMPROMETIDA<br/>A SEU SUPREMO PASTOR, JESUS CRISTO</MainTitle>
          <SubTitle>AGRADECE A DEUS PELO PLANO DE REDENÇÃO E VIDA ETERNA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MATEUS 3.16-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CREDO APOSTÓLICO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: RENOVAÇÃO, nº 299</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          </LiturgySteps>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Credo Apostólico</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Creio em Deus Pai, Todo-poderoso, Criador do Céu e da terra.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Creio em Jesus Cristo, seu único Filho, nosso Senhor, o qual foi concebido por obra do Espírito Santo;</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Nasceu da virgem Maria;</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado;</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ressurgiu dos mortos ao terceiro dia;</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Subiu ao Céu;</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Está sentado à direita de Deus Pai Todo-poderoso, donde há de vir para julgar os vivos e os mortos.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Creio no Espírito Santo;</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Na Santa Igreja Universal;</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Na comunhão dos santos;</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Na remissão dos pecados;</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Na ressurreição do corpo;</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Na vida eterna.</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Amém. </p>
        </section>
        <section>
          <MainTitle>UMA IGREJA COMPROMETIDA<br/>A SEU SUPREMO PASTOR, JESUS CRISTO</MainTitle>
          <SubTitle>AGRADECE A DEUS PELO PLANO DE REDENÇÃO E VIDA ETERNA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MATEUS 3.16-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CREDO APOSTÓLICO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: RENOVAÇÃO, nº 299</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-299")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA COMPROMETIDA<br/>A SEU SUPREMO PASTOR, JESUS CRISTO</MainTitle>
          <SubTitle>OUVE A SUA VOZ E O SEGUE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: LUCAS 9.28-36 (Asp. Rodrigo Boelhouwer)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA COMPROMETIDA<br/>A SEU SUPREMO PASTOR, JESUS CRISTO</MainTitle>
          <SubTitle>É CONVOCADA A ANUNCIAR O EVANGELHO DE JESUS CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: UM VASO DE BENÇÃO, nº 221</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-221")} />
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
