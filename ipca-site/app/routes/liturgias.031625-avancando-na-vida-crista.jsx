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

const PAGE_TITLE = "Avançando na Vida Cristã - 16 de Janeiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-3", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-49", extension: "mp4", resourceType: "video" }
]

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
        <MainTitle>AVANÇANDO NA VIDA CRISTÃ</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVANÇANDO NA VIDA CRISTÃ</MainTitle>
          <SubTitle>ADORAMOS AO SENHOR CERTOS DE QUE ESTAMOS ADORANDO AO ÚNICO DEUS VIVO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 63</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A IGREJA EM ADORAÇÃO, nº 3</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eterno Pai, Teu povo congregado,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Humilde, entoa o Teu louvor aqui!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            No dia para o culto reservado,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Com esperança olhamos para Ti.
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu santo livro, ó grande Deus, tomamos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Com fé singela e reverente amor,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E, como atentos filhos, procuramos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Ciência na Palavra do Senhor.
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus, Aos Teus benditos pés sentados,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Queremos Teu conselho receber!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E, sendo por Ti mesmo doutrinados,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            De mais em mais na santa fé crescer.
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Do mundo e seus encargos retirados,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Queremos descansar em Ti, Senhor,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Mirando os ricos bens entesourados
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Na plenitude do Teu vasto amor.
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Ensina aos Teus, Espírito Divino,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Dissipa as trevas destes corações!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E, com a luz do Teu celeste ensino,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Vem aclarar as Tuas instruções.
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Aviva em nós a forças da memória,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois sempre mais queremos conhecer.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O Rei dos céus, o Cristo, cuja glória
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Enleva os santos anjos de prazer.
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVANÇANDO NA VIDA CRISTÃ</MainTitle>
          <SubTitle>RECONHECEMOS A NOSSA NECESSIDADE DE CONFESSARMOS OS NOSSOS PECADOS AO NOSSO DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ISAÍAS 55.6-9</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO O AMOR DE DEUS (Logo Eu)</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 10 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graça sobre graça, recebi</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E da plenitude, renasci</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quando atraído, me encontrei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Viva e poderosa salvação</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Luz que me alcançou na escuridão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo meu pecado se apagou</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, um pobre pecador</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, tão fraco e tão devedor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, finito e carnal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, diante de um Deus imortal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Graça sobre graça, recebi</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E da plenitude, renasci</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quando atraído, me encontrei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Viva e poderosa salvação</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Luz que me alcançou na escuridão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo meu pecado se apagou</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, um pobre pecador</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, tão fraco e tão devedor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, finito e carnal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, diante de um Deus imortal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Deus é rico em benefícios</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Deus não mede sacrifícios</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Dos braços desse amor, recebo o perdão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Comprado por Jesus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Deus é puro e consciente</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Como as manhãs, é firme e constante</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que se entregou na cruz e a morte derrotou</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Jesus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, um pobre pecador</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, tão fraco e tão devedor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, finito e carnal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, diante de um Deus imortal</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Logo eu, de graça recebi o amor de Deus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O amor de Deus</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Pergunta 10: Como Deus criou o homem?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Deus criou o homem, macho e fêmea, conforme a sua própria imagem, em
            conhecimento, retidão e santidade, com domínio sobre as criaturas.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVANÇANDO NA VIDA CRISTÃ</MainTitle>
          <SubTitle>RECONHECEMOS QUE TUDO QUE TEMOS VEM DO NOSSO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: COLOSSENSES 3.15-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO AO ÚNICO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao único que é digno de receber</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A honra e a glória, a força e o poder</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao Rei eterno e imortal, invisível, mas real</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A Ele ministramos o louvor</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao único que é digno de receber</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A honra e a glória, a força e o poder</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao Rei eterno e imortal, invisível, mas real</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A Ele ministramos o louvor</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Coroamos a Ti, ó Rei Jesus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Coroamos a Ti, ó Rei Jesus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Adoramos o Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nos rendemos aos Teus pés</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Consagramos todo nosso ser a Ti</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao Rei eterno e imortal, invisível, mas real</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A Ele, ministramos o louvor</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Coroamos a Ti, ó Rei Jesus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Coroamos a Ti, ó Rei Jesus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Adoramos o Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nos rendemos aos Teus pés</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Consagramos todo nosso ser a Ti</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Coroamos a Ti, ó Rei Jesus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Coroamos a Ti, ó Rei Jesus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Adoramos o Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nos rendemos aos Teus pés</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Consagramos todo nosso ser a Ti</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Consagramos todo nosso ser a Ti</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVANÇANDO NA VIDA CRISTÃ</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 3.12-16 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVANÇANDO NA VIDA CRISTÃ</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SEMPRE VENCENDO, nº 49</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-49")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre vencendo, mui vitorioso,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cristo Jesus, o Senhor!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">É Soberano, Chefe bendito,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Em tudo ele é vencedor!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ei-lo supremo, guiando,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com seu imenso poder!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todos avante, pois, crentes,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todos lutar e vencer.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Não é dos fortes a vitória,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nem dos que correm melhor.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas dos fiéis e sinceros</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que seguem junto ao Senhor</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre vencendo, mui vitorioso,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cristo Jesus, o Senhor!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eis suas hostes inumeráveis,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Seu grande império e fulgor;</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Em seu governo demonstra</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cuidado e amor sem igual;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre nos ama e protege</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com seu poder eternal</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Não é dos fortes a vitória,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nem dos que correm melhor.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas dos fiéis e sinceros</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que seguem junto ao Senhor</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre vencendo, mui vitorioso,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cristo Jesus, o Senhor!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Reis e vassalos, servos e chefes</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Querem também seu favor.</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Senhor, desejo e te imploro</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que me permitas lutar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sempre ao teu lado, invencível,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Até meus dias findar!</p>
        </section>

        <section className='bg-black'>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Não é dos fortes a vitória,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nem dos que correm melhor.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas dos fiéis e sinceros</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que seguem junto ao Senhor</p>
        </section>
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
