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

const PAGE_TITLE = "A Alegria Na Expansão Do Evangelho - 12 de Janeiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-3", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-74", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-108", extension: "mp4", resourceType: "video" }
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
        <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle>A ALEGRIA DO EVANGELHO NOS LEVA A UMA ADORAÇÃO VERDADEIRA AO SENHOR</SubTitle>

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
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle>A ALEGRIA NO EVANGELHO NOS LEVA A LUTAR CONTRA OS NOSSOS PECADOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 15</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SINCERIDADE, nº 74</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 01 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-74")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Jesus Senhor, me achego a ti,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tua ira santa mereci;
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O teu favor estende aqui!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Aceita um pecador!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eu venho como estou!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sim, venho como estou!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Porque Jesus por mim morreu,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eu venho como estou!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            As minhas culpas grandes são,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Mas Tu, que não morreste em vão,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Me podes conceder perdão!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Aceita um pecador!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eu venho como estou!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sim, venho como estou!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Porque Jesus por mim morreu,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eu venho como estou!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Oh! Vem agora Salvador,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Livrar-me por teu grande amor,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Pois Tu, Jesus, és meu Senhor,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Aceita um pecador.
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eu venho como estou!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sim, venho como estou!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Porque Jesus por mim morreu,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eu venho como estou!
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Pergunta 02: Que regra Deus nos deu para nos orientar na maneira de o glorificar e de nos alegrarmos nele?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>A Palavra de Deus, que se acha nas Escrituras do Antigo
            e do Novo Testamentos, é a única regra para nos orientar na maneira de o
            glorificar e de nos alegrarmos nele.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle>DEVOLVEMOS NOSSOS DÍZIMOS E OFERTAS, PARA CONTRIBUIÇÃO NA EXPANSÃO DO EVANGELHO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: PROVÉRBIOS 3.9-10</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO SANTO PARA SEMPRE</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            As muitas gerações rendidas em louvor
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantando ao cordeiro uma canção
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Os que em Ti se foram e os que hão de crer
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantando ao cordeiro uma canção
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu nome é o mais alto
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu nome é o maior
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu nome é sobre todos
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Os tronos e domínios
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Governos e poderes
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Teu nome é sobre todos
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E os anjos clamam: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Toda criação: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Exaltado És, Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo pra sempre
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Quem foi perdoado e redimido foi
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cante ao cordeiro uma canção
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Aquele que é livre e leva o Seu nome
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cante ao cordeiro uma canção
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Cantaremos para sempre, amém
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E os anjos clamam: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Toda criação: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Exaltado És, Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo pra sempre
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            O Teu povo canta: Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sim, ao Rei dos Reis, Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu sempre serás Santo
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo pra sempre
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle>COM ALEGRIA RECEBEMOS O EVANGELHO PELA PREGAÇÃO DA PALAVRA DE DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 1.3-11 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>A ALEGRIA NA EXPANSÃO DO EVANGELHO</MainTitle>
          <SubTitle></SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: AFLIÇÃO E PAZ, nº 108</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-108")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se paz a mais doce me deres gozar,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Se dor a mais forte sofrer,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Oh! Seja o que for, tu me fazes saber
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Que feliz com Jesus sempre sou!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sou feliz com Jesus,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sou feliz com Jesus, meu Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Embora me assalte o cruel Satanás
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            E ataque com vis tentações;
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Oh! Certo eu estou, apesar de aflições,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Que feliz eu serei com Jesus!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sou feliz com Jesus,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sou feliz com Jesus, meu Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Meu triste pecado, por meu Salvador
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Foi pago de um modo cabal!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Valeu-me o Senhor! Oh! Mercê sem igual!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sou feliz, graças dou a Jesus!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sou feliz com Jesus,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sou feliz com Jesus, meu Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            A vinda eu anseio do meu Salvador,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Em breve virá me levar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Ao céu, onde eu vou para sempre morar
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Com remidos na luz do Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sou feliz com Jesus,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Sou feliz com Jesus, meu Senhor!
          </p>
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
