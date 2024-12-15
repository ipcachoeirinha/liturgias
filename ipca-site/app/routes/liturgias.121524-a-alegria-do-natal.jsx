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

const PAGE_TITLE = "A Alegria do Natal - 15 de Dezembro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/querido-visitante", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/psola-isaias-53-playback1", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/vporcristo-doce-nome-playback1", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-239", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-230", extension: "mp4", resourceType: "video" },
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
        <MainTitle>A ALEGRIA DO NATAL</MainTitle>
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
          <MainTitle>A ALEGRIA DO NATAL</MainTitle>
          <SubTitle>FAZ TRANSBORDAR DE DESEJOS PIEDOSOS O CORAÇÃO DO POVO DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MATEUS 2.1-11</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: ADORAÇÃO, nº 230</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-230")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA DO NATAL</MainTitle>
          <SubTitle>É A PRINCIPAL RAZÃO DE VIVER PARA O POVO DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ISAÍAS 9.1-7</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO ISAIS 53 - PROJETO SOLA</LiturgyStep>
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
          <MainTitle>A ALEGRIA DO NATAL</MainTitle>
          <SubTitle>É A PRINCIPAL RAZÃO DE VIVER PARA O POVO DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ISAÍAS 9.1-7</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICO ISAIS 53 - PROJETO SOLA</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/psola-isaias-53-playback1")} />
      </SlideWithBackground>

      <SlideWithBackground>
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
          <MainTitle>A ALEGRIA DO NATAL</MainTitle>
          <SubTitle>ESTÁ ACIMA DE QUALQUER OUTRO TIPO DE ALEGRIA PARA O POVO DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: JOÃO 16.20-22</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>RECEPÇÃO DE MEMBROS</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO DOCE NOME - VENCEDORES POR CRISTO</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/vporcristo-doce-nome-playback1")} />
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
          <MainTitle>A ALEGRIA DO NATAL</MainTitle>
          <SubTitle>ESTÁ FUNDAMENTADA NAQUILO QUE O SENHOR PROMETEU EM SUA PALAVRA AO POVO DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Lucas 2.21-25 (Rev. Arnaldo Matias)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA DO NATAL</MainTitle>
          <SubTitle>PERMANECERÁ VIVA TODOS OS DIAS NO CORAÇÃO DO POVO DE DEUS</SubTitle>

          <LiturgySteps>
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
