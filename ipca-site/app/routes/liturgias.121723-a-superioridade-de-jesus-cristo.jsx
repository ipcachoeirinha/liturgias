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

const PAGE_TITLE = "A Superioridade de Jesus Cristo - 17 de Dezembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-230", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-68", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-269", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-292", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/rude-cruz-instrumental", extension: "mp3", resourceType: "video" },
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

export default function ASuperioridadeDeJesusCristo() {
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
        <MainTitle>A SUPERIORIDADE DE JESUS CRISTO</MainTitle>
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
          <MainTitle>A SUPERIORIDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>NOS INSPIRA A ADORÁ-LO COM REVERÊNCIA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 110</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: ADORAÇÃO, nº 230</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-230")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A SUPERIORIDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>OFERECE A SALVAÇÃO E A RECONCILIAÇÃO COM DEUS A TODOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: MATEUS 4:12-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: NECESSIDADE, nº 68</LiturgyStep>
          </LiturgySteps>
        </section>
        <section>

          <MainTitle>ORAÇÃO SILENCIOSA</MainTitle>

          <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>

        <section>
          <MainTitle>A SUPERIORIDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>OFERECE A SALVAÇÃO E A RECONCILIAÇÃO COM DEUS A TODOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MATEUS 4:12-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: NECESSIDADE, nº 68</LiturgyStep>
          </LiturgySteps>
        </section>

        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-68")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A SUPERIORIDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>SE REVELA EM SUA GRAÇA E MISERICÓRDIA INFINDÁVEIS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PUREZA NO SANGUE DE CRISTO, nº 269</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
          <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/rude-cruz-instrumental")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-269")} />
      </SupperSlide>

      <SlideWithBackground>
        <MainTitle>A SUPERIORIDADE DE JESUS CRISTO</MainTitle>
        <SubTitle>NOS MOTIVA A OUVIR A PALAVRA DE DEUS</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: JOÃO 1:14-18 (Rev. Arnaldo Matias)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A SUPERIORIDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>É A BASE DE NOSSA ESPERANÇA PARA O FUTURO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A VINDA DO SENHOR, nº 292</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-292")} />
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
