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

const PAGE_TITLE = "A Felicidade dos que temem ao Senhor - 04 de Maio de 2025"
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
        <MainTitle>A FELICIDADE DOS QUE TEMEM AO SENHOR</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>A FELICIDADE DOS QUE TEMEM AO SENHOR</MainTitle>
            <SubTitle>A IGREJA DE CRISTO É CONCLAMADA A CELEBRAR AO SENHOR COM ALEGRIA</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 100</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: O DEUS FIEL, nº 32</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu és fiel, Senhor, ó Pai celeste,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Teus filhos sabem que não falharás!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Nunca mudaste, tu nunca faltaste,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tal como eras tu sempre serás.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu és fiel, Senhor! Tu és fiel, Senhor!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dia após dia, com bênçãos sem fim,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tua mercê nos sustenta e nos guarda;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu és fiel, Senhor, fiel assim.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Flores e frutos, montanhas e mares,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sol, lua, estrelas brilhando no céu,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tudo criaste na terra e nos ares,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Para louvar-te, Senhor, que és fiel.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu és fiel, Senhor! Tu és fiel, Senhor!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dia após dia, com bênçãos sem fim,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tua mercê nos sustenta e nos guarda;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu és fiel, Senhor, fiel assim.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pleno perdão tu dás! Que segurança!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cada momento me guias, Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E no porvir, Oh! que doce esperança!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Desfrutarei do teu rico favor.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu és fiel, Senhor! Tu és fiel, Senhor!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Dia após dia, com bênçãos sem fim,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tua mercê nos sustenta e nos guarda;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu és fiel, Senhor, fiel assim.</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>A FELICIDADE DOS QUE TEMEM AO SENHOR</MainTitle>
            <SubTitle>TEMEMOS AO SENHOR, POR ISSO RECONHECEMOS QUE PECAMOS CONTRA NOSSO DEUS QUANDO CRIAMOS FALSOS ÍDOLOS EM NOSSO CORAÇÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: EZEQUIEL 4.3-7</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>:  1 JOÃO 1.9</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 18 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
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
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 18: Em que consiste o estado de pecado em que o homem caiu?</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>O estado de pecado em que o homem caiu consiste na culpa do primeiro pecado de Adão, na falta de retidão original e na corrupção de toda a sua natureza, o que ordinariamente se chama pecado original, juntamente com todas as transgressões atuais que procedem dele.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>A FELICIDADE DOS QUE TEMEM AO SENHOR</MainTitle>
            <SubTitle>SOMOS GRATOS A DEUS PELAS SUAS RICAS BENÇÃOS DERRAMADAS SOBRE NOSSA VIDA</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: PROVÉRBIOS 3.9-10</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SOU FELIZ COM JESUS!, nº 108</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Se paz a mais doce me deres gozar,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Se dor a mais forte sofrer,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Oh! Seja o que for, tu me fazes saber</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que feliz com Jesus sempre sou!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sou feliz com Jesus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sou feliz com Jesus, meu Senhor! </p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Embora me assalte o cruel Satanás</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E ataque com vis tentações;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Oh! Certo eu estou, apesar de aflições,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que feliz eu serei com Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sou feliz com Jesus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sou feliz com Jesus, meu Senhor! </p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Meu triste pecado, por meu Salvador</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Foi pago de um modo cabal!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Valeu-me o Senhor! Oh! Mercê sem igual!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sou feliz, graças dou a Jesus!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sou feliz com Jesus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sou feliz com Jesus, meu Senhor! </p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A vinda eu anseio do meu Salvador,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Em breve virá me levar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao céu, onde eu vou para sempre morar</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com remidos na luz do Senhor!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sou feliz com Jesus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sou feliz com Jesus, meu Senhor!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>A FELICIDADE DOS QUE TEMEM AO SENHOR</MainTitle>
            <SubTitle>AO ESCUTARMOS A PALAVRA DO SENHOR, SOMOS INCENTIVADOS A NOS ALEGRARMOS NELE E POR SUA PALAVRA EM PRÁTICA</SubTitle>

            <LiturgySteps>
                
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>A FELICIDADE DOS QUE TEMEM AO SENHOR</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: SALMO 128</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Bem-aventurado aquele que temor tem ao Senhor </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E que anda nos caminhos, os caminhos de Javé </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Do labor das tuas mãos o teu pão granjearás </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E feliz, então, serás, e o bem te seguirá </p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tua esposa, em tua casa, é videira a florescer </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Quais rebentos de oliveira, os teus filhos brotarão</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao redor da tua mesa, todos juntos estarão </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eis a benção que alcança quem assim teme ao Senhor </p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que o Senhor te abençoe desde o monte de Sião </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E, em Jerusalém, tu vejas todo o bem que haverá </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pelo tempo dos teus dias, pelos anos do viver </p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Filhos dos teus filhos vejas. Seja a paz sobre Israel!</p>
</section></SlideWithBackground>

<SupperSlide>
            <section>
              <MainTitle>SANTA CEIA</MainTitle>
            </section>
          </SupperSlide>
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Bem mais que as forças</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Poder e reis</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que a natureza e tudo que se fez</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Bem mais que tudo, criado por Tuas mãos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Deus, Tu és o início, meio e fim</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Bem mais que os mares</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Bem mais que o Sol</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E as maravilhas que o mundo conheceu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E as riquezas, tesouros desta Terra</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Incomparável és pra mim</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Por amor, Sua vida entregou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Meu Senhor, humilhado foi</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Como a flor machucada no jardim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Morreu por mim, pensou em mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me amou</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Bem mais que as forças</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Poder e reis</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que a natureza e tudo que se fez</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Bem mais que tudo, criado por Tuas mãos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Deus, Tu és o início, meio e fim</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Bem mais que os mares</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Bem mais que o Sol</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E as maravilhas que o mundo conheceu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">E as riquezas, tesouros desta Terra</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Incomparável és pra mim</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Por amor, Sua vida entregou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Meu Senhor, humilhado foi</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Como a flor machucada no jardim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Morreu por mim, pensou em mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me amou</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Por amor, Sua vida entregou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Meu Senhor, humilhado foi</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Como a flor machucada no jardim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Morreu por mim, pensou em mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me amou</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Como a flor machucada no jardim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Morreu por mim, pensou em mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me amou</p>
</section></SlideWithBackground>

<SupperSlide>
            <section>
              <MainTitle>SANTA CEIA</MainTitle>
            </section>
          </SupperSlide>


<SlideWithBackground>
        <section>
            <MainTitle>A FELICIDADE DOS QUE TEMEM AO SENHOR</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: SALMO 128</LiturgyStep>
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
