import { useLoaderData } from 'react-router'
import { useEffect, useRef } from 'react'
import defaultConfig from '../../../config/revealjs-default.json'
import { getAssetUrlBuilder } from '../../../lib'
import { presentationSlideRemixLoader } from '../../../lib.server'
import { createSlideSectionWithBackgroundImage } from '../../../components/ipca-default-theme/DefaultSlideSection'
import { RevealJsBaseElement } from '../../../components/RevealJsBaseElement'
import { MainTitle } from '../../../components/ipca-default-theme/MainTitle'
import { SubTitle } from '../../../components/ipca-default-theme/SubTitle'
import { LiturgySteps } from '../../../components/ipca-default-theme/LiturgyStepsList'
import { LITURGY_STEP_TYPES, LiturgyStep } from '../../../components/ipca-default-theme/LiturgyStep'
import { VideoSlide } from '../../../components/ipca-default-theme/VideoSlide'

const PAGE_TITLE = "Superando Os Obstáculos Da Evangelização - 20 de Julho de 2025"
const CDN_ASSETS_LIST = [{"id":"ipcachoeirinha/cruz-wallpaper-light","extension":"jpg","resourceType":"image"},{"id":"ipcachoeirinha/santa-ceia-bg","extension":"png","resourceType":"image"}]

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
  const deckDivRef = useRef(null)
  const deckRef = useRef(null)

  useEffect(() => {
    async function loadReveal() {
      const Reveal = await import("reveal.js")

      if (deckRef.current) return
      deckRef.current = new Reveal.default(deckDivRef.current, {
        ...defaultConfig,
        width: 1700
      })
    }
    loadReveal().then(() => {
      deckRef.current.initialize()
    })
  }, [])

  const getAssetUrl = getAssetUrlBuilder(mode, assets)
  const SlideWithBackground = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/cruz-wallpaper-light"))
  const SupperSlide = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/santa-ceia-bg"))

  return (
    <RevealJsBaseElement ref={deckDivRef}>
      <SlideWithBackground>
        <MainTitle>SUPERANDO OS OBSTÁCULOS<br/>DA EVANGELIZAÇÃO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>SUPERANDO OS OBSTÁCULOS<br/>DA EVANGELIZAÇÃO</MainTitle>
            <SubTitle>SOMOS INCENTIVADOS A ADORAR AO SENHOR<br/> O NOSSO CRIADOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 96</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: GRAÇAS DOU</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Aqui diante de Ti</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Eu tenho tanto pra te agradecer</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou, graças dou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">O que me deste Senhor</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Por tantas bênçãos que eu não posso ver</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou, graças dou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Com meu coração</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">E o meu louvor e</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Com as mãos aos céus</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Louvo-te, Senhor</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou, dou, Senhor</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Sempre a Ti eu graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Sempre a Ti eu graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Tens feito tanto por mim</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Da escuridão Tua luz me tirou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou, graças dou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Por teu amor e perdão</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Por meus pecados levados na cruz</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou, graças dou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Com meu coração</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">E o meu louvor e</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Com as mãos aos céus</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Louvo-te, Senhor</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Sempre a Ti eu graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Sempre a Ti eu graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Com meu coração</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">E o meu louvor e</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Com as mãos aos céus</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Louvo-te, Senhor</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Sempre a Ti eu graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Sempre a Ti eu graças dou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>SUPERANDO OS OBSTÁCULOS<br/>DA EVANGELIZAÇÃO</MainTitle>
            <SubTitle>O EVANGELHO NOS MOSTRA QUE PECAMOS CONTRA O SENHOR, MAS EM CRISTO RECEBEMOS O SEU PERDÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 JOÃO 1.5-9</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: O AMOR DE DEUS (LOGO EU)</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 29 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graça sobre graça, recebi</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">E da plenitude, renasci</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Quando atraído, me encontrei</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">No amor de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Viva e poderosa salvação</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Luz que me alcançou na escuridão</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Todo meu pecado se apagou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">No amor de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, um pobre pecador</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, tão fraco e tão devedor</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, finito e carnal</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, diante de um Deus imortal</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graça sobre graça, recebi</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">E da plenitude, renasci</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Quando atraído, me encontrei</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">No amor de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Viva e poderosa salvação</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Luz que me alcançou na escuridão</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Todo meu pecado se apagou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">No amor de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, um pobre pecador</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, tão fraco e tão devedor</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, finito e carnal</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, diante de um Deus imortal</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">O amor de Deus é rico em benefícios</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">O amor de Deus não mede sacrifícios</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Dos braços desse amor, recebo o perdão</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Comprado por Jesus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">O amor de Deus é puro e consciente</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Como as manhãs, é firme e constante</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Que se entregou na cruz e a morte derrotou</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">O amor de Jesus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, um pobre pecador</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, tão fraco e tão devedor</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, finito e carnal</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, diante de um Deus imortal</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Logo eu, de graça recebi o amor de Deus</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">O amor de Deus</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[78px] font-bold text-left leading-normal mb-12'>PERGUNTA 29: Como nos tornamos participantes da redenção adquirida por Cristo?</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[78px] font-bold text-left leading-normal mb-12'>Tornamo-nos participantes da redenção adquirida por Cristo, pela eficaz
aplicação dela a nós pelo seu Santo Espírito.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>SUPERANDO OS OBSTÁCULOS<br/>DA EVANGELIZAÇÃO</MainTitle>
            <SubTitle>SOMOS GRATOS AO SENHOR POR PODERMOS PARTICIPAR DE SUA GRANDE MISSÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 2 CORÍNTIOS 9.6-8</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: MIL MOTIVOS</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Mil motivos para agradecer</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Mais de mil razões para louvar</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Mil canções de amor para cantar</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Jesus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Por tão grande amor que recebi</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Pela graça que me atraiu</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Por me perdoar sem merecer</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Jesus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Por regenerar meu coração</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">E me dar a paz sem fim</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Pelas grandes obras de Tuas mãos</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Jesus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou, Jesus</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou, Jesus</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou por tudo o que fizeste a mim</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Por me socorrer nas aflições</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Por saber que nunca estou só</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Pelo Teu cuidado que é sem fim</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Jesus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Ao Autor da minha salvação</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Meu amado, meu Senhor</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Seja minha grata adoração</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Jesus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou, Jesus</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou, Jesus</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou por tudo o que fizeste a mim</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Graças dou</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>SUPERANDO OS OBSTÁCULOS<br/>DA EVANGELIZAÇÃO</MainTitle>
            <SubTitle>POR MEIO DO EVANGELHO<br/>SOMOS ALIMENTADOS ESPIRITUALMENTE</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: 2 Timóteo 4.1-5 (Rev. Sérgio Lima)</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>SUPERANDO OS OBSTÁCULOS<br/>DA EVANGELIZAÇÃO</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: MUITOS VIRÃO TE LOUVAR</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">De todas as tribos, povos e raças</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Muitos virão Te louvar</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">De tantas culturas, línguas e nações</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">No tempo e no espaço, virão Te adorar!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Bendito seja sempre o Cordeiro</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Filho de Deus, Raiz de Davi</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Bendito seja o Seu Santo nome</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Cristo Jesus, presente aqui!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Remidos, comprados grande multidão</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Muitos virão Te louvar</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Povo escolhido, Teu reino e nação</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">No tempo e no espaço, virão Te adorar!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Bendito seja sempre o Cordeiro</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Filho de Deus, Raiz de Davi</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Bendito seja o Seu Santo nome</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Cristo Jesus, presente aqui!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">E a nós só nos cabe tudo dedicar</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Oferta suave ao Senhor</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Dons e talentos queremos consagrar</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">E a vida no Teu altar, pra Teu louvor!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Bendito seja sempre o Cordeiro</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Filho de Deus, Raiz de Davi</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Bendito seja o Seu Santo nome</p>
  <p className="text-black dark:text-white text-[88px] font-bold text-left leading-[1.2] mb-12">Cristo Jesus, presente aqui!</p>
</section></SlideWithBackground>


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
