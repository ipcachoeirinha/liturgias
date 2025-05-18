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

const PAGE_TITLE = "Uma Família Abençoada por Deus - 18 de Maio de 2025"
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
        <MainTitle>UMA FAMÍLIA ABENÇOADA POR DEUS</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>UMA FAMÍLIA ABENÇOADA POR DEUS</MainTitle>
            <SubTitle>UMA FAMÍLIA ABENÇOADA POR DEUS TEM DEUS COMO SEU MOTIVO DE ADORAÇÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 63</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TRINDADE SANTÍSSIMA, nº 11</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Deus Onipotente!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Louvam nossas vozes teu nome com fervor!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Justo e compassivo!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">És Deus Triúno, Excelso Criador!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Nós, os pecadores,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Não podemos ver tua glória sem temor.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Tu somente és Santo! Só tu és perfeito,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Deus Soberano, imenso em teu amor.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Todos os remidos,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Juntos com os anjos, proclamam teu louvor!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Antes de formar-se o firmamento e a terra</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Eras, e sempre és, e hás de ser Senhor!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Deus Onipotente!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Tuas obras louvam teu nome com fervor.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Justo e compassivo!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Deus Soberano, Excelso Criador! Amém.</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>UMA FAMÍLIA ABENÇOADA POR DEUS</MainTitle>
            <SubTitle>UMA FAMÍLIA ABENÇOADA POR DEUS RECONHECE SEUS PECADOS E CONFESSAM AO SENHOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 86</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 20 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Sonda-me, ó Deus, pois vês meu coração!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Prova-me, ó Pai, te peço em oração.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">De todo o mal liberta-me, Senhor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Até da transgressão que oculta for.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Vem me lavar dos vis pecados meus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Conforme prometeste, meu bom Deus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Faze-me arder e consumir de amor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Pois quero te magnificar, Senhor.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Todo meu ser não considero meu;</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Quero gastá-lo no serviço teu.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Minhas paixões Tu podes dominar,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Pois Tu, Senhor, vieste em mim morar.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Lá do alto céu o avivamento vem,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">E que comece em mim seguindo além.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">O teu poder, as bênçãos, teu favor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Concede aos que são teus, ó Pai de amor. Amém.</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 20: Deus deixou todo o gênero humano perecer no estado de pecado e miséria?</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>Tendo Deus, unicamente pela sua boa vontade, desde toda a eternidade,
escolhido alguns para a vida eterna, entrou com eles em um pacto de graça, para os livrar
do estado de pecado e miséria, e os levar a um estado de salvação, por meio de um
Redentor</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>UMA FAMÍLIA ABENÇOADA POR DEUS</MainTitle>
            <SubTitle>UMA FAMÍLIA ABENÇOADA POR DEUS ADORA AO SENHOR COM SEUS DÍZIMOS E OFERTAS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 2 CORÍNTIOS 9.6-9</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: SALMO 128</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Bem-aventurado aquele que temor tem ao Senhor </p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">E que anda nos caminhos, os caminhos de Javé</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Do labor das tuas mãos o teu pão granjearás </p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">E feliz, então, serás, e o bem te seguirá </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Tua esposa, em tua casa, é videira a florescer </p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Quais rebentos de oliveira, os teus filhos brotarão</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Ao redor da tua mesa, todos juntos estarão </p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Eis a benção que alcança quem assim teme ao Senhor </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Que o Senhor te abençoe desde o monte de Sião </p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">E, em Jerusalém, tu vejas todo o bem que haverá </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Pelo tempo dos teus dias, pelos anos do viver </p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Filhos dos teus filhos vejas. Seja a paz sobre Israel!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>UMA FAMÍLIA ABENÇOADA POR DEUS</MainTitle>
            <SubTitle>UMA FAMÍLIA ABENÇOADA POR DEUS OUVE A SUA PALAVRA E A COLOCA EM PRÁTICA</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Êxodo 20.12 – Efésios 5.22-33</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>UMA FAMÍLIA ABENÇOADA POR DEUS</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: ALTO PREÇO</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Eu sei que foi pago um alto preço</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Para que contigo eu fosse um, meu irmão</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Quando Jesus derramou Sua vida</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Ele pensava em ti, Ele pensava em mim</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Pensava em nós</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">E nos via redimidos por Seu sangue</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Lutando o bom combate do Senhor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Lado a lado trabalhando</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Sua igreja edificando</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">E rompendo as barreiras pelo amor</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">E na força do Espírito Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Nós proclamamos aqui</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Que já foi pago o preço de sermos</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Um só coração no Senhor</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">E por mais que as trevas militem</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">E nos tentem separar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Com os nossos olhos em Cristo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12">Unidos iremos andar.</p>
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
