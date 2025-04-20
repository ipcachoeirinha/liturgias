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

const PAGE_TITLE = "A RESSURREIÇÃO DE CRISTO - 20 de Abril de 2025"
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
        <MainTitle>A RESSURREIÇÃO DE CRISTO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>A RESSURREIÇÃO DE CRISTO</MainTitle>
            <SubTitle>CREMOS QUE A RESSURREIÇÃO DE CRISTO FOI ANUNCIADA, POR ISSO CELEBRAMOS AO SENHOR COM ALEGRIA</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MARCOS 8.27-33</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: GLÓRIA E COROAÇÃO, nº 52</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Saudai o nome de Jesus!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Arcanjos, adorai!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao Rei que se humilhou na cruz</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com glória coroai!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ó escolhida geração</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">De Deus, o eterno Pai,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao grande Autor da Salvação</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com glória coroai!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Remidos todos, com fervor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Louvores entoai!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao que da morte é vencedor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com glória coroai!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ó raças, povos e nações,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao Rei divino honrai!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A quem quebrou os vis grilhões</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com glória coroai</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>A RESSURREIÇÃO DE CRISTO</MainTitle>
            <SubTitle>CREMOS QUE A RESSURREIÇÃO DE CRISTO FOI CONSTATADA, POR ISSO RECONHECEMOS OS NOSSOS PECADOS E OS CONFESSAMOS AO NOSSO SENHOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: MATEUS 28.1-10</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: RUDE CRUZ, nº 266</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 16 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Rude cruz se erigiu,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dela o dia fugiu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Como emblema de vergonha e dor.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mas eu sei que na cruz,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Nesse dia Jesus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Deu a vida por mim, pecador.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, eu amo a mensagem da cruz;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Seu triunfo meu gozo será!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois um dia, em lugar de uma cruz,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A coroa Jesus me dará!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Desde a glória dos céus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O Cordeiro de Deus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao Calvário humilhante baixou.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Nessa cruz, para mim,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Há mistério sem fim,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Porque nela Jesus me salvou.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, eu amo a mensagem da cruz;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Seu triunfo meu gozo será!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois um dia, em lugar de uma cruz,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A coroa Jesus me dará!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Nessa cruz padeceu,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Desprezado morreu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Meu Jesus, para dar-me perdão.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me alegro na cruz,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dela vêm graça e luz,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Para minha santificação.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, eu amo a mensagem da cruz;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Seu triunfo meu gozo será!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois um dia, em lugar de uma cruz,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A coroa Jesus me dará!</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 16: Todo o gênero humano caiu pela primeira transgressão de Adão?</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>Visto que o pacto foi feito com Adão, não só para ele, mas também para a sua posteridade, todo o gênero humano, que dele procede por geração ordinária, pecou nele e caiu com ele na sua primeira transgressão.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>A RESSURREIÇÃO DE CRISTO</MainTitle>
            <SubTitle>CREMOS QUE A RESSUREIÇÃO DE CRISTO FOI CONSTATADA, POR ISSO A IGREJA VIVE À ANUNCIAR ESSA VERDADE</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 CORÍNTIOS 15.1-8</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: ISAIAS 53</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ele não tinha qualquer beleza</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ou majestade pra nos atrair</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Nada havia em Sua aparência</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Para o desejarmos</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mais rejeitado dentre os homens</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ainda assim carregou nossas dores</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O Seu castigo nos traz paz</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E a esperança não se esvai</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A oferta pela culpa Ele ofereceu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pra satisfazer o Criador, Ele morreu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pra que a Sua luz em nós pudesse brilhar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O filho do amor se entregou em nosso lugar</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mais rejeitado dentre os homens</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ainda assim carregou nossas dores</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O Seu castigo nos traz paz</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E a esperança não se esvai</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A oferta pela culpa Ele ofereceu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pra satisfazer o Criador, Ele morreu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pra que a Sua luz em nós pudesse brilhar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O filho do amor se entregou em nosso lugar</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És o cordeiro que pelos nossos pecados foi esmagado</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sem dizer uma só palavra, se entregou aos cravos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Derramou Sua vida até a morte provando a ira amarga</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pra nos dar Sua doce graça e nos fazer viver</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>A RESSURREIÇÃO DE CRISTO</MainTitle>
            <SubTitle>CREMOS QUE CRISTO RESSUCITOU, POR ISSO COM ALEGRIA RECEBEMOS O EVANGELHO PELA PREGAÇÃO DA PALAVRA DE DEUS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Marcos 16.1-8 (Presb. Gutenberg A. Assis)</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>A RESSURREIÇÃO DE CRISTO</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: RESSURGIU, nº 274</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eis morto o Salvador </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Na sepultura, </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mas com poder real </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ressuscitou.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Da sepultura saiu!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com triunfo e glória ressurgiu! </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ressurgiu, vencendo a morte </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E seu poder!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pode agora a todos vida conceder! </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ressurgiu, ressurgiu! </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aleluia! Ressurgiu!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tomaram precaução</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com seu sepulcro. </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Foi tudo em vão, porém, </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Para o reter.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Da sepultura saiu!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com triunfo e glória ressurgiu! </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ressurgiu, vencendo a morte </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E seu poder!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pode agora a todos vida conceder! </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ressurgiu, ressurgiu! </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aleluia! Ressurgiu!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">No grande Vencedor </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eis as primícias </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dos santos que também </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ressurgirão.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Da sepultura saiu!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com triunfo e glória ressurgiu! </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ressurgiu, vencendo a morte </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E seu poder!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pode agora a todos vida conceder! </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ressurgiu, ressurgiu! </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aleluia! Ressurgiu!</p>
</section></SlideWithBackground>

<SupperSlide>
            <section>
              <MainTitle>SANTA CEIA</MainTitle>
            </section>
          </SupperSlide>
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Digno é o Cordeiro</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que foi morto</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo, Santo Ele é</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Um novo cântico</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao que se assenta</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sobre o Trono do Céu</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Digno é o Cordeiro</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que foi morto</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo, Santo Ele é</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Um novo cântico</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao que se assenta</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sobre o Trono do Céu</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo, Santo, Santo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Deus Todo Poderoso</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que era, e é, e há de vir</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com a criação eu canto</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Louvores ao Rei dos reis</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És tudo para mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E eu Te adorarei</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Está vestido do arco-íris</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sons de trovão, luzes, relâmpagos</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Louvores, honra e glória</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Força e poder pra sempre</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao único Rei eternamente</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo, Santo, Santo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Deus Todo Poderoso</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que era, e é e há de vir</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com a criação eu canto</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Louvores ao Rei dos reis</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És tudo para mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E eu Te adorarei</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Maravilhado, admirado</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu fico ao ouvir Teu nome</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Jesus, Teu nome é Força</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">É fôlego de Vida</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Misteriosa Água Viva</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Santo, Santo, Santo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Deus Todo Poderoso</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que era, e é e há de vir</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com a criação eu canto</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Louvores ao Rei dos reis</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És tudo para mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E eu Te adorarei</p>
</section></SlideWithBackground>

<SupperSlide>
            <section>
              <MainTitle>SANTA CEIA</MainTitle>
            </section>
          </SupperSlide>


<SlideWithBackground>
        <section>
            <MainTitle>A RESSURREIÇÃO DE CRISTO</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: RESSURGIU, nº 274</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    



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
