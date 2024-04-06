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

const PAGE_TITLE = "Uma Igreja Firmada na Misericórdia de Deus - 07 de Abril de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-178", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-223", extension: "mp4", resourceType: "video" },
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

export default function UmaIgrejaFirmadaNaMisericordiaDeDeus() {
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
  const LyricsSlide = createLyricsSlideSection({ backgroundUrl: null })

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>UMA IGREJA FIRMADA NA MISERICÓRDIA DE DEUS</MainTitle>
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
          <MainTitle>UMA IGREJA FIRMADA NA MISERICÓRDIA DE DEUS</MainTitle>
          <SubTitle>POSSUI UM CORAÇÃO CHEIO DE LOUVOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 59.16-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A EXCELÊNCIA DO AMOR, nº 178</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-178")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA FIRMADA NA MISERICÓRDIA DE DEUS</MainTitle>
          <SubTitle>POSSUI UM CORAÇÃO CHEIO DE MISERICÓRDIA PARA COM O PRÓXIMO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: LUCAS 10.25-37</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: ORAÇÃO DO ARREPENDIDO, nº 223</LiturgyStep>
          </LiturgySteps>
        </section>

        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-223")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA FIRMADA NA MISERICÓRDIA DE DEUS</MainTitle>
          <SubTitle>POSSUI UM CORAÇÃO CHEIO DE GRATIDÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 112.1-10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO CONGREGACIONAL</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <LyricsSlide>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Maravilhosa graça que perdido me encontrou</p>
          <p className="text-[72px] font-bold leading-normal">Estando cego pude ver, Cristo me resgatou</p>
          <p className="text-[72px] font-bold leading-normal">Quando tua graça me tocou, do medo me livrou</p>
          <p className="text-[72px] font-bold leading-normal">Quão preciosa é para mim, a graça do Senhor</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Liberto eu fui de uma prisão</p>
          <p className="text-[72px] font-bold leading-normal">Meu Salvador me resgatou</p>
          <p className="text-[72px] font-bold leading-normal">Misericórdia e perdão</p>
          <p className="text-[72px] font-bold leading-normal">Eterno amor e redenção</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Deus prometeu o melhor pra mim e nEle esperarei</p>
          <p className="text-[72px] font-bold leading-normal">Escudo e força Ele será enquanto eu viver</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Liberto eu fui de uma prisão</p>
          <p className="text-[72px] font-bold leading-normal">Meu Salvador me resgatou</p>
          <p className="text-[72px] font-bold leading-normal">Misericórdia e perdão</p>
          <p className="text-[72px] font-bold leading-normal">Eterno amor e redenção</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Se o meu mundo se acabar e o sol não mais brilhar</p>
          <p className="text-[72px] font-bold leading-normal">O Deus que um dia me chamou</p>
          <p className="text-[72px] font-bold leading-normal">Será pra sempre meu</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Liberto eu fui de uma prisão</p>
          <p className="text-[72px] font-bold leading-normal">Meu Salvador me resgatou</p>
          <p className="text-[72px] font-bold leading-normal">Misericórdia e perdão</p>
          <p className="text-[72px] font-bold leading-normal">Eterno amor e redenção</p>
        </section>
      </LyricsSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA FIRMADA NA MISERICÓRDIA DE DEUS</MainTitle>
          <SubTitle>POSSUI UM CORAÇÃO CHEIO DE REVERÊNCIA PELA EXPOSIÇÃO DAS ESCRITURAS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Mateus 5.7 (Rev. Alceu Petró Junior)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA FIRMADA NA MISERICÓRDIA DE DEUS</MainTitle>
          <SubTitle>POSSUI UM CORAÇÃO CHEIO DE BOAS OBRAS, RESULTADO DE UMA VIDA TRANSFORMADA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO CONGREGACIONAL</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <LyricsSlide>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Sonda-me, Senhor, e me conhece</p>
          <p className="text-[72px] font-bold leading-normal">Quebranta o meu coração</p>
          <p className="text-[72px] font-bold leading-normal">Transforma-me conforme a Tua palavra</p>
          <p className="text-[72px] font-bold leading-normal">E enche-me até que em mim se ache só a Ti</p>
          <p className="text-[72px] font-bold leading-normal">Então, Usa-me, Senhor, Usa-me</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Como um farol que brilha à noite</p>
          <p className="text-[72px] font-bold leading-normal">Como ponte sobre as águas</p>
          <p className="text-[72px] font-bold leading-normal">Como abrigo no deserto</p>
          <p className="text-[72px] font-bold leading-normal">Como flecha que acerta o alvo</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Eu quero ser usado da maneira que Te agrade</p>
          <p className="text-[72px] font-bold leading-normal">Em qualquer hora e em qualquer lugar</p>
          <p className="text-[72px] font-bold leading-normal">Eis aqui a minha vida, usa-me, Senhor</p>
          <p className="text-[72px] font-bold leading-normal">Usa-me</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Sonda-me, Senhor, e me conhece</p>
          <p className="text-[72px] font-bold leading-normal">Quebranta o meu coração</p>
          <p className="text-[72px] font-bold leading-normal">Transforma-me conforme a Tua palavra</p>
          <p className="text-[72px] font-bold leading-normal">E enche-me até que em mim se ache só a Ti</p>
          <p className="text-[72px] font-bold leading-normal">Então, Usa-me, Senhor, Usa-me</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Como um farol que brilha à noite</p>
          <p className="text-[72px] font-bold leading-normal">Como ponte sobre as águas</p>
          <p className="text-[72px] font-bold leading-normal">Como abrigo no deserto</p>
          <p className="text-[72px] font-bold leading-normal">Como flecha que acerta o alvo</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Eu quero ser usado da maneira que Te agrade</p>
          <p className="text-[72px] font-bold leading-normal">Em qualquer hora e em qualquer lugar</p>
          <p className="text-[72px] font-bold leading-normal">Eis aqui a minha vida, usa-me, Senhor</p>
          <p className="text-[72px] font-bold leading-normal">Usa-me</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Sonda-me</p>
          <p className="text-[72px] font-bold leading-normal">Quebranta-me</p>
          <p className="text-[72px] font-bold leading-normal">Transforma-me</p>
          <p className="text-[72px] font-bold leading-normal">Enche-me</p>
          <p className="text-[72px] font-bold leading-normal">E usa-me</p>
          <p className="text-[72px] font-bold leading-normal">2x</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Como um farol que brilha à noite</p>
          <p className="text-[72px] font-bold leading-normal">Como ponte sobre as águas</p>
          <p className="text-[72px] font-bold leading-normal">Como abrigo no deserto</p>
          <p className="text-[72px] font-bold leading-normal">Como flecha que acerta o alvo</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Eu quero ser usado da maneira que Te agrade</p>
          <p className="text-[72px] font-bold leading-normal">Em qualquer hora e em qualquer lugar</p>
          <p className="text-[72px] font-bold leading-normal">Eis aqui a minha vida, usa-me, Senhor</p>
          <p className="text-[72px] font-bold leading-normal">Usa-me</p>
        </section>
      </LyricsSlide>

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
