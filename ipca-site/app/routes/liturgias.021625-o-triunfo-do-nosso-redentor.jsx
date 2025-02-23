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

const PAGE_TITLE = "O Triunfo do nosso Redentor - 16 de Fevereiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-147", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-68", extension: "mp4", resourceType: "video" }
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
        <MainTitle>O TRIUNFO DO NOSSO REDENTOR</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O TRIUNFO DO NOSSO REDENTOR</MainTitle>
          <SubTitle>CELEBRAMOS COM ALEGRIA AQUELE QUE REINA PARA TODO SEMPRE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: APOCALIPSE 5.6-14</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: VENCENDO VEM JESUS, nº 147</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-147")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
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
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vencendo vem Jesus!</p>
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
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vencendo vem Jesus!</p>
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
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Glória, glória, aleluia!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-center leading-none mb-8">Vencendo vem Jesus!</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O TRIUNFO DO NOSSO REDENTOR</MainTitle>
          <SubTitle>O TRIUNFO DE CRISTO SOBRE A MORTE NOS LEVA AO RECONHECIMENTO DE NOSSOS PECADOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ISAÍAS 52.13 a 53.12</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: NECESSIDADE, nº 68</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 06 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-68")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu creio, Senhor, na divina promessa,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vitórias já tive nas lutas aqui.</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Contudo, é mui certo que a gente tropeça;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por isso, Senhor, eu preciso de ti.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A luz que me guia no escuro caminho</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Fulgura de cima do sol criador;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Contudo, não posso segui-la sozinho;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por isso eu preciso de ti, meu Senhor.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Bem sei que nas preces eu posso buscar-te,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Jamais dessa bênção na vida eu descri;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Contudo, é possível que eu dela me afaste;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por isso, Senhor, eu preciso de ti.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Esforços da terra, precário destino,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Empenho dos homens, riqueza, o que for,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Não valem a bênção do reino divino;</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Por isso eu preciso de ti, meu Senhor. Amém.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-none mb-8'>Pergunta 06: Quantas pessoas há na Divindade?</p>
        </section>
        <section>
          <MainTitle>RESPOSTA</MainTitle>
          <p className='text-green-800 text-[65px] font-bold text-left leading-normal mb-8'>Há três pessoas na Divindade: O Pai, o Filho e o Espírito Santo, e essas três são um Deus, da mesma substância, iguais em poder e glória.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O TRIUNFO DO NOSSO REDENTOR</MainTitle>
          <SubTitle>CELEBRAMOS O TRIUNFO DE CRISTO COM GRATIDÃO COM NOSSOS DÍZIMOS E OFERTAS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: ATOS 20.35</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO TEU SANTO NOME</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo ser que vive louve o nome do Senhor</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Toda criatura se derrame aos Seus pés</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao som da Sua voz o universo se desfaz</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Não há outro nome comparado ao grande Eu Sou</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E mesmo sendo pó</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com tudo que há em mim</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Confessarei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que céus e terra passarão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas o Teu nome é eterno</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo joelho dobrará</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao ouvir Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Teu Santo nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo ser confessará</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Louvado seja o Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Teu Santo nome</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E mesmo sendo pó</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Com tudo que há em mim</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Confessarei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que céus e terra passarão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mas o Teu nome é Eterno</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo joelho dobrará</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao ouvir Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Teu Santo nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo ser confessará</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Louvado seja o Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Teu Santo nome</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo joelho dobrará</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao ouvir Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Teu Santo nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo ser confessará</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Louvado seja, louvado seja</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O Teu Santo nome</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo joelho dobrará</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Ao ouvir Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Teu Santo nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Todo ser confessará</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Louvado seja o Teu nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Teu Santo nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Teu Santo nome, Jesus</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O TRIUNFO DO NOSSO REDENTOR</MainTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 2.5-11 (Rev. Marcos Santana)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O TRIUNFO DO NOSSO REDENTOR</MainTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO OH, QUÃO LINDO ESSE NOME É</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">No início eras a palavra</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Um com Deus, o Altíssimo</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O mistério de Tua glória</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cristo, em Ti se revelou</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Oh! Quão lindo esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Oh! Quão lindo esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O nome de Jesus, meu Rei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Oh! Quão lindo esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Maior que tudo Ele é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Oh! Quão lindo esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O nome de Jesus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Deixou o céu para buscar-nos</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Veio pra nos resgatar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Amor maior que o meu pecado</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Nada vai nos separar</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Oh! Quão maravilhoso é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Oh! Quão maravilhoso é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O nome de Jesus, meu Rei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Oh! Quão maravilhoso é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Maior que tudo Ele é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Oh! Quão maravilhoso é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O nome de Jesus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Jesus, Jesus, Jesus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Como eu amo esse nome</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Outro nome não há</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Eu adoro esse nome</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A morte venceste</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O véu Tu rompeste</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A tumba vazia agora está</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O céu Te adora</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Proclama Tua glória</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois ressuscitaste e vivo estás</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">És invencível</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Inigualável</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Hoje e pra sempre reinarás</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Teu é o reino</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Tua é a glória</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Acima de todo nome estás</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Poderoso esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Poderoso esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O nome de Jesus, meu Rei</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Poderoso esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Mais forte que tudo é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Poderoso esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O nome de Jesus</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Poderoso esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O nome de Jesus</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Poderoso esse nome é</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O nome de Jesus</p>
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
