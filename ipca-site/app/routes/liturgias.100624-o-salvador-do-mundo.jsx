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

const PAGE_TITLE = "O Salvador do Mundo - 06 de Outubro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-307", extension: "mp4", resourceType: "video" },
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
        <MainTitle>O SALVADOR DO MUNDO</MainTitle>
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
          <MainTitle>O SALVADOR DO MUNDO</MainTitle>
          <SubTitle>É O REI DAS NAÇÕES, GOVERNANDO COM JUSTIÇA E PODER</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 72</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A IGREJA EM ADORAÇÃO, nº 3</LiturgyStep>
          </LiturgySteps>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Hino HNC - A IGREJA EM ADORAÇÃO, nº 3</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eterno Pai, Teu povo congregado,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Humilde, entoa o Teu louvor aqui!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>No dia para o culto reservado,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com esperança olhamos para Ti.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Teu santo livro, ó grande Deus, tomamos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com fé singela e reverente amor,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E, como atentos filhos, procuramos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ciência na Palavra do Senhor.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus, Aos Teus benditos pés sentados,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Queremos Teu conselho receber!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E, sendo por Ti mesmo doutrinados,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>De mais em mais na santa fé crescer.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Do mundo e seus encargos retirados,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Queremos descansar em Ti, Senhor,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mirando os ricos bens entesourados</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Na plenitude do Teu vasto amor.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ensina aos Teus, Espírito Divino,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Dissipa as trevas destes corações!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E, com a luz do Teu celeste ensino,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Vem aclarar as Tuas instruções.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Aviva em nós a forças da memória,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pois sempre mais queremos conhecer.</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O Rei dos céus, o Cristo, cuja glória</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Enleva os santos anjos de prazer.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O SALVADOR DO MUNDO</MainTitle>
          <SubTitle>CARREGOU NOSSOS PECADOS PARA QUE PUDÉSSEMOS SER PERDOADOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ISAÍAS 53.4-6</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 1.9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO: ISAÍAS 53</LiturgyStep>
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
          <MainTitle>O SALVADOR DO MUNDO</MainTitle>
          <SubTitle>CARREGOU NOSSOS PECADOS PARA QUE PUDÉSSEMOS SER PERDOADOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ISAÍAS 53.4-6</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 JOÃO 1.9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO: ISAÍAS 53</LiturgyStep>
          </LiturgySteps>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>PROJETO SOLA - ISAÍAS 53</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele não tinha qualquer beleza</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ou majestade pra nos atrair</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Nada havia em Sua aparência</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Para o desejarmos</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mais rejeitado dentre os homens</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ainda assim carregou nossas dores</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O Seu castigo nos traz paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E a esperança não se esvai</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A oferta pela culpa Ele ofereceu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra satisfazer o Criador, Ele morreu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra que a Sua luz em nós pudesse brilhar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O filho do amor se entregou em nosso lugar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mais rejeitado dentre os homens</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ainda assim carregou nossas dores</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O Seu castigo nos traz paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E a esperança não se esvai</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A oferta pela culpa Ele ofereceu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra satisfazer o Criador, Ele morreu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra que a Sua luz em nós pudesse brilhar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O filho do amor se entregou em nosso lugar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És o cordeiro que pelos nossos pecados foi esmagado</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Sem dizer uma só palavra, se entregou aos cravos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Derramou Sua vida até a morte provando a ira amarga</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra nos dar Sua doce graça e nos fazer viver</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O SALVADOR DO MUNDO</MainTitle>
          <SubTitle>NOS CHAMA A INTERCEDER POR CADA NAÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 TIMÓTEO 2.1-6</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: APOCALIPSE 15.4</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO PASTORAL</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO: BONDADE DE DEUS</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
          </LiturgySteps>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>BONDADE DE DEUS</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Te amo, Deus, tua graça nunca falha</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Todos os dias eu estou em tuas mãos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Desde quando me levanto até eu me deitar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu cantarei da bondade de Deus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És fiel em todo tempo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em todo tempo tu és tão, tão bom</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com todo fôlego que tenho</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu cantarei da bondade de Deus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tua doce voz que me guia em meio ao fogo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Na escuridão, tua presença me conforta</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu sei que és meu pai, que amigo és</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E eu vivo na bondade de Deus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És fiel em todo tempo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em todo tempo tu és tão, tão bom</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com todo fôlego que tenho</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu cantarei da bondade de Deus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És fiel em todo tempo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em todo tempo tu és tão, tão bom</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com todo fôlego que tenho</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu cantarei da bondade de Deus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tua bondade me seguirá</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Me seguirá, senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu me rendo a ti, te dou meu ser</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Entrego tudo a ti</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Tua bondade me seguirá</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Me seguirá, senhor</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És fiel em todo tempo</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em todo tempo tu és tão, tão bom</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com todo fôlego que tenho</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eu cantarei da bondade de Deus</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O SALVADOR DO MUNDO</MainTitle>
          <SubTitle>É JESUS CRISTO, A ÚNICA ESPERANÇA PARA O PERDIDO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: JOÃO 14.1-6 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O SALVADOR DO MUNDO</MainTitle>
          <SubTitle>NOS ENVIA A PROCLAMAR SUA SALVAÇÃO A TODAS AS NAÇÕES, CUMPRINDO SUA GRANDE COMISSÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A SANTA IGREJA, nº 307</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-307")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} />
        <section>
          <MainTitle>POSLÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>VERSÍCULO DO MÊS DE OUTUBRO</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>“Assim diz o Senhor: Põe em ordem a tua casa, porque morrerás e não viverás.“ Isaías 38.1b</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>CATECISMO MAIOR DE WESTMINSTER</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pergunta 126. Qual é o alcance geral do quinto mandamento?</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Resposta: O alcance geral do quinto mandamento é o cumprimento dos deveres que mutuamente temos uns para com os outros em nossas diversas relações de inferiores, superiores ou iguais.</p>
        </section>
      </SlideWithBackground>

    </RevealJsBaseElement>
  )
}
