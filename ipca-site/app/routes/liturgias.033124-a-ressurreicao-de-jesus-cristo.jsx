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
import { createLyricsSlideSection } from '../components/ipca-default-theme/LyricsSlide'

const PAGE_TITLE = "A Ressurreição de Jesus Cristo - 31 de Março de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/a-ressurreicao-de-jesus-cristo", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-42", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-334", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-272", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-318", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
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
  const MessageThemeBackground = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/a-ressurreicao-de-jesus-cristo"))
  const SupperSlide = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/santa-ceia-bg"))
  const LyricsSlide = createLyricsSlideSection({ backgroundUrl: null })

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>A RESSURREIÇÃO DE JESUS CRISTO</MainTitle>
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
          <MainTitle>A RESSURREIÇÃO DE JESUS CRISTO</MainTitle>
          <SubTitle>FOI PRÉ-ANUNCIADA PELOS ANJOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: LUCAS 24.1-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: O GRANDE AMOR DE DEUS, nº 42</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-42")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A RESSURREIÇÃO DE JESUS CRISTO</MainTitle>
          <SubTitle>É UMA REALIDADE QUE DEVE SER CRIDA E PROCLAMADA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MARCOS 16.9-15</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CONVERSÃO, nº 334</LiturgyStep>
          </LiturgySteps>
        </section>

        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-334")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A RESSURREIÇÃO DE JESUS CRISTO</MainTitle>
          <SubTitle>É O FUNDAMENTO DE NOSSA FÉ, ESPERANÇA E ALEGRIA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 CORÍNTIOS 15.13-22</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: ALELUIA AO CRISTO REDIVIVO, nº 272</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-272")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A RESSURREIÇÃO DE JESUS CRISTO</MainTitle>
          <SubTitle>É O MOTIVO DE PARTICIPARMOS DA MESA DO CORDEIRO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <LyricsSlide>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Por tudo o que tens feito</p>
          <p className="text-[76px] font-bold leading-normal">Por tudo o que vais fazer</p>
          <p className="text-[76px] font-bold leading-normal">Por tuas promessas e tudo o que és</p>
          <p className="text-[76px] font-bold leading-normal">Eu quero te agradecer</p>
          <p className="text-[76px] font-bold leading-normal">Com todo o meu ser</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Te agradeço meu Senhor</p>
          <p className="text-[76px] font-bold leading-normal">Te agradeço meu Senhor</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Te agradeço por me libertar e salvar</p>
          <p className="text-[76px] font-bold leading-normal">Por ter morrido em meu lugar</p>
          <p className="text-[76px] font-bold leading-normal">Te agradeço</p>
          <p className="text-[76px] font-bold leading-normal">Jesus, te agradeço</p>
          <p className="text-[76px] font-bold leading-normal">Eu te agradeço</p>
          <p className="text-[76px] font-bold leading-normal">Te agradeço</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Por tudo o que tens feito</p>
          <p className="text-[76px] font-bold leading-normal">Por tudo o que vais fazer</p>
          <p className="text-[76px] font-bold leading-normal">Por tuas promessas e tudo o que és</p>
          <p className="text-[76px] font-bold leading-normal">Eu quero te agradecer</p>
          <p className="text-[76px] font-bold leading-normal">Com todo o meu ser</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Te agradeço meu Senhor</p>
          <p className="text-[76px] font-bold leading-normal">Te agradeço meu Senhor</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Te agradeço por me libertar e salvar</p>
          <p className="text-[76px] font-bold leading-normal">Por ter morrido em meu lugar</p>
          <p className="text-[76px] font-bold leading-normal">Te agradeço</p>
          <p className="text-[76px] font-bold leading-normal">Jesus, te agradeço</p>
          <p className="text-[76px] font-bold leading-normal">Eu te agradeço</p>
          <p className="text-[76px] font-bold leading-normal">Te agradeço</p>
        </section>
      </LyricsSlide>

      <LyricsSlide>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Deus enviou seu filho amado</p>
          <p className="text-[76px] font-bold leading-normal">Para nos salvar e perdoar,</p>
          <p className="text-[76px] font-bold leading-normal">Na cruz morreu por meus pecados,</p>
          <p className="text-[76px] font-bold leading-normal">Mas ressurgiu e vivo com o pai está</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Porque Ele vive, posso crer no amanhã</p>
          <p className="text-[76px] font-bold leading-normal">Porque Ele vive, temor não há</p>
          <p className="text-[76px] font-bold leading-normal">Mas eu bem sei, bem sei, que a minha vida</p>
          <p className="text-[76px] font-bold leading-normal">Está nas mãos do meu Jesus que vivo está</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">E quando enfim chegar a hora</p>
          <p className="text-[76px] font-bold leading-normal">Em que a morte enfrentarei</p>
          <p className="text-[76px] font-bold leading-normal">Sem medo, então, terei vitória</p>
          <p className="text-[76px] font-bold leading-normal">Verei na glória, o meu Jesus que vivo está</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Porque Ele vive, posso crer no amanhã</p>
          <p className="text-[76px] font-bold leading-normal">Porque Ele vive, temor não há</p>
          <p className="text-[76px] font-bold leading-normal">Mas eu bem sei, bem sei, que a minha vida</p>
          <p className="text-[76px] font-bold leading-normal">Está nas mãos do meu Jesus que vivo está</p>
        </section>
      </LyricsSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>A RESSURREIÇÃO DE JESUS CRISTO</MainTitle>
          <SubTitle>TRAZ ESPERANÇA AOS CORAÇÕES DOS CRENTES</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Lucas 24.13-35 (Rev. Alceu Petró Junior)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <MessageThemeBackground>
      </MessageThemeBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A RESSURREIÇÃO DE JESUS CRISTO</MainTitle>
          <SubTitle>IMPULSIONA A IGREJA NA SUA MISSÃO NO MUNDO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CEIFEIROS DO SENHOR, nº 318</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-318")} />
      </SlideWithBackground>

      <LyricsSlide>
        <section className="text-left text-white bg-black">
          <p className="text-[76px] font-bold leading-normal">Que o Senhor te abençoe</p>
          <p className="text-[76px] font-bold leading-normal">E faça brilhar seu rosto em ti</p>
          <p className="text-[76px] font-bold leading-normal">Que conceda sua graça e te dê paz</p>
          <p className="text-[76px] font-bold leading-normal">Amém, Amém, Amém! 2x</p>
        </section>
      </LyricsSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>AVISOS</MainTitle>
        </section>
      </SlideWithBackground>

    </RevealJsBaseElement>
  )
}
