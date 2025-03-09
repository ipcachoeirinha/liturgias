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

const PAGE_TITLE = "Uma Igreja com uma Fé Verdadeira - 09 de Março de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-147", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-177", extension: "mp4", resourceType: "video" }
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
        <MainTitle>UMA IGREJA COM UMA FÉ VERDADEIRA</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA COM UMA FÉ VERDADEIRA</MainTitle>
          <SubTitle>RECONHECE A CRISTO COMO O ÚNICO SENHOR E O ADORA COM TODO O CORAÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: COLOSSENSES 1:13-18</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 TIMÓTEO 2:5</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO GRANDE É O SENHOR</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
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
          <MainTitle>UMA IGREJA COM UMA FÉ VERDADEIRA</MainTitle>
          <SubTitle>RECONHECE A CRISTO COMO O ÚNICO SALVADOR E CONFESSA SEUS PECADOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ROMANOS 5:1</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO ME DERRAMAR</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 09 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eis-me aqui outra vez</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Diante de Ti abro o meu coração</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Meu clamor Tu escutas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E fazes cair as barreiras em mim</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">És fiel, Senhor, e dizes</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Palavras de amor e esperança sem fim</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao sentir Teu toque</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por Tua bondade, libertas meu ser no calor deste lugar</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu venho me derramar, dizer que Te amo</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer: Te preciso</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que sou grato</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que és formoso</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eis-me aqui outra vez</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Diante de Ti abro o meu coração</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Meu clamor Tu escutas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E fazes cair as barreiras em mim</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">És fiel, Senhor, e dizes</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Palavras de amor e esperança sem fim</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao sentir Teu toque</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por Tua bondade, libertas meu ser no calor deste lugar</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu venho me derramar, dizer que Te amo</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer: Te preciso</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que sou grato</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que és formoso</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que Te amo</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer: Te preciso</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que sou grato</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que és formoso</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que Te amo</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer: Te preciso</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que sou grato</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me derramar, dizer que és formoso</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Pergunta 09: Qual é a obra da criação?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>A obra da criação é aquela pela qual, Deus fez todas as coisas do nada, no espaço de seis dias, e tudo muito bem.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA COM UMA FÉ VERDADEIRA</MainTitle>
          <SubTitle>RECONHECE A GRAÇA RECEBIDA POR MEIO DE CRISTO E AGRADECE AO SEU SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: EFÉSIOS 2:8-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: VENCENDO VEM JESUS, nº 147</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-147")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quando a alma sequiosa</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Chega a voz do Salvador,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eis que logo reconhece</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ser Jesus o seu Senhor!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas se o "eu" quer levantar-se</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E mostrar algum valor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Neste mundo havemos, crentes,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De ter sempre algum pesar!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mesmo lutas, dissabores,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nossa paz vêm perturbar.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas se o mal nos ameaça</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De a alegria nos roubar,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Da vaidade, fiéis servos</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Lutam por fazer-nos seus!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Muitas vezes nos assaltam</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Os modernos fariseus.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas se alguém procura ver-nos</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sem a graça do bom Deus,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA COM UMA FÉ VERDADEIRA</MainTitle>
          <SubTitle>RECONHECE O VALOR DA PALAVRA DE CRISTO E A ESCUTA COM ATENÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 3.1-11</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA COM UMA FÉ VERDADEIRA</MainTitle>
          <SubTitle>RECONHECE QUE A OBRA DE CRISTO É SUFICIENTE PARA SALVAÇÃO E SEGUE AO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: FIRMES NAS PROMESSAS, nº 177</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-177")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme nas promessas do meu Salvador,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cantarei louvores ao meu Criador!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Fico, pelos séculos do seu amor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme nas promessas de Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme, firme, Firme nas promessas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De Jesus, meu Mestre! Firme, firme,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sim, firme nas promessas de Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme nas promessas, hei de trabalhar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tendo o Verbo eterno sempre a me amparar!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mesmo em tempestade vou sem vacilar,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme nas promessas de Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme, firme, Firme nas promessas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De Jesus, meu Mestre! Firme, firme,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sim, firme nas promessas de Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme nas promessas, sempre vejo, assim,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Purificação no sangue para mim!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Plena liberdade já desfruto, enfim;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme nas promessas de Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme, firme, Firme nas promessas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De Jesus, meu Mestre! Firme, firme,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sim, firme nas promessas de Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme nas promessas do Senhor Jesus,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Em amor ligado sempre à sua cruz,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cada dia mais me alegro em sua luz,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme nas promessas de Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Firme, firme, Firme nas promessas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De Jesus, meu Mestre! Firme, firme,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sim, firme nas promessas de Jesus!</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
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
