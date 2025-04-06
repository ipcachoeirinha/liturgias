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

const PAGE_TITLE = "Reconhecendo A Verdadeira Alegria - 30 de Março de 2025"
const CDN_ASSETS_LIST = [{"id":"ipcachoeirinha/cruz-wallpaper-light","extension":"jpg","resourceType":"image"}]

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
        <MainTitle>RECONHECENDO A VERDADEIRA ALEGRIA</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>RECONHECENDO A VERDADEIRA ALEGRIA</MainTitle>
            <SubTitle>SOMOS CONVOCADOS A ADORAR AO SENHOR COM ALEGRIA</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 100</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: REI SUBLIME, nº 19</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ó Rei sublime em majestade e glória</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sobre as milícias do celeste além,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ouve o louvor, os hinos de vitória,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dos que de ti recebem todo o bem!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vinde, ó remidos, filhos de Deus!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cantai louvores que alcancem os céus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dos altos céus louvor a Deus ressoa,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">De gratidão ao soberano amor!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Os redimidos com fervor entoam</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O nome excelso do seu Benfeitor.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vinde, ó remidos, filhos de Deus!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cantai louvores que alcancem os céus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eterno Deus, teus filhos vês prostrados</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Perante o brilho da superna luz,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois do pecado foram resgatados,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E agora rendem glórias a Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vinde, ó remidos, filhos de Deus!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cantai louvores que alcancem os céus!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>RECONHECENDO A VERDADEIRA ALEGRIA</MainTitle>
            <SubTitle>CONFESSAMOS OS NOSSOS PECADOS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ROMANOS 8.31-39</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 12 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sonda-me, ó Deus, pois vês meu coração!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Prova-me, ó Pai, te peço em oração.</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">De todo o mal liberta-me, Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Até da transgressão que oculta for.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem me lavar dos vis pecados meus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Conforme prometeste, meu bom Deus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Faze-me arder e consumir de amor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois quero te magnificar, Senhor.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Todo meu ser não considero meu;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Quero gastá-lo no serviço teu.</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Minhas paixões Tu podes dominar,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois Tu, Senhor, vieste em mim morar.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Lá do alto céu o avivamento vem,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E que comece em mim seguindo além.</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O teu poder, as bênçãos, teu favor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Concede aos que são teus, ó Pai de amor. Amém.</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 12: Que ato especial de providência Deus exerceu para com o homem, no estado em que ele foi criado?</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>Quando Deus criou o homem, fez com ele um pacto de vida, com a condição de perfeita obediência, proibindo-lhe comer da árvore da ciência do bem e do mal, sob pena de morte.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>RECONHECENDO A VERDADEIRA ALEGRIA</MainTitle>
            <SubTitle>UMA IGREJA ALEGRE DEVOLVE SEUS DÍZIMOS E OFERTAS COM SINAL DE GRATIDÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ATOS 20.35</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: SEJA ENGRANDECIDO</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Seja engrandecido, óh Deus da minha vida,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tú És o Deus da minha salvação.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És a minha Rocha, a minha segurança</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Meus lábios sempre Te exaltarão</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aleluia (aleluia), Te louvo (te louvo)</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois sei que sobre todos És Senhor.</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>RECONHECENDO A VERDADEIRA ALEGRIA</MainTitle>
            <SubTitle>UMA IGREJA ALEGRE APLICA A PALAVRA DO SENHOR EM SEU CORAÇÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 4.2-7 (Rev. Marcos Santana)</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>RECONHECENDO A VERDADEIRA ALEGRIA</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SEGURANÇA E ALEGRIA, nº 144</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que segurança tenho em Jesus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois nele gozo paz, vida e luz!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com Cristo herdeiro, Deus me aceitou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mediante o Filho que me salvou!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Conto esta história, cantando assim:</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cristo, na cruz, foi morto por mim!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Conto esta história cantando assim:</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cristo, na cruz, foi morto por mim!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Inteiramente me submeti,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Plena alegria nele senti.</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Anjos, descendo, trazem dos céus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Provas da graça que vem de Deus.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Conto esta história, cantando assim:</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cristo, na cruz, foi morto por mim!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Conto esta história cantando assim:</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cristo, na cruz, foi morto por mim!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firmado em Cristo, no seu amor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Estou contente em meu Salvador!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Esperançoso hei de viver</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Por Jesus Cristo, por seu poder.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Conto esta história, cantando assim:</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cristo, na cruz, foi morto por mim!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Conto esta história cantando assim:</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cristo, na cruz, foi morto por mim!</p>
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
