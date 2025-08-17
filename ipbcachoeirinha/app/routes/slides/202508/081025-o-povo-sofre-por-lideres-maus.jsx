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

const PAGE_TITLE = "O Povo Sofre Por Líderes Maus - 10 de Agosto de 2025"
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
        <MainTitle>O POVO SOFRE POR LÍDERES MAUS</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>O POVO SOFRE POR LÍDERES MAUS</MainTitle>
            <SubTitle>SOMOS CONVOCADOS A ADORAR AO SENHOR INDEPENDENTE DAS CIRCUNSTÂNCIAS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 46</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CASTELO FORTE, nº 155</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Castelo forte é nosso Deus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Espada e bom escudo!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com seu poder defende os seus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Em todo transe agudo.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com fúria pertinaz</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Persegue Satanás</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com ânimo cruel!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mui forte é o Deus fiel,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Igual não há na terra.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A força do homem nada faz,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sozinho está perdido!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas nosso Deus socorro traz</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Em seu Filho escolhido.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sabeis quem é? Jesus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O que venceu na cruz,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Senhor dos altos céus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E sendo o próprio Deus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Triunfa na batalha.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se nos quisessem devorar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Demônios não contados,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Não nos iriam derrotar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nem ver-nos assustados.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O príncipe do mal,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com seu plano infernal,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Já condenado está!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vencido cairá</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Por uma só palavra.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">De Deus o verbo ficará,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sabemos com certeza,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E nada nos assustará</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com Cristo por defesa!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se temos de perder</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Família, bens, prazer,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se tudo se acabar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E a morte enfim chegar,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com ele reinaremos!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>O POVO SOFRE POR LÍDERES MAUS</MainTitle>
            <SubTitle>PODEMOS SOFRER COM O CASTIGO DE LÍDERES MAUS, MAS EM CRISTO ESPERAMOS A JUSTIÇA E RESTAURAÇÃO DO SEU POVO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 PEDRO 4.12-19</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: VASOS QUEBRADOS</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 32 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Em pedaços</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Minh'alma estava</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas por Sua graça</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Refeito sou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sem nada em troca</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Fui resgatado</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Me libertou</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Me libertou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sublime graça</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Doce o som</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que salva o pecador</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Fui cego e agora</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Posso ver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Perdido e me encontrou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Agora posso ver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Posso ver Seus olhos de amor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pra que eu possa viver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sua vida Ele entregou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mesmo com falhas</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E com fraquezas</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Teu tesouro</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Em mim está</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Minha vida entrego</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Serei Teu vaso</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pro mundo ver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Teu poder</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sublime graça</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Doce o som</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que salva o pecador</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Fui cego e agora</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Posso ver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Perdido e me encontrou</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Agora posso ver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Posso ver Seus olhos de amor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pra que eu possa viver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sua vida Ele entregou</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 32: Que bênçãos gozam nesta vida aqueles que são eficazmente chamados?</p>
            </section>
                        <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>Aqueles que são eficazmente chamados, gozam, nesta vida, da justificação, adoção e santificação, e das diversas bênçãos que acompanham estas graças ou delas procedem.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>O POVO SOFRE POR LÍDERES MAUS</MainTitle>
            <SubTitle>SOMOS GRATOS AO SENHOR POR PODERMOS PARTICIPAR DE SUA GRANDE MISSÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ATOS 2.46-47</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: O GRANDE AMOR DE DEUS, nº 42</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Deus demos glória por seu grande amor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Filho bendito por nós todos deu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E graça concede ao mais vil pecador,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Abrindo-lhe a porta de entrada no céu.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Exultai! Exultai! Vinde todos louvar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Jesus, Salvador, a Jesus, Redentor!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Deus demos glória, porquanto do céu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Seu Filho bendito por nós todos deu!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Oh! Graça real! Foi assim que Jesus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Morrendo, seu sangue por nós derramou.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Herança nos céus, com os santos em luz,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Legou-nos aquele que o preço pagou.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Exultai! Exultai! Vinde todos louvar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Jesus, Salvador, a Jesus, Redentor!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Deus demos glória, porquanto do céu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Seu Filho bendito por nós todos deu!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tal prova de amor nos persuade a confiar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nos merecimentos do Filho de Deus!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E quem, a Jesus, pela fé se entregar,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vai vê-lo na glória eterna dos céus. </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Exultai! Exultai! Vinde todos louvar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Jesus, Salvador, a Jesus, Redentor!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Deus demos glória, porquanto do céu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Seu Filho bendito por nós todos deu!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>O POVO SOFRE POR LÍDERES MAUS</MainTitle>
            <SubTitle>POR MEIO DO EVANGELHO SOMOS ALIMENTADOS ESPIRITUALMENTE</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Miquéias 3.1-12 (Rev. Marcos Santana)</LiturgyStep>
            </LiturgySteps>
        </section>
        
        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹ Disse eu: Ouvi, agora, vós, cabeças de Jacó, e vós, chefes da casa de Israel: Não é a vós outros que pertence saber o juízo?</p>

        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>² Os que aborreceis o bem e amais o mal; e deles arrancais a pele e a carne de cima dos seus ossos;</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>³ que comeis a carne do meu povo, e lhes arrancais a pele, e lhes esmiuçais os ossos, e os repartis como para a panela e como carne no meio do caldeirão?</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁴ Então, chamarão ao Senhor, mas não os ouvirá; antes, esconderá deles a sua face, naquele tempo, visto que eles fizeram mal nas suas obras.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁵ Assim diz o Senhor acerca dos profetas que fazem errar o meu povo e que clamam: Paz, quando têm o que mastigar, mas apregoam guerra santa contra aqueles que nada lhes metem na boca.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁶ Portanto, se vos fará noite sem visão, e tereis treva sem adivinhação; pôr-se-á o sol sobre os profetas, e sobre eles se enegrecerá o dia.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁷ Os videntes se envergonharão, e os adivinhadores se confundirão; sim, todos eles cobrirão o seu bigode, porque não há resposta de Deus.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁸ Eu, porém, estou cheio do poder do Espírito do Senhor, cheio de juízo e de força, para declarar a Jacó a sua transgressão e a Israel, o seu pecado.</p>

        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁹ Ouvi, agora, isto, vós, cabeças de Jacó, e vós, chefes da casa de Israel, que abominais o juízo, e perverteis tudo o que é direito,</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹⁰ e edificais a Sião com sangue e a Jerusalém, com perversidade.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹¹ Os seus cabeças dão as sentenças por suborno, os seus sacerdotes ensinam por interesse, e os seus profetas adivinham por dinheiro; e ainda se encostam ao Senhor, dizendo: Não está o Senhor no meio de nós? Nenhum mal nos sobrevirá.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 3.1-12</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹² Portanto, por causa de vós, Sião será lavrada como um campo, e Jerusalém se tornará em montões de ruínas, e o monte do templo, numa colina coberta de mato.</p>
        </section><BackgroundSlide></BackgroundSlide>
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>O POVO SOFRE POR LÍDERES MAUS</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: CORAÇÃO IGUAL AO TEU</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se Tu olhares, Senhor, pra dentro de mim</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nada encontrarás de bom</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas um desejo eu tenho de ser transformado</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Preciso tanto do Teu perdão</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um novo coração</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu, meu Mestre</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Coração disposto à obedecer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cumprir todo o Teu querer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se Tu olhares, Senhor, pra dentro de mim</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nada encontrarás de bom</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas um desejo eu tenho de ser transformado</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Preciso tanto do Teu perdão</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um novo coração</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu, meu Mestre</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Coração disposto à obedecer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cumprir todo o Teu querer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu, meu Mestre</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Coração disposto à obedecer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cumprir todo o Teu querer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ensina-me a amar o meu irmão</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A olhar com Teus olhos</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Perdoar com o Teu perdão</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Enche-me com Teu Espírito</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Endireita os meus caminhos</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ó Deus, dá-me um novo coração</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Enche-me com Teu Espírito</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Endireita os meus caminhos</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ó Deus, dá-me um novo coração</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu, meu Mestre</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Coração disposto à obedecer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cumprir todo o Teu querer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu, meu Mestre</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Coração disposto à obedecer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cumprir todo o Teu querer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Coração disposto à obedecer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cumprir todo o Teu querer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Dá-me um coração igual ao Teu</p>
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
