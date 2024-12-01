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

const PAGE_TITLE = "A Divindade de Jesus Cristo - 1 de Dezembro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/querido-visitante", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-239", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-110-a", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/psola-isaias-53-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/psola-colossenses-1-letra", extension: "mp4", resourceType: "video" },
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
  const WelcomeBackground = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/querido-visitante"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>A DIVINDADE DE JESUS CRISTO</MainTitle>
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
          <MainTitle>A DIVINDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>É REVELADA EM SUA ENCARNAÇÃO, QUANDO O REI ETERNO SE FEZ HOMEM PARA HABITAR ENTRE NÓS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: MIQUÉIAS 5.2</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: MATEUS 5.18-25</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: NASCE JESUS, nº 239</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-239")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A DIVINDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>NOS LEMBRA QUE SOMENTE ELE PODE PERDOAR PECADOS, RECONCILIAR-NOS COM O PAI E NOS DAR VIDA ETERNA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ISAÍAS 53.4-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO ISAIAS 53 - PROJETO SOLA</LiturgyStep>
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
          <MainTitle>A DIVINDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>NOS LEMBRA QUE SOMENTE ELE PODE PERDOAR PECADOS, RECONCILIAR-NOS COM O PAI E NOS DAR VIDA ETERNA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ISAÍAS 53.4-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO ISAÍAS 53 - PROJETO SOLA</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/psola-isaias-53-letra")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A DIVINDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>NOS ENCHE DE CONFIANÇA E GRATIDÃO<br/>POR SUA OBRA PERFEITA E ETERNA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: COLOSSENSES 1.15-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: HEBREUS 1.3</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO PASTORAL</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO COLOSSENSES 1 - PROJETO SOLA</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/psola-colossenses-1-letra")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A DIVINDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>REFLETE PLENAMENTE A GLÓRIA DE DEUS, REVELANDO QUE ELE NÃO É APENAS UM ENVIADO, MAS O PRÓPRIO DEUS ENCARNADO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: João 5.19-23 (Rev. Arnaldo Matias)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A DIVINDADE DE JESUS CRISTO</MainTitle>
          <SubTitle>NOS CHAMA A UMA VIDA DE TOTAL OBEDIÊNCIA E DEVOÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CRER E OBSERVAR, nº 110A</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-110-a")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} />
        <section>
          <MainTitle>POSLÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <WelcomeBackground></WelcomeBackground>

      <SlideWithBackground>
        <MainTitle>VERSÍCULO DO MÊS DE DEZEMBRO</MainTitle>
        <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>"Glória a Deus nas maiores alturas, e paz na terra entre os homens, a quem Ele quer bem." Lucas 2.14</p>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>CFW: PERGUNTA 132</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Quais são os pecados dos iguais?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Os pecados dos iguais, além da negligência dos deveres exigidos, são a depreciação do merecimento, a inveja dos dons, a tristeza causada pela promoção ou prosperidade dos outros, e a usurpação da preeminência que uns têm sobre outros.</p>
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
