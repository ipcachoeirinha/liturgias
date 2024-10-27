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

const PAGE_TITLE = "A Autoridade das Escrituras - 27 de Outubro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-86", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/oracao-silenciosa-hino-208", extension: "mp3", resourceType: "video" }
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
        <MainTitle>A AUTORIDADE DAS ESCRITURAS</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
          <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És a nossa Estrela da manhã,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cordeiro Santo que nos trouxe a paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em Tuas mãos está todo o vencer,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Resposta a todo aquele que clamar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A verdade é a Tua palavra e não podes mentir, por isso estamos aqui</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És a nossa Estrela da manhã,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cordeiro Santo que nos trouxe a paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em Tuas mãos está todo o vencer,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Resposta a todo aquele que clamar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A verdade é a Tua palavra e não podes mentir, por isso estamos aqui</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Te louvamos ó Senhor,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelo Teu imenso amor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Manifesta o Teu perdão e poder</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E assim vamos Te adorar para sempre</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra sempre ó meu Deus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>És a nossa Estrela da manhã,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cordeiro Santo que nos trouxe a paz</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Em Tuas mãos está todo o vencer,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Resposta a todo aquele que clamar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>A verdade é a Tua palavra e não podes mentir, por isso estamos aqui</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Te louvamos ó Senhor,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelo Teu imenso amor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Manifesta o Teu perdão e poder</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E assim vamos Te adorar para sempre</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pra sempre ó meu Deus</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A AUTORIDADE DAS ESCRITURAS</MainTitle>
          <SubTitle>É TESTEMUNHADA PELO ESPÍRITO SANTO<br/>NO CORAÇÃO DA IGREJA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 2º CORÍNTIOS 4.1-6</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 1ª CORÍNTIOS 2.13-14</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: ESPÍRITO DO ETERNO DEUS, nº 86</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-86")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A AUTORIDADE DAS ESCRITURAS</MainTitle>
          <SubTitle>ABRANGE TODA A VIDA DA IGREJA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: JOÃO 12.47-48</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 119.1-8</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A IGREJA EM ADORAÇÃO, nº 3</LiturgyStep>
          </LiturgySteps>
        </section>
        <section>

          <MainTitle>ORAÇÃO SILENCIOSA</MainTitle>

          <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/oracao-silenciosa-hino-208")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>
        <section>
          <MainTitle>A AUTORIDADE DAS ESCRITURAS</MainTitle>
          <SubTitle>ABRANGE TODA A VIDA DA IGREJA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: JOÃO 12.47-48</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 119.1-8</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A IGREJA EM ADORAÇÃO, nº 3</LiturgyStep>
          </LiturgySteps>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Eterno Pai, Teu povo congregado,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Humilde, entoa o Teu louvor aqui!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>No dia para o culto reservado,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com esperança olhamos para Ti.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Teu santo livro, ó grande Deus, tomamos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Com fé singela e reverente amor,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E, como atentos filhos, procuramos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ciência na Palavra do Senhor.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus, Aos Teus benditos pés sentados,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Queremos Teu conselho receber!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E, sendo por Ti mesmo doutrinados,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>De mais em mais na santa fé crescer.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Do mundo e seus encargos retirados,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Queremos descansar em Ti, Senhor,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mirando os ricos bens entesourados</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Na plenitude do Teu vasto amor.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ensina aos Teus, Espírito Divino,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Dissipa as trevas destes corações!</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E, com a luz do Teu celeste ensino,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Vem aclarar as Tuas instruções.</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Aviva em nós a forças da memória,</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pois sempre mais queremos conhecer.</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>O Rei dos céus, o Cristo, cuja glória</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Enleva os santos anjos de prazer.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A AUTORIDADE DAS ESCRITURAS</MainTitle>
          <SubTitle>ESTÁ ACIMA DAS AUTORIDADES HUMANAS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ATOS 5.25-32</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICOS CONGREGACIONAIS</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

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

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças eu te dou, Pai</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelo preço que pagou</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Sacrifício de amor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Que me comprou</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ungido do Senhor</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelos cravos em tuas mãos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças eu te dou, ó meu Senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Lavou minha mente e coração</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Me deu perdão</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Restaurou-me a comunhão</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Digno é o Senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Sobre o trono está</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Soberano, criador</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Vou sempre te adorar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Elevo minhas mãos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ao Cristo que venceu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cordeiro de Deus morreu por mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mas ressuscitou</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Digno é o Senhor</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelos cravos em tuas mãos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças eu te dou, ó meu Senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Lavou minha mente e coração</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Me deu perdão</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Restaurou-me a comunhão</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Digno é o Senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Sobre o trono está</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Soberano, criador</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Vou sempre te adorar</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Elevo minhas mãos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ao Cristo que venceu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Cordeiro de Deus morreu por mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mas ressuscitou</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Digno é o Senhor</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A AUTORIDADE DAS ESCRITURAS</MainTitle>
          <SubTitle>FAZ COM QUE A IGREJA NORTEIE SUA VIDA PELA PALAVRA</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Rev. Arnaldo Matias</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A AUTORIDADE DAS ESCRITURAS</MainTitle>
          <SubTitle>É ANUNCIADA PELA IGREJA COM FIDELIDADE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>TRÍPLICE AMÉM</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>A AUTORIDADE DAS ESCRITURAS</MainTitle>
          <SubTitle>É ANUNCIADA PELA IGREJA COM FIDELIDADE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>TRÍPLICE AMÉM</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>POSLÚDIO</MainTitle>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mil motivos para agradecer</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mais de mil razões para louvar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Mil canções de amor para cantar</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por tão grande amor que recebi</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pela graça que me atraiu</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por me perdoar sem merecer</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por regenerar meu coração</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>E me dar a paz sem fim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelas grandes obras de Tuas mãos</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou por tudo o que fizeste a mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por me socorrer nas aflições</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Por saber que nunca estou só</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pelo Teu cuidado que é sem fim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Ao Autor da minha salvação</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Meu amado, meu Senhor</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Seja minha grata adoração</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Jesus</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou por tudo o que fizeste a mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou, Jesus</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou por tudo o que fizeste a mim</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Graças dou</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVISOS</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>VERSÍCULO DO MÊS DE OUTUBRO</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>“Assim diz o Senhor: Põe em ordem a tua casa, porque morrerás e não viverás.“ Isaías 38.1b</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>CATECISMO MAIOR DE WESTMINSTER</p>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Pergunta 127. Qual é a honra que os inferiores devem aos superiores?</p>
        </section>
        <section className='bg-black'>
          <p className='text-zinc-50 text-[65px] font-bold text-left leading-none mb-8'>Resposta: A honra que os inferiores devem ao superiores é toda a devida reverência sincera, em palavras e em procedimento; a oração e ações de graças por eles; a imitação de suas virtudes e graças; a pronta obediência aos seus mandamentos e conselhos legítimos; a devida submissão às suas correções; a fidelidade, a defesa, a manutenção de suas pessoas e autoridade, conforme os seus diversos graus e a natureza de suas posições; suportando as suas fraquezas e encobrindo-as com amor, para que sejam uma honra para eles e para o seu governo.</p>
        </section>
      </SlideWithBackground>
    </RevealJsBaseElement>
  )
}
