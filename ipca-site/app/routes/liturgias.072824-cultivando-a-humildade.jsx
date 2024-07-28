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
import { createLyricsSlideSection } from '../components/ipca-default-theme/LyricsSlide'

const PAGE_TITLE = "Cultivando a Humildade - 28 de Julho de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-17", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-128", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-218", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-312", extension: "mp4", resourceType: "video" },
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

export default function UmaIgrejaCheiaDeMansidao() {
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
  const LyricsSlide = createLyricsSlideSection({ backgroundUrl: null })

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>CULTIVANDO A HUMILDADE</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>PRELÚDIO</MainTitle>
        <audio data-autoplay><source
          type="audio/mpeg"

          src={getAssetUrl("ipcachoeirinha/hino-001-instrumental")}


        />O seu navegador não suporta o elemento <code>audio</code>.</audio>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>CULTIVANDO A HUMILDADE</MainTitle>
          <SubTitle>GLORIFICAMOS A SUPREMACIA DO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: SALMO 8</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: DEUS SEJA LOUVADO, nº 17</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-17")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>CULTIVANDO A HUMILDADE</MainTitle>
          <SubTitle>PRIORIZAMOS A VONTADE DIVINA<br />EM RELAÇÃO À PRÓPRIA VONTADE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: JEREMIAS 17.5</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ROMANOS 12.2</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: VONTADE SOBERANA, nº 218</LiturgyStep>
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
          <MainTitle>CULTIVANDO A HUMILDADE</MainTitle>
          <SubTitle>PRIORIZAMOS A VONTADE DIVINA EM RELAÇÃO A PRÓPRIA VONTADE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: JEREMIAS 17.5</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: ROMANOS 12.2</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: VONTADE SOBERANA, nº 218</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-218")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>CULTIVANDO A HUMILDADE</MainTitle>
          <SubTitle>DEDICAMOS TEMPO PARA ESTAR EM COMUNHÃO COM CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: MATEUS 11.29</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 2 CORÍNTIOS 3.18</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICOS CONGREGACIONAIS</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <LyricsSlide>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Tomem o pão e o vinho</p>
          <p className="text-[68px] font-bold leading-normal">Que são o Meu corpo e sangue que dou por vocês</p>
          <p className="text-[68px] font-bold leading-normal">Lembrem que em breve Eu volto</p>
          <p className="text-[68px] font-bold leading-normal">Pra juntos cearmos à mesa no reino de Deus</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Tomem o pão e o vinho</p>
          <p className="text-[68px] font-bold leading-normal">Que são o Meu corpo e sangue que dou por vocês</p>
          <p className="text-[68px] font-bold leading-normal">Lembrem que em breve Eu volto</p>
          <p className="text-[68px] font-bold leading-normal">Pra juntos cearmos à mesa no reino de Deus</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Eu Sou o Pão da vida, da vida</p>
          <p className="text-[68px] font-bold leading-normal">Quem vem a Mim, nunca mais terá fome</p>
          <p className="text-[68px] font-bold leading-normal">Quem crê em Mim não terá sede</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Tomem o pão e o vinho</p>
          <p className="text-[68px] font-bold leading-normal">Que são o Meu corpo e sangue que dou por vocês</p>
          <p className="text-[68px] font-bold leading-normal">Lembrem que em breve Eu volto</p>
          <p className="text-[68px] font-bold leading-normal">Pra juntos cearmos à mesa no reino de Deus</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Venham a Mim</p>
          <p className="text-[68px] font-bold leading-normal">Os cansados, os cansados</p>
          <p className="text-[68px] font-bold leading-normal">E Eu lhes darei o alívio pra alma</p>
          <p className="text-[68px] font-bold leading-normal">E Eu lhes darei o Meu descanso</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Lembrem-se, Eu sou o bom Pastor</p>
          <p className="text-[68px] font-bold leading-normal">Lembrem-se, àqueles que o Pai me deu</p>
          <p className="text-[68px] font-bold leading-normal">Têm a vida eterna e não perecerão</p>
          <p className="text-[68px] font-bold leading-normal">Estão em Minhas mãos e não se perderão</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Por Meu sangue derramado</p>
          <p className="text-[68px] font-bold leading-normal">Os pecados são perdoados</p>
          <p className="text-[68px] font-bold leading-normal">O Meu corpo sim é dado</p>
          <p className="text-[68px] font-bold leading-normal">Por vocês, por vocês</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Por Meu sangue derramado</p>
          <p className="text-[68px] font-bold leading-normal">Os pecados são perdoados</p>
          <p className="text-[68px] font-bold leading-normal">O Meu corpo sim é dado</p>
          <p className="text-[68px] font-bold leading-normal">Por vocês, por vocês, por vocês</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Tomem o pão e o vinho</p>
          <p className="text-[68px] font-bold leading-normal">Que são o Meu corpo e sangue que dou por vocês</p>
          <p className="text-[68px] font-bold leading-normal">Lembrem que em breve Eu volto</p>
          <p className="text-[68px] font-bold leading-normal">Pra juntos cearmos à mesa no reino de Deus</p>
        </section>
      </LyricsSlide>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
      </SupperSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>CULTIVANDO A HUMILDADE</MainTitle>
          <SubTitle>DEDICAMOS TEMPO PARA ESTAR EM COMUNHÃO COM CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: MATEUS 11.29</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: 2 CORÍNTIOS 3.18</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CÂNTICOS CONGREGACIONAIS</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <LyricsSlide>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é exaltado</p>
          <p className="text-[72px] font-bold leading-normal">O Rei é exaltado nos céus</p>
          <p className="text-[72px] font-bold leading-normal">Eu o louvarei</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é exaltado</p>
          <p className="text-[72px] font-bold leading-normal">Pra sempre exaltado</p>
          <p className="text-[72px] font-bold leading-normal">O Seu nome louvarei</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é o Senhor</p>
          <p className="text-[72px] font-bold leading-normal">Sua verdade vai sempre reinar</p>
          <p className="text-[72px] font-bold leading-normal">Terra e céus</p>
          <p className="text-[72px] font-bold leading-normal">Glorificam seu Santo nome</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é exaltado</p>
          <p className="text-[72px] font-bold leading-normal">O Rei é exaltado nos céus</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é exaltado</p>
          <p className="text-[72px] font-bold leading-normal">O Rei é exaltado nos céus</p>
          <p className="text-[72px] font-bold leading-normal">Eu o louvarei</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é exaltado</p>
          <p className="text-[72px] font-bold leading-normal">Pra sempre exaltado</p>
          <p className="text-[72px] font-bold leading-normal">O Seu nome louvarei</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é o Senhor</p>
          <p className="text-[72px] font-bold leading-normal">Sua verdade vai sempre reinar</p>
          <p className="text-[72px] font-bold leading-normal">Terra e céus</p>
          <p className="text-[72px] font-bold leading-normal">Glorificam seu Santo nome</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é exaltado</p>
          <p className="text-[72px] font-bold leading-normal">O Rei é exaltado nos céus</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é o Senhor</p>
          <p className="text-[72px] font-bold leading-normal">Sua verdade vai sempre reinar</p>
          <p className="text-[72px] font-bold leading-normal">Terra e céus</p>
          <p className="text-[72px] font-bold leading-normal">Glorificam seu Santo nome</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[72px] font-bold leading-normal">Ele é exaltado</p>
          <p className="text-[72px] font-bold leading-normal">O Rei é exaltado nos céus</p>
        </section>
      </LyricsSlide>

      <LyricsSlide>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Deus, somente Deus</p>
          <p className="text-[68px] font-bold leading-normal">Criou o mundo e o que nele há</p>
          <p className="text-[68px] font-bold leading-normal">O ser que pode respirar</p>
          <p className="text-[68px] font-bold leading-normal">Existe pra mostrar</p>
          <p className="text-[68px] font-bold leading-normal">A glória do Senhor</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Deus, somente Deus</p>
          <p className="text-[68px] font-bold leading-normal">Os Seus mistérios pode revelar</p>
          <p className="text-[68px] font-bold leading-normal">Os Seus desígnios quem jamais um dia conheceu</p>
          <p className="text-[68px] font-bold leading-normal">Pois Deus somente é Deus</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Deus, somente Deus</p>
          <p className="text-[68px] font-bold leading-normal">Domina o trono do universo</p>
          <p className="text-[68px] font-bold leading-normal">Que a voz da criação se erga para dar</p>
          <p className="text-[68px] font-bold leading-normal">Louvor somente a Deus</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Deus, somente Deus</p>
          <p className="text-[68px] font-bold leading-normal">Eternamente em nós há de inspirar</p>
          <p className="text-[68px] font-bold leading-normal">A alegria de adorar</p>
          <p className="text-[68px] font-bold leading-normal">Desejo de exaltar a Deus</p>
          <p className="text-[68px] font-bold leading-normal">Somente a Deus</p>
        </section>
        <section className="text-left text-white bg-black">
          <p className="text-[68px] font-bold leading-normal">Deus, somente Deus</p>
          <p className="text-[68px] font-bold leading-normal">Domina o trono do universo</p>
          <p className="text-[68px] font-bold leading-normal">Que a voz da criação se erga para dar</p>
          <p className="text-[68px] font-bold leading-normal">Louvor somente a Deus</p>
        </section>
      </LyricsSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>CULTIVANDO A HUMILDADE</MainTitle>
          <SubTitle>DIRECIONAMOS A ATENÇÃO PARA CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: JOÃO 3.21-36 (Rev. Arnaldo Matias)</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>CULTIVANDO A HUMILDADE</MainTitle>
          <SubTitle>TRABALHAMOS ABNEGADAMENTE PELA EXPANSÃO DO REINO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: HÁ TRABALHO CERTO, nº 312</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-312")} />
      </SlideWithBackground>

      <SlideWithBackground>
        {/* <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} /> */}
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
