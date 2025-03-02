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

const PAGE_TITLE = "Vivendo como embaixadores de Cristo - 02 de Março de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-19", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-284", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-62", extension: "mp4", resourceType: "video" }
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
  const SupperSlide = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/santa-ceia-bg"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>VIVENDO COMO EMBAIXADORES DE CRISTO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO EMBAIXADORES DE CRISTO</MainTitle>
          <SubTitle>RECONHECEMOS A NOSSA RESPONSABILIDADE NA ADORAÇÃO AO NOSSO DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 96</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: REI SUBLIME, nº 19</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-19")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ó Rei sublime em majestade e glória</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sobre as milícias do celeste além,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ouve o louvor, os hinos de vitória,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Dos que de ti recebem todo o bem!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vinde, ó remidos, filhos de Deus!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cantai louvores que alcancem os céus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Dos altos céus louvor a Deus ressoa,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De gratidão ao soberano amor!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Os redimidos com fervor entoam</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O nome excelso do seu Benfeitor.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vinde, ó remidos, filhos de Deus!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cantai louvores que alcancem os céus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eterno Deus, teus filhos vês prostrados</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Perante o brilho da superna luz,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois do pecado foram resgatados,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E agora rendem glórias a Jesus!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vinde, ó remidos, filhos de Deus!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cantai louvores que alcancem os céus!</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO EMBAIXADORES DE CRISTO</MainTitle>
          <SubTitle>RECONHECEMOS A NOSSA NECESSIDADE DE CONFESSARMOS OS NOSSOS PECADOS AO NOSSO DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 JOÃO 1.5 à 2.1</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO O AMOR DE DEUS</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 08 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graça sobre graça, recebi</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E da plenitude, renasci</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quando atraído, me encontrei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Viva e poderosa salvação</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Luz que me alcançou na escuridão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo meu pecado se apagou</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, um pobre pecador</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, tão fraco e tão devedor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, finito e carnal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, diante de um Deus imortal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graça sobre graça, recebi</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E da plenitude, renasci</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quando atraído, me encontrei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Viva e poderosa salvação</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Luz que me alcançou na escuridão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo meu pecado se apagou</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, um pobre pecador</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, tão fraco e tão devedor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, finito e carnal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, diante de um Deus imortal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Deus é rico em benefícios</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Deus não mede sacrifícios</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Dos braços desse amor, recebo o perdão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Comprado por Jesus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Deus é puro e consciente</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Como as manhãs, é firme e constante</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que se entregou na cruz e a morte derrotou</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Jesus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, um pobre pecador</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, tão fraco e tão devedor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, finito e carnal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, diante de um Deus imortal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Deus</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Pergunta 08: Como Deus executa os seus decretos?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Deus executa os seus decretos nas obras da criação e da providência.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO EMBAIXADORES DE CRISTO</MainTitle>
          <SubTitle>RECONHECEMOS QUE TUDO QUE TEMOS VEM DO NOSSO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 2 CORÍNTIOS 9.6-7</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: HINO DE GRATIDÃO, nº 62</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças te dou por tudo que me deste,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Primeiro a Salvação em meu Jesus.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças te dou por tudo que fizeste</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por este pecador salvo na cruz!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças, graças, mil graças</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A ti, meu Salvador!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças, graças, mil graças</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por teu precioso amor!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu te agradeço a bênção do trabalho</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E do meu lar, que alegra o meu viver;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A correção paterna quando falho,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Provando teu amor pelo meu ser.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças, graças, mil graças</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A ti, meu Salvador!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças, graças, mil graças</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por teu precioso amor!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu te agradeço o pão de cada dia,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A água que alivia a sede dura,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E o sol que aquece a pobre gente fria,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">São bênçãos que enchem a terra de fartura.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças, graças, mil graças</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A ti, meu Salvador!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças, graças, mil graças</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por teu precioso amor!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu te agradeço, ó Pai, os meus amigos,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E os inimigos também te agradeço.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sou grato por vitórias em perigos,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E outras bênçãos que eu não mereço.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças, graças, mil graças</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A ti, meu Salvador!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graças, graças, mil graças</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por teu precioso amor!</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO EMBAIXADORES DE CRISTO</MainTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 2.19-30 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO EMBAIXADORES DE CRISTO</MainTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: OBEDIÊNCIA, nº 284</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nem sempre será para onde eu quiser</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que o Mestre me quer enviar!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">É grande a Seara a embranquecer,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Em que eu deverei trabalhar.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Se, pois, a caminhos que eu nunca segui,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Uma voz a chamar-me eu ouvir,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Direi: Meu Senhor, confiado em ti,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estou pronto ao teu mando seguir.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estou pronto a fazer o que queres, Senhor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Confiado no teu poder!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estou pronto a dizer o que queres, Senhor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre a ti pronto a obedecer!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Palavras terás de amor e perdão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que aos outros eu deva levar.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No triste caminho do vício, estão,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Perdidos que eu deva ir buscar.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Senhor, se a tua presença real</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Meu trabalho há de fortalecer,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Darei a mensagem, bem firme e leal!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estou pronto a cumprir teu querer.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estou pronto a fazer o que queres, Senhor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Confiado no teu poder!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estou pronto a dizer o que queres, Senhor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre a ti pronto a obedecer!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Um canto modesto eu quero encontrar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Na Seara do meu bom Senhor.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Enquanto for vivo eu vou trabalhar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Em prova do meu grande amor.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De ti meu sustento só dependerá,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E de tudo me hás de prover!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A tua vontade a minha será,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estou pronto a votar-te meu ser.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estou pronto a fazer o que queres, Senhor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Confiado no teu poder!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estou pronto a dizer o que queres, Senhor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre a ti pronto a obedecer!</p>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO EMBAIXADORES DE CRISTO</MainTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: OBEDIÊNCIA, nº 284</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
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
