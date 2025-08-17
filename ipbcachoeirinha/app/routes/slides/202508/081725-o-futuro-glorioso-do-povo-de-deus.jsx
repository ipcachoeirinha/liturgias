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

const PAGE_TITLE = "O Futuro Glorioso do Povo de Deus - 17 de Agosto de 2025"
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
        <MainTitle>O FUTURO GLORIOSO DO POVO DE DEUS</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>O FUTURO GLORIOSO DO POVO DE DEUS</MainTitle>
            <SubTitle>DESFRUTAMOS DO FUTURO GLORIOSO DA ETERNIDADE QUANDO NOS REUNIMOS PARA ADORAR AO SENHOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ISAIAS 43.1-13</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: VENCENDO VEM JESUS, nº 147</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Quando a alma sequiosa</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Chega a voz do Salvador,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eis que logo reconhece</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ser Jesus o seu Senhor!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas se o "eu" quer levantar-se</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E mostrar algum valor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vencendo vem Jesus!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glória, glória, aleluia!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glória, glória, aleluia!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glória, glória, aleluia!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vencendo vem Jesus! </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Neste mundo havemos, crentes,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">De ter sempre algum pesar!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mesmo lutas, dissabores,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nossa paz vêm perturbar.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas se o mal nos ameaça</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">De a alegria nos roubar,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vencendo vem Jesus!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glória, glória, aleluia!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glória, glória, aleluia!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glória, glória, aleluia!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vencendo vem Jesus!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Da vaidade, fiéis servos</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Lutam por fazer-nos seus!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Muitas vezes nos assaltam</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Os modernos fariseus.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas se alguém procura ver-nos</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sem a graça do bom Deus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vencendo vem Jesus!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glória, glória, aleluia!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glória, glória, aleluia!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Glória, glória, aleluia!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Vencendo vem Jesus!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>O FUTURO GLORIOSO DO POVO DE DEUS</MainTitle>
            <SubTitle>MESMO EM UM MUNDO CAÍDO PODEMOS TER A CERTEZA QUE O NOSSO DEUS É CONOSCO, NADA NESTE MUNDO PODE NOS SEPARAR DESSE GRANDE AMOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ROMANOS 8.31-39</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: EU ME RENDO AOS TEUS PÉS</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 33 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Ti eu vou clamar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois tudo vem de Ti</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E tudo está em Ti</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Por Ti vou caminhar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tu és a direção</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Sol a me guiar</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tudo pode passar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu amor jamais me deixará</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sempre há de existir novo amanhã</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Preparado pra mim</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Ti eu vou clamar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois tudo vem de Ti</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E tudo está em Ti</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Por Ti vou caminhar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tu és a direção</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Sol a me guiar</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tudo pode passar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu amor jamais me deixará</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sempre há de existir novo amanhã</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Preparado pra mim</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu me rendo aos Teus pés</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">És tudo que eu preciso pra viver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu me lanço aos Teus braços</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Onde encontro meu refúgio</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Jesus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eis-me aqui</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Jesus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eis-me aqui</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A Ti eu vou clamar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois tudo vem de Ti</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E tudo está em Ti</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Por Ti vou caminhar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tu és a direção</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Sol a me guiar</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tudo pode passar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu amor jamais me deixará</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sempre há de existir novo amanhã</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Preparado pra mim</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Preparado pra mim</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu me rendo aos Teus pés</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">És tudo que eu preciso pra viver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu me lanço aos Teus braços</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Onde encontro meu refúgio</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu me rendo aos Teus pés</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">És tudo que eu preciso pra viver</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu me lanço aos Teus braços</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Onde encontro meu refúgio</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Jesus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eis-me aqui</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Jesus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eis-me aqui</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 33: O que é justificação?</p>
            </section>
                        <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>Justificação é um ato da livre graça de Deus, no qual ele perdoa todos os
nossos pecados e nos aceita como justos diante Dele, somente por causa da justiça de
Cristo a nós imputada, e recebida só pela fé.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>O FUTURO GLORIOSO DO POVO DE DEUS</MainTitle>
            <SubTitle>SOMOS GRATOS AO SENHOR POR PODERMOS PARTICIPAR DE SUA GRANDE MISSÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: PROVÉRBIOS 3.9-10</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: SANTO PRA SEMPRE</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">As muitas gerações</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Rendidas em louvor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cantando ao Cordeiro uma canção</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Os que em Ti se foram</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E os que hão de crer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cantando ao Cordeiro uma canção</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é o mais alto</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é o maior</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é sobre todos</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Os tronos e domínios</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Governos e poderes</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é sobre todos</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E os anjos clamam, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Toda criação, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Exaltado És, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Santo pra sempre</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Quem foi perdoado</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E redimido foi</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cante ao Cordeiro uma canção</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Aquele que é livre</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E leva o Seu nome</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cante ao Cordeiro uma canção</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cantaremos para sempre, amém</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E os anjos clamam, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Toda criação, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Exaltado És, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Santo pra sempre</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Teu povo canta, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sim, ao Rei dos reis, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tu sempre serás, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Santo pra sempre</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é o mais alto</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é o maior</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é sobre todos</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Os tronos e domínios</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Governos e poderes</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é sobre todos</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é o mais alto</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é o maior</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é sobre todos,</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Os tronos e domínios</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Governos e poderes</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Teu nome é sobre todos</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E os anjos clamam, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Toda criação, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Exaltado És, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Santo pra sempre</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O Teu povo canta, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sim, ao Rei dos Reis, Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tu sempre serás Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Santo pra sempre</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tu sempre serás Santo</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Santo pra sempre</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>O FUTURO GLORIOSO DO POVO DE DEUS</MainTitle>
            <SubTitle>POR MEIO DO EVANGELHO SOMOS ALIMENTADOS ESPIRITUALMENTE</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Miquéias 4.1-13 (Rev. Marcos Santana)</LiturgyStep>
            </LiturgySteps>
        </section>
        
        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹ Mas, nos últimos dias, acontecerá que o monte da Casa do Senhor será estabelecido no cimo dos montes e se elevará sobre os outeiros, e para ele afluirão os povos.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>² Irão muitas nações e dirão: Vinde, e subamos ao monte do Senhor e à casa do Deus de Jacó, para que nos ensine os seus caminhos, e andemos pelas suas veredas; porque de Sião procederá a lei, e a palavra do Senhor, de Jerusalém.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>³ Ele julgará entre muitos povos e corrigirá nações poderosas e longínquas; estes converterão as suas espadas em relhas de arados e suas lanças, em podadeiras; uma nação não levantará a espada contra outra nação, nem aprenderão mais a guerra.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁴ Mas assentar-se-á cada um debaixo da sua videira e debaixo da sua figueira, e não haverá quem os espante, porque a boca do Senhor dos Exércitos o disse.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁵ Porque todos os povos andam, cada um em nome do seu deus; mas, quanto a nós, andaremos em o nome do Senhor, nosso Deus, para todo o sempre.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁶ Naquele dia, diz o Senhor, congregarei os que coxeiam e recolherei os que foram expulsos e os que eu afligira.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁷ Dos que coxeiam farei a parte restante e dos que foram arrojados para longe, uma poderosa nação; e o Senhor reinará sobre eles no monte Sião, desde agora e para sempre.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁸ A ti, ó torre do rebanho, monte da filha de Sião, a ti virá; sim, virá o primeiro domínio, o reino da filha de Jerusalém.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁹ Agora, por que tamanho grito? Não há rei em ti? Pereceu o teu conselheiro? Apoderou-se de ti a dor como da que está para dar à luz?</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹⁰ Sofre dores e esforça-te, ó filha de Sião, como a que está para dar à luz, porque, agora, sairás da cidade, e habitarás no campo, e virás até à Babilônia; ali, porém, serás libertada; ali, te remirá o Senhor das mãos dos teus inimigos.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹¹ Acham-se, agora, congregadas muitas nações contra ti, que dizem: Seja profanada, e vejam os nossos olhos o seu desejo sobre Sião.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹² Mas não sabem os pensamentos do Senhor, nem lhe entendem o plano que as ajuntou como feixes na eira.</p>
        </section>

        <section>
            <MainTitle>MIQUÉIAS 4.1-13</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹³ Levanta-te e debulha, ó filha de Sião, porque farei de ferro o teu chifre e de bronze, as tuas unhas; e esmiuçarás a muitos povos, e o seu ganho será dedicado ao Senhor, e os seus bens, ao Senhor de toda a terra. </p>
        </section><BackgroundSlide></BackgroundSlide>
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>O FUTURO GLORIOSO DO POVO DE DEUS</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: AO DEUS GRANDIOSO, nº 26</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Senhor meu Deus, quando eu maravilhado</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Os grandes feitos vejo da tua mão</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Estrelas, mundos e trovões rolando,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A proclamar teu nome na amplidão,</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Canta minh'alma, então, a ti, Senhor:</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grandioso és tu, grandioso és tu!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Canta minh'alma, então, a ti, Senhor:</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grandioso és tu, grandioso és tu! </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Quando atravesso bosques e florestas</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ouvindo, à brisa, pássaros cantar,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ou vejo, além, montanhas altaneiras</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O teu poder e glória proclamar.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Canta minh'alma, então, a ti, Senhor:</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grandioso és tu, grandioso és tu!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Canta minh'alma, então, a ti, Senhor:</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grandioso és tu, grandioso és tu! </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Quando percebo que na cruz maldita</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Por teu amor Jesus morreu por mim</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E me livrou do jugo do pecado,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ali vertendo sangue carmesim.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Canta minh'alma, então, a ti, Senhor:</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grandioso és tu, grandioso és tu!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Canta minh'alma, então, a ti, Senhor:</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grandioso és tu, grandioso és tu! </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Quando, afinal, em resplendor e glória,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Jesus abrir as portas da mansão,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu hei de estar de joelhos entre os santos,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Na mais humilde e vera a adoração,</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E então cantar eternamente ali:</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grandioso és tu, grandioso és tu!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E então cantar eternamente ali:</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Grandioso és tu, grandioso és tu!</p>
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
