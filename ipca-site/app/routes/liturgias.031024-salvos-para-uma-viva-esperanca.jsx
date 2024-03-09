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

const PAGE_TITLE = "Salvos para uma viva esperança - 10 de Março de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-93", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-33", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-351", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-176", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/oracao-silenciosa-hino-208", extension: "mp3", resourceType: "video" },
]

export const meta = () => {
  return [
    { title: PAGE_TITLE }
  ]
}

export async function loader(remixLoaderContext) {
  return presentationSlideRemixLoader(remixLoaderContext, CDN_ASSETS_LIST)
}

export default function UmPovoQueAdoraAoSenhor() {
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
        <MainTitle>SALVOS PARA UMA VIVA ESPERANÇA</MainTitle>
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
          <MainTitle>SALVOS PARA UMA VIVA ESPERANÇA</MainTitle>
          <SubTitle>BENDIZEMOS AO DEUS E PAI DE NOSSO SENHOR JESUS CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 103</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: FIRMEZA NA FÉ, nº 93</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-93")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>SALVOS PARA UMA VIVA ESPERANÇA</MainTitle>
          <SubTitle>CREMOS QUE SOMOS GUARDADOS<br/>PELO PODER DE DEUS ATÉ O FIM</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: JOÃO 10.27-30</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: MARAVILHAS DIVINAS, nº 33</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ÊXODO 19.5-6</LiturgyStep>
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
          <MainTitle>SALVOS PARA UMA VIVA ESPERANÇA</MainTitle>
          <SubTitle>CREMOS QUE SOMOS GUARDADOS<br/>PELO PODER DE DEUS ATÉ O FIM</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: JOÃO 10.27-30</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: MARAVILHAS DIVINAS, nº 33</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ÊXODO 19.5-6</LiturgyStep>
          </LiturgySteps>
        </section>

        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-33")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>SALVOS PARA UMA VIVA ESPERANÇA</MainTitle>
          <SubTitle>NOS ALEGRAMOS COM A REVELAÇÃO DE JESUS CRISTO MEDIANTE A PREGAÇÃO DO EVANGELHO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: BELAS PALAVRAS DE VIDA, nº 351</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-351")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>SALVOS PARA UMA VIVA ESPERANÇA</MainTitle>
        <SubTitle>NOS ALEGRAMOS COM A REVELAÇÃO DE JESUS CRISTO MEDIANTE A PREGAÇÃO DO EVANGELHO</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO DE INTERCESSÃO</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: 1 PEDRO 1.3-9 (Rev. Everton Piovesan)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>SALVOS PARA UMA VIVA ESPERANÇA</MainTitle>
          <SubTitle>CAMINHAMOS OLHANDO PARA CRISTO, AUTOR E CONSUMADOR DA NOSSA FÉ</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: FIDELIDADE DO CRISTÃO, nº 176</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-176")} />
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
