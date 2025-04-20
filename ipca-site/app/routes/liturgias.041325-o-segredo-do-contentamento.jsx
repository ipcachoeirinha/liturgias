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

const PAGE_TITLE = "O Segredo do Contentamento - 13 de Abril de 2025"
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
        <MainTitle>O SEGREDO DO CONTENTAMENTO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>O SEGREDO DO CONTENTAMENTO</MainTitle>
            <SubTitle>DIANTE DE DEUS, ENCONTRAMOS O VERDADEIRO CONTENTAMENTO E POR ISSO ADORAMOS AO SENHOR COM ALEGRIA</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 46</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: FIRME NAS PROMESSAS, nº 177</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme nas promessas do meu Salvador,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cantarei louvores ao meu Criador!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Fico, pelos séculos do seu amor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme nas promessas de Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme, firme, Firme nas promessas</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">De Jesus, meu Mestre! Firme, firme,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, firme nas promessas de Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme nas promessas, hei de trabalhar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tendo o Verbo eterno sempre a me amparar!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mesmo em tempestade vou sem vacilar,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme nas promessas de Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme, firme, Firme nas promessas</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">De Jesus, meu Mestre! Firme, firme,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, firme nas promessas de Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme nas promessas, sempre vejo, assim,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Purificação no sangue para mim!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Plena liberdade já desfruto, enfim;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme nas promessas de Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme, firme, Firme nas promessas</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">De Jesus, meu Mestre! Firme, firme,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, firme nas promessas de Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme nas promessas do Senhor Jesus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Em amor ligado sempre à sua cruz,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cada dia mais me alegro em sua luz,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme nas promessas de Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Firme, firme, Firme nas promessas</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">De Jesus, meu Mestre! Firme, firme,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, firme nas promessas de Jesus!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>O SEGREDO DO CONTENTAMENTO</MainTitle>
            <SubTitle>RECONHECENDO O VERDADEIRO CONTENTAMENTO EM NOSSO DEUS, CONFESSAMOS NOSSOS PECADOS E DIANTE DELE, RECEBEMOS O SEU PERDÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 2 CORÍNTIOS 4.8-18</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: DESCANSO EM JESUS, nº 70</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 14 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Todo meu tão vil pecado</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Lanço, ó Cristo, sobre ti,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois, Cordeiro imaculado,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu me dás perdão aqui.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Minha mancha tão impura</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu bem podes retirar;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E deixar em ti segura</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A minha alma descansar.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pobre sou, angustiado,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mas revivo em tua cruz;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E meu coração cansado</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ponho só em ti Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Minhas mágoas carregaste</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">No madeiro em meu lugar;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vida eterna me compraste,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Salvação me vieste dar.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E na glória eterna, ao lado</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dos fiéis em multidão,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Meus louvores, Cristo amado,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mais perfeito te serão. Amém.</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 14: O que é pecado?</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>Pecado é qualquer falta de conformidade com a lei de Deus, ou qualquer transgressão dessa lei.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>O SEGREDO DO CONTENTAMENTO</MainTitle>
            <SubTitle>ALEGRAMO-NOS E DEPENDEMOS DO SENHOR, POIS RECONHECEMOS QUE TUDO QUE TEMOS VEM DO SENHOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1 TIMÓTEO 6.6-8</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: EFÉSIOS 6.10</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: BONDADE DE DEUS</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Te amo, Deus, tua graça nunca falha</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Todos os dias eu estou em tuas mãos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Desde quando me levanto até eu me deitar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu cantarei da bondade de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És fiel em todo tempo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Em todo tempo tu és tão, tão bom</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com todo fôlego que tenho</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu cantarei da bondade de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tua doce voz que me guia em meio ao fogo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Na escuridão, tua presença me conforta</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu sei que és meu pai, que amigo és</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E eu vivo na bondade de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És fiel em todo tempo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Em todo tempo tu és tão, tão bom</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com todo fôlego que tenho</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu cantarei da bondade de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És fiel em todo tempo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Em todo tempo tu és tão, tão bom</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com todo fôlego que tenho</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu cantarei da bondade de Deus</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tua bondade me seguirá</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me seguirá, senhor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu me rendo a ti, te dou meu ser</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Entrego tudo a ti</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tua bondade me seguirá</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me seguirá, senhor</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">És fiel em todo tempo</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Em todo tempo tu és tão, tão bom</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com todo fôlego que tenho</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu cantarei da bondade de Deus</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>O SEGREDO DO CONTENTAMENTO</MainTitle>
            <SubTitle>DIANTE DE DEUS NOS DEDICAMOS EM OUVIR DA SUA PALAVRA E A APLICAMOS EM NOSSO DIA A DIA</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 4.10-13 (Rev. Marcos Santana)</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>O SEGREDO DO CONTENTAMENTO</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: FIRMEZA NA FÉ, nº 93</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Somente ponho a minha fé</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Na graça excelsa de Jesus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">No sacrifício remidor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">No sangue do bom Redentor.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A minha fé e o meu amor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Estão firmados no Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Estão firmados no Senhor. </p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Se não lhe posso a face ver,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">É pela fé que vou viver;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Em cada transe a suportar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu hei de nele confiar.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A minha fé e o meu amor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Estão firmados no Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Estão firmados no Senhor. </p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A sua graça é mui real,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Abrigo traz no temporal;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao vir cercar-me a tentação,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me fortalece a sua mão.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A minha fé e o meu amor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Estão firmados no Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Estão firmados no Senhor. </p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Quando a trombeta ressoar,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Irei com ele me encontrar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E com os salvos cantarei</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Louvor eterno ao grande Rei!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A minha fé e o meu amor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Estão firmados no Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Estão firmados no Senhor.</p>
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
