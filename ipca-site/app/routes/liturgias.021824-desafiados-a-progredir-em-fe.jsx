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

const PAGE_TITLE = "Desafiados a progredir em fé - 18 de Fevereiro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-16", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-351", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-58", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-105", extension: "mp4", resourceType: "video" },
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
        <MainTitle>DESAFIADOS A PROGREDIR EM FÉ</MainTitle>
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
          <MainTitle>DESAFIADOS A PROGREDIR EM FÉ</MainTitle>
          <SubTitle>ADORAMOS AO SENHOR POR TÃO GRANDE SALVAÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 113</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: LOUVOR A DEUS, nº 16</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-16")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>DESAFIADOS A PROGREDIR EM FÉ</MainTitle>
          <SubTitle>BUSCA UMA VIDA FUNDAMENTADA NA PALAVRA DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 19.7-14</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: JOÃO 17.17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: BELAS PALAVRAS DE VIDA, nº 351</LiturgyStep>
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
          <MainTitle>DESAFIADOS A PROGREDIR EM FÉ</MainTitle>
          <SubTitle>BUSCA UMA VIDA FUNDAMENTADA NA PALAVRA DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 19.7-14</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: JOÃO 17.17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: BELAS PALAVRAS DE VIDA, nº 351</LiturgyStep>
          </LiturgySteps>
        </section>

        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-351")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>DESAFIADOS A PROGREDIR EM FÉ</MainTitle>
          <SubTitle>DEPENDEMOS EXCLUSIVAMENTE DOS CUIDADOS DO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: MATEUS 6.25-34</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: OFERTAS, nº 58</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-58")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>DESAFIADOS A PROGREDIR EM FÉ</MainTitle>
        <SubTitle>OUVIMOS ATENTAMENTE AS INSTRUÇÕES DE DEUS</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: JOÃO 2.23-25 (Rev. Arnaldo Matias)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>DESAFIADOS A PROGREDIR EM FÉ</MainTitle>
          <SubTitle>CAMINHAMOS OLHANDO PARA CRISTO, <br/>AUTOR E CONSUMADOR DA NOSSA FÉ</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A CERTEZA DO CRENTE, nº 105</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-105")} />
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
