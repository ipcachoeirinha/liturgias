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

const PAGE_TITLE = "Aprendendo a Esperar em Deus - 15 de Outubro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-167", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-68", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-62", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-386", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" },
]

export const meta = () => {
  return [
    { title: PAGE_TITLE }
  ]
}

export async function loader(remixLoaderContext) {
  return presentationSlideRemixLoader(remixLoaderContext, CDN_ASSETS_LIST)
}

export default function CompromissadosComALiberdadeEmCristo() {
  const [mode, assets] = useLoaderData()

  useEffect(() => {
    window.Reveal = require('reveal.js').default

    if (window.Reveal) {
      const r = window.Reveal()
      r.initialize({...defaultConfig, width: 1600 })
    }
  })

  const getAssetUrl = getAssetUrlBuilder(mode, assets)
  const SlideWithBackground = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/cruz-wallpaper-light"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>APRENDENDO A ESPERAR EM DEUS</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>PRELÚDIO</MainTitle>
        <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>APRENDENDO A ESPERAR EM DEUS</MainTitle>
        <SubTitle>A IGREJA TEM PLENA CONFIANÇA NA INTERVENÇÃO DIVINA</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 27</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CRISTO, NOSSA ESPERANÇA, nº 167</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-167")} />

      <SlideWithBackground>
        <MainTitle>APRENDENDO A ESPERAR EM DEUS</MainTitle>
        <SubTitle>A IGREJA RECONHECE SUA INCAPACIDADE DE SALVAR A SI MESMA</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: EFÉSIOS 2:11-22</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: NECESSIDADE, nº 68</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>APRENDENDO A ESPERAR EM DEUS</MainTitle>
        <SubTitle>A IGREJA RECONHECE SUA INCAPACIDADE DE SALVAR A SI MESMA</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: EFÉSIOS 2:11-22</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: NECESSIDADE, nº 68</LiturgyStep>
        </LiturgySteps>
        <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-68")} />

      <SlideWithBackground>
        <MainTitle>APRENDENDO A ESPERAR EM DEUS</MainTitle>
        <SubTitle>A IGREJA EXPRESSA GRATIDÃO AO SENHOR</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: FILIPENSES 4:4-7</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: HINO DE GRATIDÃO, nº 62</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-62")} />

      <SlideWithBackground>
        <MainTitle>APRENDENDO A ESPERAR EM DEUS</MainTitle>
        <SubTitle>A IGREJA EXPERIMENTA DA AÇÃO TRANSFORMADORA<br /> DO AGIR DO ALTÍSSIMO</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: SALMO 40:1-3 (Ev. Ademir Gonçalves)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>APRENDENDO A ESPERAR EM DEUS</MainTitle>
        <SubTitle>A IGREJA DÁ TESTEMUNHO AO MUNDO<br /> DA FIDELIDADE DO SENHOR</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TESTEMUNHO, nº 386</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-386")} />

      <SlideWithBackground>
        <MainTitle>POSLUDIO</MainTitle>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} />

      <SlideWithBackground>
        <MainTitle>POSLUDIO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
      </SlideWithBackground>

    </RevealJsBaseElement>
  )
}
