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

const PAGE_TITLE = "Vivendo à Luz do Evangelho - 23 de Fevereiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-114", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-71", extension: "mp4", resourceType: "video" }
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
        <MainTitle>VIVENDO À LUZ DO EVANGELHO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO À LUZ DO EVANGELHO</MainTitle>
          <SubTitle>VIVENDO À LUZ DO EVANGELHO, RECONHECEMOS A NOSSA RESPONSABILIDADE NA ADORAÇÃO AO NOSSO DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: EFÉSIOS 5.3-21</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: BRILHO CELESTE, nº 114</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-114")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Peregrinando por sobre os montes</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E pelos vales, sempre na luz,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cristo promete nunca deixar-me,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">"Eis-me convosco" - disse Jesus.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Brilho celeste! Brilho celeste!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Enche a minha alma, glória do Céu!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Aleluia! Sigo cantando,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Dando louvores, pois Cristo é meu!</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Se vejo sombras por toda parte,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O Salvador não hão de ocultar!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois Cristo é luz que nunca se apaga,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Bem ao seu lado sempre hei de andar.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Brilho celeste! Brilho celeste!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Enche a minha alma, glória do Céu!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Aleluia! Sigo cantando,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Dando louvores, pois Cristo é meu!</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A luz bendita me vai guiando</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Em meu caminho para a Mansão;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mais e mais perto seguindo o Mestre,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Possuo o gozo da salvação.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Brilho celeste! Brilho celeste!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Enche a minha alma, glória do Céu!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Aleluia! Sigo cantando,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Dando louvores, pois Cristo é meu!</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO À LUZ DO EVANGELHO</MainTitle>
          <SubTitle>VIVENDO À LUZ DO EVANGELHO, RECONHECEMOS A NOSSA NECESSIDADE DE CONFESSARMOS OS NOSSOS PECADOS AO NOSSO DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MATEUS 5.13-16</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CONTRIÇÃO E CONFISSÃO, nº 71</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 07 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-71")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se sofrimento te causei, ó Deus!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se ao meu exemplo o fraco tropeçou,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se eu não andei nos bons caminhos teus,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Perdão, Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se vão e fútil foi o meu falar,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se amor a meu irmão não demonstrei;
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se ao sofredor eu não quis ajudar,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Perdão, Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se negligente foi o meu viver,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sem me dispor a pelejar por ti,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se firme em teu trabalho eu não quis ser.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Perdão, Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Escuta, ó Deus, a minha oração
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E vem livrar-me do pecado vil.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Renova este pobre coração!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Amém, Senhor!
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Pergunta 07: O que são os decretos de Deus?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Os decretos de Deus são o seu eterno propósito, segundo o conselho da sua vontade, pelo qual, para a sua própria glória, ele preordenou tudo o que acontece.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO À LUZ DO EVANGELHO</MainTitle>
          <SubTitle>VIVENDO À LUZ DO EVANGELHO, RECONHECEMOS QUE TUDO QUE TEMOS VEM DO NOSSO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 2 CORÍNTIOS 9.6-7</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO VIM PARA ADORAR-TE</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Luz do mundo vieste à terra</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pra que eu pudesse te ver</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tua beleza me leva a adorar-te</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quero contigo viver</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para adorar-te</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para prostrar-me</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para dizer que És meu Deus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">És totalmente amável</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Totalmente digno</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Tão maravilhoso para mim</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eterno Rei exaltado nas alturas</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glorioso nos céus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Humilde vieste à terra que criaste</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por amor, pobre se fez</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para adorar-te</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para prostrar-me</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para dizer que És meu Deus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">És totalmente amável</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Totalmente digno</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Tão maravilhoso para mim</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para adorar-te</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para prostrar-me</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para dizer que És meu Deus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">És totalmente amável</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Totalmente digno</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Tão maravilhoso para mim</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu nunca saberei o preço</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Dos meus pecados lá na cruz</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu nunca saberei o preço</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Dos meus pecados lá na cruz</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para adorar-te</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para prostrar-me</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vim para dizer que És meu Deus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">És totalmente amável</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Totalmente digno</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Tão maravilhoso para mim</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO À LUZ DO EVANGELHO</MainTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 2.12-18 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO À LUZ DO EVANGELHO</MainTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO SONDA-ME</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
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
