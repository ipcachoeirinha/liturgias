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

const PAGE_TITLE = "Deus é Suficiente - 27 de Abril de 2025"
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
        <MainTitle>DEUS É SUFICIENTE</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>DEUS É SUFICIENTE</MainTitle>
            <SubTitle>DEUS SUFICIENTE E ÚNICO QUE DEVE SER ADORADO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 46</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TRINDADE SANTÍSSIMA, nº 11</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Deus Onipotente!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Louvam nossas vozes teu nome com fervor!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Justo e compassivo!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És Deus Triúno, Excelso Criador!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Nós, os pecadores,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Não podemos ver tua glória sem temor.</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu somente és Santo! Só tu és perfeito,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Deus Soberano, imenso em teu amor.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Todos os remidos,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Juntos com os anjos, proclamam teu louvor!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Antes de formar-se o firmamento e a terra</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eras, e sempre és, e hás de ser Senhor!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Deus Onipotente!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tuas obras louvam teu nome com fervor.</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo! Santo! Santo! Justo e compassivo!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Deus Soberano, Excelso Criador! Amém.</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>DEUS É SUFICIENTE</MainTitle>
            <SubTitle>RECONHECEMOS OS NOSSOS PECADOS, POR MUITAS VEZES NÃO DESCANSARMOS NO SENHOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 JOÃO 3:7-10</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ROMANOS 6:1</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: O AMOR DE DEUS (LOGO EU)</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 17 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Graça sobre graça, recebi</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E da plenitude, renasci</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Quando atraído, me encontrei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">No amor de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Viva e poderosa salvação</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Luz que me alcançou na escuridão</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Todo meu pecado se apagou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">No amor de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, um pobre pecador</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, tão fraco e tão devedor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, finito e carnal</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, diante de um Deus imortal</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Graça sobre graça, recebi</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E da plenitude, renasci</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Quando atraído, me encontrei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">No amor de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Viva e poderosa salvação</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Luz que me alcançou na escuridão</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Todo meu pecado se apagou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">No amor de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, um pobre pecador</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, tão fraco e tão devedor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, finito e carnal</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, diante de um Deus imortal</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O amor de Deus é rico em benefícios</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O amor de Deus não mede sacrifícios</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dos braços desse amor, recebo o perdão</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Comprado por Jesus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O amor de Deus é puro e consciente</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Como as manhãs, é firme e constante</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que se entregou na cruz e a morte derrotou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O amor de Jesus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, um pobre pecador</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, tão fraco e tão devedor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, de graça recebi o amor de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, finito e carnal</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, diante de um Deus imortal</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Logo eu, de graça recebi o amor de Deus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O amor de Deus</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 17: Qual foi o estado a que a queda reduziu o gênero humano?</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>A queda reduziu o gênero humano a um estado de pecado e miséria.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>DEUS É SUFICIENTE</MainTitle>
            <SubTitle>DEUS É SUFICIENTE, POR ISSO SOMOS GRATOS POR TUDO QUE RECEBEMOS DELE</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 TIMÓTEO 6.6-8</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: ACLAME AO SENHOR</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Meu Jesus, Salvador</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Outro igual não há</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Todos os dias quero louvar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">As maravilhas de Teu amor</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Consolo, abrigo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Força e refúgio é o Senhor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com todo o meu ser</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com tudo o que sou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sempre Te adorarei</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aclame ao Senhor, toda a terra e cantemos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Poder, majestade e louvores ao Rei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Montanhas se prostrem e rujam os mares</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao som de Teu nome</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Alegre Te louvo por Teus grandes feitos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firmado estarei, sempre Te amarei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Incomparáveis são Tuas promessas pra mim</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Meu Jesus, Salvador</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Outro igual não há</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Todos os dias quero louvar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">As maravilhas de Teu amor</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Consolo, abrigo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Força e refúgio é o Senhor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com todo o meu ser</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com tudo o que sou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sempre Te adorarei</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aclame ao Senhor, toda a terra e cantemos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Poder, majestade e louvores ao Rei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Montanhas se prostrem e rujam os mares</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao som de Teu nome</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Alegre Te louvo por Teus grandes feitos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firmado estarei, sempre Te amarei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Incomparáveis são Tuas promessas</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aclame ao Senhor, toda a terra e cantemos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Poder, majestade e louvores ao Rei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Montanhas se prostrem e rujam os mares</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao som de Teu nome</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Alegre Te louvo por Teus grandes feitos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firmado estarei, sempre Te amarei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Incomparáveis são Tuas promessas</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aclame ao Senhor, toda a terra e cantemos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Poder, majestade e louvores ao Rei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Montanhas se prostrem e rujam os mares</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao som de Teu nome</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Alegre Te louvo por Teus grandes feitos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firmado estarei, sempre Te amarei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Incomparáveis são Tuas promessas</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Incomparáveis são Tuas promessas</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Incomparáveis são Tuas promessas</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Incomparáveis são Tuas promessas pra mim</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>DEUS É SUFICIENTE</MainTitle>
            <SubTitle>RECONHECEMOS A SUFICIÊNCIA DO NOSSO DEUS, POR MEIO DA PALAVRA</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 4.14-20 (Rev. Marcos Santana)</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>DEUS É SUFICIENTE</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: EU ME RENDO</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A Ti eu vou clamar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois tudo vem de Ti</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E tudo está em Ti</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Por Ti vou caminhar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu és a direção</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O Sol a me guiar</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tudo pode passar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Teu amor jamais me deixará</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sempre há de existir novo amanhã</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Preparado pra mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Preparado pra mim</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">(A Ti, Senhor)</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A Ti eu vou clamar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois tudo vem de Ti</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E tudo está em Ti</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Por Ti vou caminhar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu és a direção</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O Sol a me guiar</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tudo pode passar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Teu amor jamais me deixará</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sempre há de existir novo amanhã</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Preparado pra mim *</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me rendo aos Teus pés</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És tudo que eu preciso pra viver</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me lanço aos Teus braços</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Onde encontro meu refúgio</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me rendo aos Teus pés</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És tudo que eu preciso pra viver</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me lanço aos Teus braços</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Onde encontro meu refúgio</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Jesus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eis-me aqui</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Jesus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eis-me aqui</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me rendo aos Teus pés</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És tudo que eu preciso pra viver</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me lanço aos Teus braços</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Onde encontro meu refúgio</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me rendo aos Teus pés</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És tudo que eu preciso pra viver</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me lanço aos Teus braços</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Onde encontro meu refúgio</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Jesus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eis-me aqui</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Jesus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eis-me aqui</p>
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
