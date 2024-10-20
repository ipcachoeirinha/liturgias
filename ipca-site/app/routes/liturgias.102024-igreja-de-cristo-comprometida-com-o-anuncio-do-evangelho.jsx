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

const PAGE_TITLE = "Igreja de Cristo comprometida com o anúncio do Evangelho - 20 de Outubro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-32", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-282", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-307", extension: "mp4", resourceType: "video" },
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
        <MainTitle>IGREJA DE CRISTO COMPROMETIDA COM O ANÚNCIO DO EVANGELHO</MainTitle>
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
          <MainTitle>IGREJA DE CRISTO COMPROMETIDA COM O ANÚNCIO DO EVANGELHO</MainTitle>
          <SubTitle>PROCLAMA A FIDELIDADE DE DEUS E CRESCE EM JUSTIÇA PARA A GLÓRIA DO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 92</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: O DEUS FIEL, nº 32</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-32")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>IGREJA DE CRISTO COMPROMETIDA COM O ANÚNCIO DO EVANGELHO</MainTitle>
          <SubTitle>PROCLAMA QUE A LIBERTAÇÃO ESTÁ SOMENTE NO MESSIAS JESUS CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ISAIAS 61.1</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A GRANDE COMISSÃO, nº 282</LiturgyStep>
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
          <MainTitle>IGREJA DE CRISTO COMPROMETIDA COM O ANÚNCIO DO EVANGELHO</MainTitle>
          <SubTitle>PROCLAMA QUE A LIBERTAÇÃO ESTÁ SOMENTE NO MESSIAS JESUS CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ISAIAS 61.1</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A GRANDE COMISSÃO, nº 282</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-282")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>IGREJA DE CRISTO COMPROMETIDA COM O ANÚNCIO DO EVANGELHO</MainTitle>
          <SubTitle>DESENVOLVE O CHAMADO DE INFLUENCIAR QUEM ESTÁ AO SEU REDOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: MATEUS 5.13-16</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: EFÉSIOS 6.19</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO DE SÚPLICA POR INTREPIDEZ PARA ANUNCIAR O EVANGELHO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICOS CONGREGACIONAIS</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>IGREJA DE CRISTO COMPROMETIDA COM O ANÚNCIO DO EVANGELHO</MainTitle>
          <SubTitle>POIS RECONHECE A URGÊNCIA DA COLHEITA ESPIRITUAL</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: MATEUS 9.36-38 (Presb. Daniel Galdino)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>IGREJA DE CRISTO COMPROMETIDA COM O ANÚNCIO DO EVANGELHO</MainTitle>
          <SubTitle>CORAJOSAMENTE TRAVA A SANTA PELEJA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A SANTA IGREJA, nº 307</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-307")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>POSLÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>VERSÍCULO DO MÊS DE OUTUBRO</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>“Assim diz o Senhor: Põe em ordem a tua casa, porque morrerás e não viverás.“ Isaías 38.1b</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>CATECISMO MAIOR DE WESTMINSTER</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pergunta 128. Quais são os pecados dos inferiores contra os seus superiores?</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Resposta: Os pecados dos inferiores contra os seus superiores são: toda negligência dos deveres exigidos para com eles; a inveja, o desprezo e a rebelião contra suas pessoas e posições, em seus conselhos, mandamentos e correções legítimos; a maldição, a zombaria e todo comportamento rebelde e escandaloso, que vem a ser uma vergonha e desonra para eles e para o seu governo. </p>
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
