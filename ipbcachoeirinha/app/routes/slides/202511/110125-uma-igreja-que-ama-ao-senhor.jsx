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

const PAGE_TITLE = "Uma Igreja que ama ao Senhor - 01 de Novembro de 2025"
const CDN_ASSETS_LIST = [{"id":"ipcachoeirinha/cruz-wallpaper-light","extension":"jpg","resourceType":"image"},{"id":"ipcachoeirinha/santa-ceia-bg","extension":"png","resourceType":"image"},{"id":"ipcachoeirinha/background","extension":"png","resourceType":"image"}]

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
  const BackgroundSlide = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/background"))

  return (
    <RevealJsBaseElement ref={deckDivRef}>
      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE AMA AO SENHOR</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE AMA AO SENHOR</MainTitle>
            <SubTitle>LOUVA-O POR CAUSA DO SEU AMOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: NAUM 1.7</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: JEREMIAS 31.3</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: ELE É EXALTADO</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é exaltado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Rei é exaltado nos céus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu o louvarei</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é exaltado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pra sempre exaltado</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Seu nome louvarei</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é o Senhor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sua verdade vai sempre reinar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Terra e céus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glorificam seu Santo nome</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é exaltado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Rei é exaltado nos céus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é exaltado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Rei é exaltado nos céus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu o louvarei</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é exaltado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pra sempre exaltado</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Seu nome louvarei</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é o Senhor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sua verdade vai sempre reinar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Terra e céus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glorificam seu Santo nome</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é exaltado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Rei é exaltado nos céus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é o Senhor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sua verdade vai sempre reinar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Terra e céus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glorificam seu Santo nome</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ele é exaltado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Rei é exaltado nos céus</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE AMA AO SENHOR</MainTitle>
            <SubTitle>CLAMA POR DIVINO FAVOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: OBADIAS 1.11-14</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sonda-me, ó Deus, pois vês meu coração!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Prova-me, ó Pai, te peço em oração.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">De todo o mal liberta-me, Senhor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Até da transgressão que oculta for.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vem me lavar dos vis pecados meus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Conforme prometeste, meu bom Deus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Faze-me arder e consumir de amor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois quero te magnificar, Senhor.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Todo meu ser não considero meu;</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Quero gastá-lo no serviço teu.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Minhas paixões Tu podes dominar,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois Tu, Senhor, vieste em mim morar.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Lá do alto céu o avivamento vem,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E que comece em mim seguindo além.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O teu poder, as bênçãos, teu favor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Concede aos que são teus, ó Pai de amor. Amém.</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE AMA AO SENHOR</MainTitle>
            <SubTitle>AGRADECE COM ALEGRE LOUVOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 PEDRO 1.3-9</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: GRANDE É O SENHOR</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO DE GRATIDÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grande é o Senhor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E mui digno de louvor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Na cidade do nosso Deus Seu Santo monte</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Alegria de toda terra</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grande é o Senhor em quem nós temos a vitória</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que nos ajuda contra o inimigo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Por isso diante dEle nos prostramos</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Queremos o Seu nome engrandecer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E agradecer-Te por tua obra em nossas vidas</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Confiamos em Teu infinito amor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois só Tu és o Deus eterno</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sobre toda terra e céus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Queremos o Seu nome engrandecer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E agradecer-Te por tua obra em nossas vidas</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Confiamos em Teu infinito amor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois só Tu és o Deus eterno</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sobre toda terra e céus</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE AMA AO SENHOR</MainTitle>
            <SubTitle>ATENTA À PALAVRA COM FERVOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Cânticos 1.2-4 (Ev. João Gabriel Machado)</LiturgyStep>
            </LiturgySteps>
        </section>
        
        <section>
            <MainTitle>CÂNTICOS 1.2-4</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>² Beija-me com os beijos de tua boca;<br/>porque melhor é o teu amor do que o vinho.</p>
        </section>

        <section>
            <MainTitle>CÂNTICOS 1.2-4</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>³ Suave é o aroma dos teus unguentos,<br/>como unguento derramado é o teu nome;<br/>por isso, as donzelas te amam.</p>
        </section>

        <section>
            <MainTitle>CÂNTICOS 1.2-4</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁴ Leva-me após ti, apressemo-nos.<br/>O rei me introduziu nas suas recâmaras.</p>
        </section><BackgroundSlide></BackgroundSlide>
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE AMA AO SENHOR</MainTitle>
            <SubTitle>VIVE NA PALAVRA COM VIGOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A IGREJA EM ADORAÇÃO, nº 3</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eterno Pai, Teu povo congregado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Humilde, entoa o Teu louvor aqui!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">No dia para o culto reservado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com esperança olhamos para Ti.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu santo livro, ó grande Deus, tomamos</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com fé singela e reverente amor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E, como atentos filhos, procuramos</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ciência na Palavra do Senhor.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Jesus, Aos Teus benditos pés sentados,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Queremos Teu conselho receber!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E, sendo por Ti mesmo doutrinados,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">De mais em mais na santa fé crescer.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Do mundo e seus encargos retirados,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Queremos descansar em Ti, Senhor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mirando os ricos bens entesourados</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Na plenitude do Teu vasto amor.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ensina aos Teus, Espírito Divino,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dissipa as trevas destes corações!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E, com a luz do Teu celeste ensino,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vem aclarar as Tuas instruções.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Aviva em nós a forças da memória,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois sempre mais queremos conhecer.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Rei dos céus, o Cristo, cuja glória</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Enleva os santos anjos de prazer.</p>
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
