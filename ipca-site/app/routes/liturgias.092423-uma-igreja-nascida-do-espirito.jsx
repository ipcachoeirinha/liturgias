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

const PAGE_TITLE = "Uma Igreja Nascida do Espirito - 24 de Setembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-4", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-133", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-189", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-93", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/oracao", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/bencao-antiga", extension: "mp3", resourceType: "video" }
]

export const meta = () => {
  return [
    { title: PAGE_TITLE }
  ]
}

export async function loader(remixLoaderContext) {
  return presentationSlideRemixLoader(remixLoaderContext, CDN_ASSETS_LIST)
}

export default function Index() {
  const [mode, assets] = useLoaderData()

  useEffect(() => {
    window.Reveal = require('reveal.js').default

    if (window.Reveal) {
      const r = window.Reveal()
      r.initialize(defaultConfig)
    }
  })

  const getAssetUrl = getAssetUrlBuilder(mode, assets)
  const SlideWithBackground = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/cruz-wallpaper-light"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>UMA IGREJA NASCIDA DO ESPÍRITO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>PRELÚDIO</MainTitle>
        <audio data-autoPlay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/oracao")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA NASCIDA DO ESPÍRITO</MainTitle>
        <SubTitle>ALEGRA-SE NA PRESENÇA DE DEUS</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 122</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CULTO À TRINDADE, nº 4</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-4")} />

      <SlideWithBackground>
        <MainTitle>UMA IGREJA NASCIDA DO ESPÍRITO</MainTitle>
        <SubTitle>DEMONSTRA OBEDIÊNCIA EM AMOR</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 2:1-6</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: ASPIRAÇÃO À SANTIDADE, nº 133</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA NASCIDA DO ESPÍRITO</MainTitle>
        <SubTitle>DEMONSTRA OBEDIÊNCIA EM AMOR</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 2:1-6</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: ASPIRAÇÃO À SANTIDADE, nº 133</LiturgyStep>
        </LiturgySteps>
        <audio data-autoPlay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-133")} />

      <SlideWithBackground>
        <MainTitle>UMA IGREJA NASCIDA DO ESPÍRITO</MainTitle>
        <SubTitle>HABITARÁ NA PÁTRIA CELESTE</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: HEBREUS 11:8-16</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: JERUSALÉM CELESTE, nº 189</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-189")} />

      <SlideWithBackground>
        <MainTitle>UMA IGREJA NASCIDA DO ESPÍRITO</MainTitle>
        <SubTitle>EXPERIMENTA LIBERTAÇÃO ESPIRITUAL</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: GÁLATAS 4:21-31 (Rev. Arnaldo Matias)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA NASCIDA DO ESPÍRITO</MainTitle>
        <SubTitle>PERMANECE FIRME NAS PROMESSAS</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: FIRMEZA NA FÉ, nº 93</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-93")} />

      <SlideWithBackground>
        <MainTitle>POSLUDIO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>POSLUDIO</MainTitle>
        <audio data-autoPlay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/bencao-antiga")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

    </RevealJsBaseElement>
  )
}
