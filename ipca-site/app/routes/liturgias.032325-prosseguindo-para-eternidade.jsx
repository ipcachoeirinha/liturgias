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

const PAGE_TITLE = "Prosseguindo Para Eternidade - 23 de Março de 2025"
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
        <MainTitle>PROSSEGUINDO PARA ETERNIDADE</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>PROSSEGUINDO PARA ETERNIDADE</MainTitle>
            <SubTitle>HONRAMOS AO NOSSO DEUS COM LOUVORES SINCEROS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMOS 135:1-3</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: VENCENDO VEM JESUS, nº 147</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quando a alma sequiosa</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Chega a voz do Salvador,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eis que logo reconhece</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ser Jesus o seu Senhor!</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas se o "eu" quer levantar-se</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E mostrar algum valor,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus! </p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Neste mundo havemos, crentes,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De ter sempre algum pesar!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mesmo lutas, dissabores,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nossa paz vêm perturbar.</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas se o mal nos ameaça</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De a alegria nos roubar,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Da vaidade, fiéis servos</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Lutam por fazer-nos seus!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Muitas vezes nos assaltam</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Os modernos fariseus.</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas se alguém procura ver-nos</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sem a graça do bom Deus,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Glória, glória, aleluia!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vencendo vem Jesus!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>PROSSEGUINDO PARA ETERNIDADE</MainTitle>
            <SubTitle>CONFESSAMOS OS NOSSOS PECADOS AO NOSSO DEUS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 JOÃO 3:7-10</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ROMANOS 6:1</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: ISAÍAS 53</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 11 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ele não tinha qualquer beleza</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ou majestade pra nos atrair</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nada havia em Sua aparência</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Para o desejarmos</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mais rejeitado dentre os homens</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ainda assim carregou nossas dores</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O Seu castigo nos traz paz</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E a esperança não se esvai</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A oferta pela culpa Ele ofereceu</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pra satisfazer o Criador, Ele morreu</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pra que a Sua luz em nós pudesse brilhar</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O filho do amor se entregou em nosso lugar</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mais rejeitado dentre os homens</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ainda assim carregou nossas dores</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O Seu castigo nos traz paz</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E a esperança não se esvai</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A oferta pela culpa Ele ofereceu</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pra satisfazer o Criador, Ele morreu</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pra que a Sua luz em nós pudesse brilhar</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O filho do amor se entregou em nosso lugar</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">És o cordeiro que pelos nossos pecados foi esmagado</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sem dizer uma só palavra, se entregou aos cravos</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Derramou Sua vida até a morte provando a ira amarga</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pra nos dar Sua doce graça e nos fazer viver</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>PERGUNTA 11: Quais são as obras da providência de Deus?</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>As obras da providência de Deus são a sua maneira muito santa, sábia e poderosa de preservar e governar todas as suas criaturas, e todas as ações delas.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>PROSSEGUINDO PARA ETERNIDADE</MainTitle>
            <SubTitle>EXPRESSAMOS GRATIDÃO PELA GRAÇA RECEBIDA DO NOSSO DEUS.</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: TITO 2:11-14</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: QUEBRANTADO</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu olho para Cruz</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Para a Cruz eu vou</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Do seu sofrer participar</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tua obra vou cantar</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Meu salvador</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Na cruz mostrou</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor do pai</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Justo Deus</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pela cruz me chamou</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Gentilmente, me atraiu</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E eu, sem palavras</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me aproximo, quebrantado</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por seu amor</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Imerecida vida, de graça recebi</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por sua cruz, da morte me livrou</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Trouxe-me a vida, eu estava condenado</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas agora pela cruz</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu fui reconciliado</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pela cruz me chamou</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Gentilmente, me atraiu</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E eu, sem palavras</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me aproximo, quebrantado</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por seu amor</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Impressionante é o seu amor</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me redimiu e me mostrou, o quanto é fiel</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pela cruz me chamou</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Gentilmente, me atraiu</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E eu, sem palavras</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Me aproximo, quebrantado</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por seu amor</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>PROSSEGUINDO PARA ETERNIDADE</MainTitle>
            <SubTitle>RECONHECEMOS  O VALOR E OUVIMOS A PALAVRA DO NOSSO DEUS</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 3.17-21 (Rev. Marcos Santana)</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>PROSSEGUINDO PARA ETERNIDADE</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: REFÚGIO VERDADEIRO, nº 145</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Seguro estou, não tenho temor do mal!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sim, guardado pela fé em meu Jesus.</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Não posso duvidar desse amor leal</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ele em seu caminho sempre me conduz.</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Não me deixará, mas me abrigará,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Do pecado vil me vem livrar!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A sua graça não me recusará,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sim, Jesus é quem me pode sustentar.</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No poder de Cristo Mestre,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Minha vida salva está!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Do perigo que cercá-la</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ele poderá livrá-la!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Seu poder eterno sempre a susterá! </p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Abrigo eterno tenho no Salvador,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ele esconde a minha vida em seu poder;</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Não posso ter receio do malfeitor</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que procura, pertinaz, me enfraquecer.</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Confiado, então, nessa proteção,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sigo a Cristo e quero ser fiel</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Na minha vida cheio de gratidão,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sim, a meu Senhor e Rei Emanuel.</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No poder de Cristo Mestre,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Minha vida salva está!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Do perigo que cercá-la</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ele poderá livrá-la!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Seu poder eterno sempre a susterá!</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Perigo algum me pode causar temor,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois meu Salvador não me abandonará!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com sua proteção e com seu amor,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Dirigindo a minha vida ele estará.</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nunca o deixarei, mas fiel serei,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre firme, cheio de fervor!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estando bem firmado em Jesus, meu Rei,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sigo avante, confiando em seu amor</p>
</section>

<section className="bg-black">
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No poder de Cristo Mestre,</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Minha vida salva está!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Do perigo que cercá-la</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ele poderá livrá-la!</p>
  <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Seu poder eterno sempre a susterá!</p>
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
