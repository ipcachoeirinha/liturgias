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

const PAGE_TITLE = "Santificados pela Palavra de Deus - 26 de Outubro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-11", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-67", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-145", extension: "mp4", resourceType: "video" },
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
        <MainTitle>SANTIFICADOS PELA PALAVRA DE DEUS</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>PRELÚDIO</MainTitle>
        <audio data-autoplay><source
          type="audio/mpeg"

          src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


        />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <SlideWithBackground>
      <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És a nossa Estrela da manhã,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cordeiro Santo que nos trouxe a paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em Tuas mãos está todo o vencer,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Resposta a todo aquele que clamar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A verdade é a Tua palavra e não podes mentir, por isso estamos aqui</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És a nossa Estrela da manhã,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cordeiro Santo que nos trouxe a paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em Tuas mãos está todo o vencer,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Resposta a todo aquele que clamar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A verdade é a Tua palavra e não podes mentir, por isso estamos aqui</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Te louvamos ó Senhor,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelo Teu imenso amor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Manifesta o Teu perdão e poder</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E assim vamos Te adorar para sempre</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra sempre ó meu Deus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És a nossa Estrela da manhã,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cordeiro Santo que nos trouxe a paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em Tuas mãos está todo o vencer,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Resposta a todo aquele que clamar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A verdade é a Tua palavra e não podes mentir, por isso estamos aqui</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Te louvamos ó Senhor,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelo Teu imenso amor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Manifesta o Teu perdão e poder</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E assim vamos Te adorar para sempre</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra sempre ó meu Deus</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>SANTIFICADOS PELA PALAVRA DE DEUS</MainTitle>
          <SubTitle>DEUS NOS CHAMA A CONTEMPLAR A SUA SANTIDADE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ISAÍAS 6.1-3</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TRINDADE SANTÍSSIMA, nº 11</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-11")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>SANTIFICADOS PELA PALAVRA DE DEUS</MainTitle>
          <SubTitle>DEUS NOS CONVOCA A MORTIFICAR O VELHO HOMEM</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: COLOSSENSES 3.5-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO PASTORAL</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
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
          <MainTitle>SANTIFICADOS PELA PALAVRA DE DEUS</MainTitle>
          <SubTitle>DEUS NOS CONVOCA A MORTIFICAR O VELHO HOMEM</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: COLOSSENSES 3.5-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO PASTORAL</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-67")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>SANTIFICADOS PELA PALAVRA DE DEUS</MainTitle>
          <SubTitle>DESENVOLVE O CHAMADO DE INFLUENCIAR<br/>QUEM ESTÁ AO SEU REDOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: GÁLATAS 5.16-26</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICOS CONGREGACIONAIS</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Diga para os temerosos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Não há nada a temer</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso é o teu Senhor quando clama Seu nome Ele então virá</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem pra te salvar, Ele vem para te salvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Diga ao cansado, o teu Senhor virá</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem para te salvar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem pra te salvar, Ele vem para te salvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Contempla ao Senhor e te levantarás</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem para te salvar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Diga para os abatidos, não percam a fé</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso é o teu Senhor quando clama Seu nome Ele então virá</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem pra te salvar, Ele vem para te salvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Diga ao cansado, o teu Senhor virá</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem para te salvar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem pra te salvar, Ele vem para te salvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Contempla ao Senhor e te levantarás</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem para te salvar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele é o teu refúgio em meio às lutas</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Um escudo na tempestade</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Uma torre na tristeza</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Fortaleza em meio à batalha</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem pra te salvar, Ele vem para te salvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Diga ao cansado, o teu Senhor virá</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem para te salvar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem pra te salvar, Ele vem para te salvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Contempla ao Senhor e te levantarás</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele vem para te salvar</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>No início eras a palavra</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Um com Deus, o Altíssimo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O mistério de Tua glória</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cristo, em Ti se revelou</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Oh, quão lindo esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Oh, quão lindo esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O nome de Jesus, meu Rei</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Oh, quão lindo esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Maior que tudo ele é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Oh, quão lindo esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O nome de Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Deixou o céu para buscar-nos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Veio pra nos resgatar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Amor maior que o meu pecado</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Nada vai nos separar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Oh, quão maravilhoso é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Oh, quão maravilhoso é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O nome de Jesus, meu Rei</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Oh, quão maravilhoso é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Maior que tudo ele é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Oh, quão maravilhoso é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O nome de Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A morte venceste</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O véu Tu rompeste</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A tumba vazia agora está</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O céu Te adora</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Proclama Tua glória</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pois ressuscitaste e vivo está</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És invencível</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Inigualável</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Hoje e pra sempre reinarás</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Teu é o reino</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tua é a glória</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Acima de todo nome está</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O nome de Jesus, meu Rei</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mais forte que tudo é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O nome de Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És invencível</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Inigualável</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Hoje e pra sempre reinarás</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Teu é o reino</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tua é a glória</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Acima de todo nome está</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O nome de Jesus, meu Rei</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mais forte que tudo é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Poderoso esse nome é</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O nome de Jesus</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>SANTIFICADOS PELA PALAVRA DE DEUS</MainTitle>
          <SubTitle>DEUS NOS CHAMA AO ARREPENDIMENTO GENUÍNO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Rev. Marcos Santana</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>SANTIFICADOS PELA PALAVRA DE DEUS</MainTitle>
          <SubTitle>DEUS NOS CONCLAMA A VIVER EM CRISTO<br/>EM NOVIDADE DE VIDA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: REFÚGIO VERDADEIRO, nº 145</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>TRÍPLICE AMÉM</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-145")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mil motivos para agradecer</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mais de mil razões para louvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mil canções de amor para cantar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por tão grande amor que recebi</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pela graça que me atraiu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por me perdoar sem merecer</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por regenerar meu coração</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E me dar a paz sem fim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelas grandes obras de Tuas mãos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou por tudo o que fizeste a mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por me socorrer nas aflições</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por saber que nunca estou só</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelo Teu cuidado que é sem fim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ao Autor da minha salvação</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Meu amado, meu Senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Seja minha grata adoração</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou por tudo o que fizeste a mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou por tudo o que fizeste a mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou</p>
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
