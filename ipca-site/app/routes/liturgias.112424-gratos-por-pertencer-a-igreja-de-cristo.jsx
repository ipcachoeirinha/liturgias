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

const PAGE_TITLE = "Gratos por pertencer à igreja de Cristo - 24 de Novembro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/querido-visitante", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-3", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-78", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-59", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-172", extension: "mp4", resourceType: "video" },
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
        <MainTitle>GRATOS POR PERTENCER À IGREJA DE CRISTO</MainTitle>
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
          <MainTitle>GRATOS POR PERTENCER À IGREJA DE CRISTO</MainTitle>
          <SubTitle>NOS PROSTRAMOS EM ADORAÇÃO AO DEUS VIVO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 2º TIMÓTEO 3.14-16</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A IGREJA EM ADORAÇÃO, nº 3</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>GRATOS POR PERTENCER À IGREJA DE CRISTO</MainTitle>
          <SubTitle>CONFESSAMOS NOSSOS PECADOS AO DEUS MISERICORDIOSO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 1.8-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERFEITA EXPIAÇÃO, nº 78</LiturgyStep>
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
          <MainTitle>GRATOS POR PERTENCER À IGREJA DE CRISTO</MainTitle>
          <SubTitle>CONFESSAMOS NOSSOS PECADOS AO DEUS MISERICORDIOSO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 1.8-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERFEITA EXPIAÇÃO, nº 78</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-78")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>GRATOS POR PERTENCER À IGREJA DE CRISTO</MainTitle>
          <SubTitle>VALORIZAMOS A COMUNHÃO VIVIDA EM AMBIENTE PACTUAL</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ATOS 2.42-47</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ATOS 5.32-37</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: GRATIDÃO, nº 59</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-59")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'></section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu sei que foi pago um alto preço</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Para que contigo eu fosse um, meu irmão</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Quando Jesus derramou Sua vida</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele pensava em ti</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele pensava em mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pensava em nós</p>
        </section>

        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu sei que foi pago um alto preço</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Para que contigo eu fosse um, meu irmão</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Quando Jesus derramou Sua vida</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele pensava em ti</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele pensava em mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pensava em nós</p>
        </section>

        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E nos via redimidos por Seu sangue</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Lutando o bom combate do Senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Lado a lado trabalhando</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Sua igreja edificando</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E rompendo as barreiras pelo amor</p>
        </section>

        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E na força do Espírito Santo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Nós proclamamos aqui</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Que já foi pago o preço de sermos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Um só coração no Senhor</p>
        </section>

        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E por mais que as trevas militem</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E nos tentem separar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com os nossos olhos em Cristo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Unidos iremos andar</p>
        </section>

        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E na força do Espírito Santo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Nós proclamamos aqui</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Que já foi pago o preço de sermos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Um só coração no Senhor</p>
        </section>

        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E por mais que as trevas militem</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E nos tentem separar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com os nossos olhos em Cristo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Unidos iremos andar</p>
        </section>

        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Unidos iremos andar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Unidos iremos andar</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>GRATOS POR PERTENCER À IGREJA DE CRISTO</MainTitle>
          <SubTitle>PRIORIZAMOS OUVIR A PREGAÇÃO DA PALAVRA DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: COLOSSENSES 1.1-8 (Rev. Arnaldo Matias)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>GRATOS POR PERTENCER À IGREJA DE CRISTO</MainTitle>
          <SubTitle>DESFRUTAMOS DE CHUVAS DE BÊNÇÃOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CHUVAS DE BENÇÃOS, nº 172</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>TRÍPLICE AMÉM</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-172")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>POSLÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <WelcomeBackground></WelcomeBackground>

      <SlideWithBackground>
        <MainTitle>VERSÍCULO DO MÊS DE NOVEMBRO</MainTitle>
        <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>"Da multidão dos que creram era um o coração e a alma. Ninguém considerava exclusivamente sua nem uma das coisas que possuía; tudo, porém, lhes era comum. Com grande poder, os apóstolos davam testemunho da ressurreição do Senhor Jesus, e em todos eles havia abundante graça." Atos 4.32-33</p>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>CFW: PERGUNTA 131</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Quais são os deveres dos iguais?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Os deveres dos iguais são o considerar a dignidade e o merecimento uns dos outros, tendo cada um aos outros por superiores; e o alegrar-se com os dons e a promoção uns dos outros como sendo de si mesmos.</p>
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
