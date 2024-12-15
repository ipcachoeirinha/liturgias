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

const PAGE_TITLE = "Jesus, O Poderoso Filho de Deus - 8 de Dezembro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/querido-visitante", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-239", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-105", extension: "mp4", resourceType: "video" },
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
  const SupperSlide = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/santa-ceia-bg"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>JESUS, O PODEROSO FILHO DE DEUS</MainTitle>
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
          <MainTitle>JESUS, O PODEROSO FILHO DE DEUS</MainTitle>
          <SubTitle>POSSUI AUTORIDADE ETERNA QUE ABRANGE TODA A CRIAÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 95.6-7</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ISAÍAS 9.6</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO GRANDE É O SENHOR</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Grande é o Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E mui digno de louvor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Na cidade do nosso Deus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Seu Santo monte
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Alegria de toda terra
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Grande é o Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em quem nós temos a vitória
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E que nos ajuda
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Contra o inimigo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Por isso diante Dele
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Nos prostramos
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Queremos o Teu
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Nome engrandecer
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E agradecer-Te
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Por Tua obra
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em nossas vidas
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Confiamos em Teu
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Infinito amor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois só Tu és
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O Deus eterno
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sobre toda terra e céus
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Grande é o Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E mui digno de louvor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Na cidade do nosso Deus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Seu Santo monte
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Alegria de toda terra
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Grande é o Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em quem nós temos a vitória
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E que nos ajuda
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Contra o inimigo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Por isso diante Dele
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Nos prostramos
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Queremos o Teu
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Nome engrandecer
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E agradecer-Te
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Por Tua obra
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em nossas vidas
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Confiamos em Teu
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Infinito amor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois só Tu és
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O Deus eterno
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sobre toda terra e céus
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Queremos o Teu
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Nome engrandecer
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E agradecer-Te
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Por Tua obra
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em nossas vidas
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Confiamos em Teu
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Infinito amor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois só Tu és
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O Deus eterno
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sobre toda terra e céus
          </p>
        </section>
      </SlideWithBackground>
      <SlideWithBackground>
        <section>
          <MainTitle>JESUS, O PODEROSO FILHO DE DEUS</MainTitle>
          <SubTitle>LANÇA AS INIQUIDADES DO SEU POVO NO ABISMO E ESTABELECE UM NOVO PACTO DE SALVAÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: AMÓS 5.14-15</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MIQUÉIAS 7.18-19</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: INDEPENDÊNCIA, nº 105</LiturgyStep>
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
          <MainTitle>JESUS, O PODEROSO FILHO DE DEUS</MainTitle>
          <SubTitle>LANÇA AS INIQUIDADES DO SEU POVO NO ABISMO E ESTABELECE UM NOVO PACTO DE SALVAÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: AMÓS 5.14-15</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MIQUÉIAS 7.18-19</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: INDEPENDÊNCIA, nº 105</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-105")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>JESUS, O PODEROSO FILHO DE DEUS</MainTitle>
          <SubTitle>FOI ESCOLHIDO POR DEUS PARA ABENÇOAR O SEU POVO COM TODA SORTE DE BENÇÃO ESPIRITUAIS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: EFÉSIOS 1.3-6</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: FILIPENSES 2.9-11</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO DOCE NOME - VENCEDORES POR CRISTO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>
      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Só de ouvir tua voz
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            De sentir teu amor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Só de pronunciar o teu nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Os meus medos se vão
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Minha dor, meu sofrer
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois de paz tu inundas meu ser
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Só de ouvir tua voz
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            De sentir teu amor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Só de pronunciar o teu nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Os meus medos se vão
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Minha dor, meu sofrer
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois de paz tu inundas meu ser
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Que doce nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Que transforma em alegria
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O meu triste coração
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Só o teu nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            É capaz de dar ao homem salvação
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Só de ouvir tua voz
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            De sentir teu amor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Só de pronunciar o teu nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Os meus medos se vão
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Minha dor, meu sofrer
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois de paz tu inundas meu ser
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Que doce nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Que transforma em alegria
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O meu triste coração
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Só o teu nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            É capaz de dar ao homem salvação
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Que doce nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Que transforma em alegria
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O meu triste coração
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Só o teu nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            É capaz de dar ao homem salvação
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>JESUS, O PODEROSO FILHO DE DEUS</MainTitle>
          <SubTitle>GARANTE A VIDA ETERNA ÀQUELES QUE CREEM NELE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: João 5.24-29 (Rev. Arnaldo Matias)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>JESUS, O PODEROSO FILHO DE DEUS</MainTitle>
          <SubTitle>SE MANIFESTA AO SEU POVO ATRAVÉS DA SANTA CEIA, OFERECENDO-NOS A SUA PRESENÇA REAL E FORTALECIMENTO DA NOSSA FÉ</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: NASCE JESUS, nº 239</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <section>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Graças eu Te dou Pai
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pelo preço que pagou
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sacrifício de amor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Que me comprou ungido do Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pelos cravos em Suas mãos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Graças eu Te dou ó meu Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Lavou minha mente e coração
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Me deu perdão, restaurou-me a comunhão
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Digno é o Senhor, sobre o trono está
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Soberano, Criador, vou sempre te adorar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Elevo minhas mãos, ao Cristo que venceu
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cordeiro de Deus morreu por mim
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Mas ressuscitou, Digno é o Senhor
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pelos cravos em Suas mãos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Graças eu Te dou ó meu Senhor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Lavou minha mente e coração
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Me deu perdão, restaurou-me a comunhão
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Digno é o Senhor, sobre o trono está
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Soberano, Criador, vou sempre te adorar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Elevo minhas mãos, ao Cristo que venceu
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cordeiro de Deus morreu por mim
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Mas ressuscitou, Digno é o Senhor
          </p>
        </section>
      </section>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>JESUS, O PODEROSO FILHO DE DEUS</MainTitle>
          <SubTitle>SE MANIFESTA AO SEU POVO ATRAVÉS DA SANTA CEIA, OFERECENDO-NOS A SUA PRESENÇA REAL E FORTALECIMENTO DA NOSSA FÉ</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: NASCE JESUS, nº 239</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-239")} />
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
          <MainTitle>CFW: PERGUNTA 133</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Qual é a razão anexa ao quinto mandamento para lhe dar maior força?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>A razão anexa ao quinto mandamento, para lhe dar maior força, contida nestas palavras: “para que se prolonguem os teus dias na terra que o Senhor teu Deus te dá”, é uma promessa de longa vida e prosperidade, tanto quanto sirva para a glória de Deus e para o bem de todos quantos guardem este mandamento.</p>
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
