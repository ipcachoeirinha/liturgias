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

const PAGE_TITLE = "Gratidão a Deus por uma igreja missionária - 28 de Dezembro de 2025"
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
        <MainTitle>GRATIDÃO A DEUS POR UMA IGREJA MISSIONÁRIA</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>GRATIDÃO A DEUS POR UMA IGREJA MISSIONÁRIA</MainTitle>
            <SubTitle>A GRATIDÃO A DEUS POR UMA IGREJA MISSIONÁRIA, NOS LEVA A UMA
ADORAÇÃO VERDADEIRA AO SENHOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: EFÉSIOS 1.3-14</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A IGREJA EM ADORAÇÃO, nº 3</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
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
            <MainTitle>GRATIDÃO A DEUS POR UMA IGREJA MISSIONÁRIA</MainTitle>
            <SubTitle>A GRATIDÃO DE UMA IGREJA MISSIONÁRIA NOS LEVA A RECONHECER
NOSSAS LUTAS CONTRA OS NOSSOS PECADOS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 15</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: PERDÃO, nº 71</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 48 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se sofrimento te causei, ó Deus!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se ao meu exemplo o fraco tropeçou,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se eu não andei nos bons caminhos teus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Perdão, Senhor!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se vão e fútil foi o meu falar,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se amor a meu irmão não demonstrei;</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se ao sofredor eu não quis ajudar,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Perdão, Senhor!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se negligente foi o meu viver,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sem me dispor a pelejar por ti,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se firme em teu trabalho eu não quis ser.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Perdão, Senhor!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Escuta, ó Deus, a minha oração</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E vem, livrar-me do pecado vil.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Renova este pobre coração!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Amém, Senhor!</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 48: O que nos é ensinado pelas palavras “diante de mim”,
no primeiro mandamento?</p>
            </section>
                        <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>As palavras, “diante de mim”, no primeiro mandamento, nos
ensinam que Deus, que vê todas as coisas, toma conhecimento e muito se
ofende do pecado de ter-se outro deus em seu lugar.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>GRATIDÃO A DEUS POR UMA IGREJA MISSIONÁRIA</MainTitle>
            <SubTitle>DEVOLVEMOS NOSSOS DÍZIMOS E OFERTAS PARA CONTRIBUIÇÃO NA
EXPANSÃO DO EVANGELHO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MALAQUIAS 3.6-12</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: SANTO PRA SEMPRE</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO DE GRATIDÃO</LiturgyStep>
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
            <MainTitle>GRATIDÃO A DEUS POR UMA IGREJA MISSIONÁRIA</MainTitle>
            <SubTitle>COM ALEGRIA RECEBEMOS O EVANGELHO PELA PREGAÇÃO DA PALAVRA
DE DEUS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 1.3-11 (Sem. Eduardo Menezes)</LiturgyStep>
            </LiturgySteps>
        </section>
        
        <section>
            <MainTitle>FILIPENSES 1.3-11</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>³ Dou graças ao meu Deus por tudo que recordo de vós,</p>
        </section>

        <section>
            <MainTitle>FILIPENSES 1.3-11</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁴ fazendo sempre, com alegria, súplicas por todos vós, em todas as minhas orações,</p>
        </section>

        <section>
            <MainTitle>FILIPENSES 1.3-11</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁵ pela vossa cooperação no evangelho, desde o primeiro dia até agora.</p>
        </section>

        <section>
            <MainTitle>FILIPENSES 1.3-11</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁶ Estou plenamente certo de que aquele que começou boa obra em vós há de completá-la até ao Dia de Cristo Jesus.</p>
        </section>

        <section>
            <MainTitle>FILIPENSES 1.3-11</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁷ Aliás, é justo que eu assim pense de todos vós, porque vos trago no coração, seja nas minhas algemas, seja na defesa e confirmação do evangelho, pois todos sois participantes da graça comigo.</p>
        </section>

        <section>
            <MainTitle>FILIPENSES 1.3-11</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁸ Pois minha testemunha é Deus, da saudade que tenho de todos vós, na terna misericórdia de Cristo Jesus.</p>
        </section>

        <section>
            <MainTitle>FILIPENSES 1.3-11</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁹ E também faço esta oração: que o vosso amor aumente mais e mais em pleno conhecimento e toda a percepção,</p>
        </section>

        <section>
            <MainTitle>FILIPENSES 1.3-11</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹⁰ para aprovardes as coisas excelentes e serdes sinceros e inculpáveis para o Dia de Cristo,</p>
        </section>

        <section>
            <MainTitle>FILIPENSES 1.3-11</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹¹ cheios do fruto de justiça, o qual é mediante Jesus Cristo, para a glória e louvor de Deus.</p>
        </section><BackgroundSlide></BackgroundSlide>
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>GRATIDÃO A DEUS POR UMA IGREJA MISSIONÁRIA</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: AFLIÇÃO E PAZ, nº 108</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se paz a mais doce me deres gozar,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Se dor a mais forte sofrer,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Oh! Seja o que for, tu me fazes saber</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que feliz com Jesus sempre sou!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sou feliz com Jesus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sou feliz com Jesus, meu Senhor! </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Embora me assalte o cruel Satanás</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E ataque com vis tentações;</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Oh! Certo eu estou, apesar de aflições,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que feliz eu serei com Jesus!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sou feliz com Jesus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sou feliz com Jesus, meu Senhor! </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Meu triste pecado, por meu Salvador</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Foi pago de um modo cabal!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Valeu-me o Senhor! Oh! Mercê sem igual!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sou feliz, graças dou a Jesus!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sou feliz com Jesus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sou feliz com Jesus, meu Senhor! </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A vinda eu anseio do meu Salvador,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Em breve virá me levar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ao céu, onde eu vou para sempre morar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com remidos na luz do Senhor!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sou feliz com Jesus,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sou feliz com Jesus, meu Senhor!</p>
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
