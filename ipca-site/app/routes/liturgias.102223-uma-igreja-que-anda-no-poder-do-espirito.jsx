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

const PAGE_TITLE = "Uma Igreja que Anda no Poder do Espírito - 22 de Outubro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-39", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-93", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-135", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-3", extension: "mp4", resourceType: "video" },
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

export default function UmaIgrejaQueAndaNoPoderDoEspirito() {
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
        <MainTitle>UMA IGREJA QUE ANDA NO PODER DO ESPÍRITO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>PRELÚDIO</MainTitle>
        <audio data-autoPlay><source
          type="audio/mpeg"

          src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


        />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE ANDA NO PODER DO ESPÍRITO</MainTitle>
        <SubTitle>DESFRUTA DE SUA LIBERDADE EM CRISTO COM RESPONSABILIDADE</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: COLOSSENSES 3:1-4</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: EXALTAÇÃO E LOUVOR, nº 39</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-39")} />

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE ANDA NO PODER DO ESPÍRITO</MainTitle>
        <SubTitle>REJEITA UMA VIDA LEGALISTA</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: COLOSSENSES 2:20-23</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: MAIS DE CRISTO, nº 135</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE ANDA NO PODER DO ESPÍRITO</MainTitle>
        <SubTitle>REJEITA UMA VIDA LEGALISTA</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: COLOSSENSES 2:20-23</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: MAIS DE CRISTO, nº 135</LiturgyStep>
        </LiturgySteps>
        <audio data-autoPlay><source
          type="audio/mpeg"

          src={getAssetUrl("ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang")}


        />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-135")} />

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE ANDA NO PODER DO ESPÍRITO</MainTitle>
        <SubTitle>É HERDEIRA DAS PROMESSAS DA ALIANÇA</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ROMANOS 8:12-17</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: FIRMEZA NA FÉ, nº 93</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SupperSlide>
        <MainTitle>SANTA CEIA</MainTitle>
      </SupperSlide>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE ANDA NO PODER DO ESPÍRITO</MainTitle>
        <SubTitle>É HERDEIRA DAS PROMESSAS DA ALIANÇA</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ROMANOS 8:12-17</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: FIRMEZA NA FÉ, nº 93</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-93")} />

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE ANDA NO PODER DO ESPÍRITO</MainTitle>
        <SubTitle>TEM UMA VIDA VISIVELMENTE FRUTÍFERA</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: GÁLATAS 5:13-24 (Rev. Arnaldo Matias)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE ANDA NO PODER DO ESPÍRITO</MainTitle>
        <SubTitle>É SANTIFICADA PELO DEUS TRINO</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A IGREJA EM ADORAÇÃO, nº 3</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />

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
