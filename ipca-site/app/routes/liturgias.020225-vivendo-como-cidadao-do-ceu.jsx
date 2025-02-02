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

const PAGE_TITLE = "Vivendo como cidadão do Ceu - 2 de Fevereiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-3", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-67", extension: "mp4", resourceType: "video" }
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
  const SupperSlide = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/santa-ceia-bg"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>VIVENDO COMO CIDADÃO DO CÉU</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO CIDADÃO DO CÉU</MainTitle>
          <SubTitle>O CIDADÃO DO CÉU RENDE LOUVORES AO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: EFÉSIOS 1.3-14</LiturgyStep>
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
            Aviva em nós as forças da memória,
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
          <MainTitle>VIVENDO COMO CIDADÃO DO CÉU</MainTitle>
          <SubTitle>O CIDADÃO DO CÉU CONFESSA E DEIXA OS SEUS PECADOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 15</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 05 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-67")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Sonda-me, ó Deus, pois vês meu coração!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Prova-me, ó Pai, te peço em oração.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De todo o mal liberta-me, Senhor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Até da transgressão que oculta for.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vem me lavar dos vis pecados meus,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Conforme prometeste, meu bom Deus,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Faze-me arder e consumir de amor,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois quero te magnificar, Senhor.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo meu ser não considero meu;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quero gastá-lo no serviço teu.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Minhas paixões Tu podes dominar,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois Tu, Senhor, vieste em mim morar.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Lá do alto céu o avivamento vem,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E que comece em mim seguindo além.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O teu poder, as bênçãos, teu favor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Concede aos que são teus, ó Pai de amor. Amém.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Pergunta 05: Há mais de um Deus?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Há um só Deus, o Deus vivo e verdadeiro.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO CIDADÃO DO CÉU</MainTitle>
          <SubTitle>COMO CIDADÃOS DO CÉU, NÃO RETEMOS O QUE É DO SENHOR, MAS SOMOS FIÉIS EM NOSSOS DÍZIMOS E OFERTAS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: PROVÉRBIOS 3.9-10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO O AMOR DE DEUS (LOGO EU)</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
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
          <MainTitle>VIVENDO COMO CIDADÃO DO CÉU</MainTitle>
          <SubTitle>COMO CIDADÃOS DOS CÉUS, ESTAMOS PRONTOS A OUVIR A PREGAÇÃO DA PALAVRA DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 1.27-30 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO CIDADÃO DO CÉU</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ele não tinha qualquer beleza</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ou majestade pra nos atrair</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Nada havia em Sua aparência</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Para o desejarmos</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mais rejeitado dentre os homens</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ainda assim carregou nossas dores</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O Seu castigo nos traz paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E a esperança não se esvai</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A oferta pela culpa Ele ofereceu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra satisfazer o Criador, Ele morreu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra que a Sua luz em nós pudesse brilhar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O filho do amor se entregou em nosso lugar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mais rejeitado dentre os homens</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ainda assim carregou nossas dores</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O Seu castigo nos traz paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E a esperança não se esvai</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A oferta pela culpa Ele ofereceu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra satisfazer o Criador, Ele morreu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra que a Sua luz em nós pudesse brilhar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O filho do amor se entregou em nosso lugar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És o cordeiro que pelos nossos pecados foi esmagado</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Sem dizer uma só palavra, se entregou aos cravos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Derramou Sua vida até a morte provando a ira amarga</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra nos dar Sua doce graça e nos fazer viver</p>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>VIVENDO COMO CIDADÃO DO CÉU</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
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
