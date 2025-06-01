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

const PAGE_TITLE = "Jesus, o nosso pescador por excelência - 01 de Junho de 2025"
const CDN_ASSETS_LIST = [{ "id": "ipcachoeirinha/cruz-wallpaper-light", "extension": "jpg", "resourceType": "image" }, { "id": "ipcachoeirinha/santa-ceia-bg", "extension": "png", "resourceType": "image" }]

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
        width: 1600
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
        <MainTitle>JESUS, O NOSSO PESCADOR POR EXCELÊNCIA</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>JESUS, O NOSSO PESCADOR POR EXCELÊNCIA</MainTitle>
          <SubTitle>JESUS, O NOSSO PESCADOR POR EXCELÊNCIA, NOS SALVOU ANTES DA FUNDAÇÃO DO MUNDO, POR ISSO CELEBRAMOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 100</LiturgyStep>
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
          <MainTitle>JESUS, O NOSSO PESCADOR POR EXCELÊNCIA</MainTitle>
          <SubTitle>CONFESSAMOS NOSSOS PECADOS EM NOME DO NOSSO SENHOR JESUS, POIS NA CRUZ ENCONTRAMOS PERDÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ISAÍAS 6.1-8</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 21 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
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
          <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 21: Quem é o Redentor dos eleitos de Deus?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>O único Redentor dos escolhidos de Deus é o Senhor Jesus Cristo, que,
            sendo o eterno Filho de Deus, se fez homem, e assim foi e continua a ser Deus e homem em duas
            naturezas distintas, e uma só pessoa, para sempre.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>JESUS, O NOSSO PESCADOR POR EXCELÊNCIA</MainTitle>
          <SubTitle>DEVOLVEMOS NOSSOS DÍZIMOS E OFERTAS, RECONHECENDO QUE TUDO QUE NÓS TEMOS PERTENCE AO NOSSO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 TIMÓTEO 6.17-19</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: DOCE NOME</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
      </SlideWithBackground>

      <SlideWithBackground><section className="bg-white dark:bg-black">
        <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12"></p>
      </section></SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>JESUS, O NOSSO PESCADOR POR EXCELÊNCIA</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Lucas 5.1-11</LiturgyStep>
          </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
      </SlideWithBackground>



      <SlideWithBackground>
        <section>
          <MainTitle>JESUS, O NOSSO PESCADOR POR EXCELÊNCIA</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: SONDA-ME</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
      </SlideWithBackground>

      <SlideWithBackground><section className="bg-white dark:bg-black">
        <p className="text-black dark:text-white text-[84px] font-bold text-left leading-none mb-12"></p>
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
