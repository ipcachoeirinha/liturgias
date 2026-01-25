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

const PAGE_TITLE = "Uma igreja que foge da aparência do mal - 25 de Janeiro de 2026"
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
        <MainTitle>UMA IGREJA QUE FOGE DA APARÊNCIA DO MAL</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE FOGE DA APARÊNCIA DO MAL</MainTitle>
            <SubTitle>FUGIMOS DA APARÊNCIA DO MAL QUANDO NOS ACHEGAMOS AO SENHOR
COM UM CORAÇÃO HUMILDE PARA ADORÁ-LO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 PEDRO 1.6-7</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SEMPRE VENCENDO, nº 49</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sempre vencendo, mui vitorioso,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cristo Jesus, o Senhor!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">É Soberano, Chefe bendito,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Em tudo ele é vencedor!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ei-lo supremo, guiando,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com seu imenso poder!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Todos avante, pois, crentes,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Todos lutar e vencer.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Não é dos fortes a vitória,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nem dos que correm melhor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas dos fiéis e sinceros</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que seguem junto ao Senhor</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sempre vencendo, mui vitorioso,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cristo Jesus, o Senhor!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eis suas hostes inumeráveis,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Seu grande império e fulgor;</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Em seu governo demonstra</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cuidado e amor sem igual;</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sempre nos ama e protege</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Com seu poder eternal</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Não é dos fortes a vitória,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nem dos que correm melhor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas dos fiéis e sinceros</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que seguem junto ao Senhor</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sempre vencendo, mui vitorioso,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cristo Jesus, o Senhor!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Reis e vassalos, servos e chefes</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Querem também seu favor.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Senhor, desejo e te imploro</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que me permitas lutar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sempre ao teu lado, invencível,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Até meus dias findar!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Não é dos fortes a vitória,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nem dos que correm melhor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas dos fiéis e sinceros</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que seguem junto ao Senhor</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE FOGE DA APARÊNCIA DO MAL</MainTitle>
            <SubTitle>FUGIMOS DA APARÊNCIA DO MAL QUANDO RECONHECEMOS NOSSA
PECAMINOSIDADE, MAS POR CAUSA DE CRISTO SOMOS PERDOADOS E
TRANSFORMADOS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: GÊNESIS 3.1-15</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SINCERIDADE, nº 74</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Jesus, Senhor, me achego a ti,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Tua ira santa mereci;</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O teu favor estende aqui!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Aceita um pecador!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu venho como estou!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sim, venho como estou!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Porque Jesus por mim morreu,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu venho como estou!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">As minhas culpas grandes são,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas Tu, que não morreste em vão,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Me podes conceder perdão!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Aceita um pecador!</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu venho como estou!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sim, venho como estou!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Porque Jesus por mim morreu,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu venho como estou! </p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Oh! Vem agora Salvador,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Livrar-me por teu grande amor,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois Tu, Jesus, és meu Senhor;</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Aceita um pecador.</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu venho como estou!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Sim, venho como estou!</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Porque Jesus por mim morreu,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu venho como estou!</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 52: Quais são as razões anexas ao segundo mandamento?</p>
            </section>
                        <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>As razões anexas ao segundo mandamento são a soberania de Deus sobre
nós, o seu direito de propriedade sobre nós e o zelo que ele tem pelo seu culto.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE FOGE DA APARÊNCIA DO MAL</MainTitle>
            <SubTitle>FUGIMOS DA APARÊNCIA DO MAL E RECONHECEMOS NOSSA TOTAL
DEPENDÊNCIA EM DEUS, POR ISSO SOMOS GRATOS COM TUDO QUE TEMOS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 1 CRÔNICAS 29.11-14</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: SALMO 15</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO DE GRATIDÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Quem, Senhor, habitará no teu tabernáculo?</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Quem há de morar no teu santo monte?</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">O que vive com integridade, e pratica a justiça,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">e, de coração, fala a verdade;</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">o que não difama com sua língua,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">não faz mal ao próximo,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">nem lança injúria contra o seu vizinho;</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">o que, a seus olhos, tem por desprezível ao réprobo,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">mas honra aos que temem ao Senhor;</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">o que jura com dano próprio e não se retrata;</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">o que não empresta o seu dinheiro com usura,</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">nem aceita suborno contra o inocente.</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Quem deste modo procede não será jamais abalado.</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE FOGE DA APARÊNCIA DO MAL</MainTitle>
            <SubTitle>FUGIMOS DA APARÊNCIA DO MAL QUANDO NOS APROXIMAMOS DA LUZ DA
PALAVRA DE DEUS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Tiago 1.12-15 (Rev. Marcos Santana)</LiturgyStep>
            </LiturgySteps>
        </section>
        
        <section>
            <MainTitle>TIAGO 1.12-15</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>⁹ O irmão, porém, de condição humilde glorie-se na sua dignidade,</p>
        </section>

        <section>
            <MainTitle>TIAGO 1.12-15</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹⁰ e o rico, na sua insignificância, porque ele passará como a flor da erva.</p>
        </section>

        <section>
            <MainTitle>TIAGO 1.12-15</MainTitle>
            
        <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>¹¹ Porque o sol se levanta com seu ardente calor, e a erva seca, e a sua flor cai, e desaparece a formosura do seu aspecto; assim também se murchará o rico em seus caminhos.</p>
        </section><BackgroundSlide></BackgroundSlide>
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>UMA IGREJA QUE FOGE DA APARÊNCIA DO MAL</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: NENHUMA CONDENAÇÃO HÁ</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">De todas as provas que eu já passei</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">É bem difícil, Senhor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A gente ter que ouvir acusações do vil tentador</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Lembranças do passado vem</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E querem me fazer parar</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Ou mesmo palavras de alguém</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Que não quer na gente acreditar</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E quase parando sem forças e vigor</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">A gente lê a palavra</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E encontra bastante poder pra vencer</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E continuar a jornada</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E ver que o passado ficou pra trás</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pois Cristo na cruz tudo já venceu</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">E saber que dele não lembra mais</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Eu canto pra glória de Deus</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nenhuma condenação há</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Para quem está em Ti Jesus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cuja a vida coberta está</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pelo sangue que desceu na cruz</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">É certo que provas virão</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Investidas do vil tentador</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas nenhuma condenação há</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Para quem está em Ti, Querido Senhor</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Nenhuma condenação há</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Para quem está em Ti Jesus</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Cuja a vida coberta está</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Pelo sangue que desceu na cruz</p>
</section>

<section className="bg-white dark:bg-black">
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">É certo que provas virão</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Investidas do vil tentador</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Mas nenhuma condenação há</p>
  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">Para quem está em Ti, Querido Senhor</p>
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
