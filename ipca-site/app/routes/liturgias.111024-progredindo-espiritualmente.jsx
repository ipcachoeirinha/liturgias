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

const PAGE_TITLE = "Progredindo Espiritualmente - 10 de Novembro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-121", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-59", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-147", extension: "mp4", resourceType: "video" },
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

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>PROGREDINDO ESPIRITUALMENTE</MainTitle>
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
          <MainTitle>PROGREDINDO ESPIRITUALMENTE</MainTitle>
          <SubTitle>RECONHECEMOS QUE A VERDADEIRA MATURIDADE SÓ SÃO ENCONTRADAS AO BUSCAR E ADORAR AO SENHOR COM UM CORAÇÃO SEDENTO E DEVOTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 63</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICOS CONGREGACIONAIS</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu és soberano sobre a terra</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sobre os céus, Tu és Senhor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Absoluto</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tudo que existe e acontece</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu o sabes muito bem</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu és tremendo</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E apesar dessa glória que Tens</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu te importas comigo também</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E esse amor tão grande</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eleva-me, amarra-me a Ti</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu és tremendo</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu és soberano sobre a Terra</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sobre os céus, Tu és Senhor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Absoluto</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tudo que existe e acontece</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu o sabes muito bem</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu és tremendo</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E apesar dessa glória que Tens</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu te importas comigo também</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E esse amor tão grande</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eleva-me, amarra-me a Ti</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tu és tremendo</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Meu Jesus, Salvador</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Outro igual não há</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todos os dias quero louvar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">As maravilhas de Teu amor</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Consolo, abrigo</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Força e refúgio é o Senhor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com todo o meu ser</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com tudo o que sou</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre Te adorarei</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Aclame ao Senhor toda a terra e cantemos</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Poder, majestade e louvores ao Rei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Montanhas se prostrem e rujam os mares</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao som de Teu nome</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Alegre Te louvo por Teus grandes feitos</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firmado estarei, sempre Te amarei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Incomparáveis são Tuas promessas pra mim</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Meu Jesus, Salvador</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Outro igual não há</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todos os dias quero louvar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">As maravilhas de Teu amor</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Consolo, abrigo</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Força e refúgio é o Senhor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com todo o meu ser</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com tudo o que sou</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre Te adorarei</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Aclame ao Senhor toda a terra e cantemos</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Poder, majestade e louvores ao Rei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Montanhas se prostrem e rujam os mares</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao som de Teu nome</p>
        </section>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Alegre Te louvo por Teus grandes feitos</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firmado estarei, sempre Te amarei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Incomparáveis são Tuas promessas pra mim</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PROGREDINDO ESPIRITUALMENTE</MainTitle>
          <SubTitle>ABANDONAMOS NOSSOS MAUS CAMINHOS E SEGUIMOS OS PENSAMENTOS E CAMINHOS DO MISERICORDIOSO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ISAÍAS 55:6-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERFEIÇÃO, nº 121</LiturgyStep>
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
          <MainTitle>PROGREDINDO ESPIRITUALMENTE</MainTitle>
          <SubTitle>ABANDONAMOS NOSSOS MAUS CAMINHOS E SEGUIMOS OS PENSAMENTOS E CAMINHOS DO MISERICORDIOSO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ISAÍAS 55:6-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERFEIÇÃO, nº 121</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-121")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PROGREDINDO ESPIRITUALMENTE</MainTitle>
          <SubTitle>VIVEMOS EM GRATIDÃO, COM A PALAVRA DE CRISTO HABITANDO RICAMENTE EM NÓS, ORIENTANDO NOSSAS AÇÕES E LOUVORES AO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: COLOSSENSES 3:15-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: GRATIDÃO, nº 59</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-59")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PROGREDINDO ESPIRITUALMENTE</MainTitle>
          <SubTitle>FOCAMOS EM CRISTO AFIM DE SERMOS MOLDADOS<br/>A SUA IMAGEM</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: FILIPENSES 3.12-16 (Sem. Cristian)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PROGREDINDO ESPIRITUALMENTE</MainTitle>
          <SubTitle>MESMO EM MEIO ÀS LUTAS E TENTAÇÕES, É JESUS QUEM VENCE POR NÓS, TRAZENDO PAZ E VITÓRIA SOBRE O MAL E A VAIDADE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: VENCENDO VEM JESUS, nº 147</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-147")} />
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
