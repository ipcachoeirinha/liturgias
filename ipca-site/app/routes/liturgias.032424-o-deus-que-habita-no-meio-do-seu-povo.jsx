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

const PAGE_TITLE = "O Deus que habita no meio do seu povo - 24 de Março de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-96", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-67", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-78", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-351", extension: "mp4", resourceType: "video" },
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
        <MainTitle>O DEUS QUE HABITA NO MEIO DO SEU POVO</MainTitle>
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
          <MainTitle>O DEUS QUE HABITA NO MEIO DO SEU POVO</MainTitle>
          <SubTitle>ELEGE E RESGATA POR GRAÇA, E EM RESPOSTA, SEU POVO OBEDECE POR AQUILO QUE ELE JÁ FEZ</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: DEUTERONÔMIO 7.6-11</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: REDENÇÃO SUPREMA, nº 96</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-96")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O DEUS QUE HABITA NO MEIO DO SEU POVO</MainTitle>
          <SubTitle>ALEGRA-SE EM VER CORAÇÕES QUEBRANTADOS E CONTRITOS QUANDO PECAMOS, ESTES, ELE NÃO DESPREZA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 51</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
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
          <MainTitle>O DEUS QUE HABITA NO MEIO DO SEU POVO</MainTitle>
          <SubTitle>ALEGRA-SE EM VER CORAÇÕES QUEBRANTADOS E CONTRITOS QUANDO PECAMOS, ESTES, ELE NÃO DESPREZA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 51</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>

        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-67")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O DEUS QUE HABITA NO MEIO DO SEU POVO</MainTitle>
          <SubTitle>REQUER CONTENTAMENTO NA VIDA, NÃO POR CAUSA DOS BENS QUE POSSUÍMOS, MAS CONTENTAMENTO EM RAZÃO DE UMA VIDA SUBMISSA A ELE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: FILIPENSES 4.10-20</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICOS CONGREGACIONAIS</LiturgyStep>
          </LiturgySteps>
        </section>
        {/* <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-351")} /> */}
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O DEUS QUE HABITA NO MEIO DO SEU POVO</MainTitle>
          <SubTitle>CHAMA O SEU POVO PARA QUE RECEBAM A SUA ORIENTAÇÃO ATENTAMENTE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: LEVÍTICO 1.1-6 (Sem. Rodrigo Boelhouwer)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O DEUS QUE HABITA NO MEIO DO SEU POVO</MainTitle>
          <SubTitle>ENVIOU SEU FILHO JESUS CRISTO PARA SER O MEDIADOR DE UMA NOVA ALIANÇA, E ASSIM, OBTERMOS UMA PERFEITA EXPIAÇÃO, DE UMA VEZ POR TODAS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERFEITA EXPIAÇÃO, nº 78</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-78")} />
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
