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

const PAGE_TITLE = "Vivendo o perdão bíblico - 03 de Novembro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/querido-visitante", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/edital-convocacao-100424", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-32", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-38", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-62", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-59", extension: "mp4", resourceType: "video" },
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
  const Notice1Background = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/edital-convocacao-100424"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>VIVENDO O PERDÃO BÍBLICO</MainTitle>
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
          <MainTitle>VIVENDO O PERDÃO BÍBLICO</MainTitle>
          <SubTitle>RECONHECEMOS A GRAÇA PERDOADORA DO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 103.1-11</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: EFÉSIOS 4.32</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: O DEUS FIEL, nº 32</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-32")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO O PERDÃO BÍBLICO</MainTitle>
          <SubTitle>SOMOS PERDOADOS E SANTIFICADOS A FIM DE DESFRUTARMOS COMUNHÃO COM O SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 1.9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: COLOSSENSES 3.13</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: MATEUS 18.21-22</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: LOUVORES SEM FIM, nº 38</LiturgyStep>
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
          <MainTitle>VIVENDO O PERDÃO BÍBLICO</MainTitle>
          <SubTitle>SOMOS PERDOADOS E SANTIFICADOS A FIM DE DESFRUTARMOS COMUNHÃO COM O SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 1.9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: COLOSSENSES 3.13</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: MATEUS 18.21-22</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: LOUVORES SEM FIM, nº 38</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-38")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO O PERDÃO BÍBLICO</MainTitle>
          <SubTitle>CANTAMOS COM GRATIDÃO AO SENHOR QUE NOS ENVOLVE EM SUA SALVAÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ISAÍAS 12.1-2</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MIQUÉIAS 7.18-19</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ISAÍAS 61.10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICOS CONGREGACIONAIS</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-62")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Todos necessitam</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>De um amor perfeito</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Perdão e compaixão</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Todos necessitam</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>De graça e esperança</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>De um Deus que salva</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cristo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Move as montanhas</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E tem poder pra salvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tem poder pra salvar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra sempre</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Autor da salvação</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus a morte venceu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Sobre a morte venceu</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Me aceitas com meus medos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Falhas e temores</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Enche o meu viver</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A minha vida entrego</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra seguir Teus passos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A ti me rendo</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cristo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Move as montanhas</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E tem poder pra salvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tem poder pra salvar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra sempre</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Autor da salvação</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus a morte venceu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Sobre a morte venceu</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Possa o mundo ver brilhar a luz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cantamos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Para a glória do Senhor Jesus Cristo</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cristo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Move as montanhas</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E tem poder pra salvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tem poder pra salvar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra sempre</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Autor da salvação</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus a morte venceu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Sobre a morte venceu</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tu és a minha luz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A minha salvação</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E a Ti me renderei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Se ao teu lado estou</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Seguro em tuas mãos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu nada temerei</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ôô, ôô, ôô</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tu és Santo, ó Senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ôô, ôô, ôô</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tu és digno de louvor</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Só em Ti confiarei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu nada temerei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em frente eu irei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pois eu sei que vivo estás!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E um dia voltarás</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Do céu pra nos buscar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Para sempre reinarás, aleluia!</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tu és a minha luz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A minha salvação</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E a Ti me renderei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Se ao teu lado estou</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Seguro em tuas mãos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu nada temerei</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ôô, ôô, ôô</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tu és Santo, ó Senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ôô, ôô, ôô</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tu és digno de louvor</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Só em Ti confiarei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu nada temerei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em frente eu irei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pois eu sei que vivo estás!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E um dia voltarás</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Do céu pra nos buscar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Para sempre reinarás, aleluia!</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Só em Ti confiarei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu nada temerei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em frente eu irei</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pois eu sei que vivo estás!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E um dia voltarás</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Do céu pra nos buscar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Para sempre reinarás, aleluia!</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Vem Jesus, vem Jesus!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Maranata ora, vem Senhor Jesus!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Vem Jesus, vem Jesus!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Maranata ora, vem Senhor Jesus!</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO O PERDÃO BÍBLICO</MainTitle>
          <SubTitle>SEGUIMOS O EXEMPLO DE CRISTO E REAFIRMAMOS NOSSO AMOR AOS ARREPENDIDOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: 2 CORÍNTIOS 2.5-11 (Rev. Arnaldo Matias)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO O PERDÃO BÍBLICO</MainTitle>
          <SubTitle>ANUNCIAMOS O NOME DE CRISTO AOS PECADORES</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: GRATIDÃO, nº 59</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-59")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} />
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
          <MainTitle>CFW: PERGUNTA 130</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Quais são os pecados dos superiores?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Os pecados dos superiores são, além da negligência dos deveres que lhes são exigidos, a ambição desordenada, a busca desordenada da própria glória, do repouso, do proveito ou do prazer; mandar fazer coisas ilícitas ou fora do poder dos inferiores; aconselhar, afirmar ou favorecê-los naquilo que é mau;</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>dissuadi-los, desanimá-los ou reprová-los naquilo que é bom; corrigi-los indevidamente; expôlos descuidadosamente ao dano, à tentação e ao perigo; provocá-los à ira; ou de qualquer modo desonrarem-se a si mesmos, ou diminuir a sua autoridade por um comportamento injusto, indiscreto, rigoroso ou negligente.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVISOS</MainTitle>
        </section>
        <Notice1Background></Notice1Background>
      </SlideWithBackground>

    </RevealJsBaseElement>
  )
}
