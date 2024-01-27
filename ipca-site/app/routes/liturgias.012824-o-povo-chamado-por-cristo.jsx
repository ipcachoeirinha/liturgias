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

const PAGE_TITLE = "O Povo Chamado Por Cristo - 28 de Janeiro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/baptism-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-3", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-47", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-336", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-386", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" },
]

export const meta = () => {
  return [
    { title: PAGE_TITLE }
  ]
}

export async function loader(remixLoaderContext) {
  return presentationSlideRemixLoader(remixLoaderContext, CDN_ASSETS_LIST)
}

export default function AEncarnacaoDeJesusCristo() {
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
  const BaptismSlide = createSlideSectionWithBackgroundImage(getAssetUrl("ipcachoeirinha/baptism-bg"))

  return (
    <RevealJsBaseElement>
      <SlideWithBackground>
        <MainTitle>O POVO CHAMADO POR CRISTO</MainTitle>
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
          <MainTitle>O POVO CHAMADO POR CRISTO</MainTitle>
          <SubTitle>SE ALEGRA NA ADORAÇÃO DOMINICAL</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: SALMO 122</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A IGREJA EM ADORAÇÃO, nº 3</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O POVO CHAMADO POR CRISTO</MainTitle>
          <SubTitle>FOI RECONCILIADO COM DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 JOÃO 2.1-2</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: LOUVOR E GLÓRIA, nº 47</LiturgyStep>
          </LiturgySteps>
        </section>
        <section>

          <MainTitle>ORAÇÃO SILENCIOSA</MainTitle>

          <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>

        <section>
          <MainTitle>O POVO CHAMADO POR CRISTO</MainTitle>
          <SubTitle>FOI RECONCILIADO COM DEUS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: 1 JOÃO 2.1-2</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: LOUVOR E GLÓRIA, nº 47</LiturgyStep>
          </LiturgySteps>
        </section>

        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-47")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O POVO CHAMADO POR CRISTO</MainTitle>
          <SubTitle>DECLARA PUBLICAMENTE SUA FÉ</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>BATISMO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CREDO APOSTÓLICO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TRANSFORMAÇÃO, nº 336</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <BaptismSlide>
        <section>
          <MainTitle>BATISMO</MainTitle>
        </section>
      </BaptismSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>O POVO CHAMADO POR CRISTO</MainTitle>
          <SubTitle>DECLARA PUBLICAMENTE SUA FÉ</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>BATISMO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CREDO APOSTÓLICO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TRANSFORMAÇÃO, nº 336</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>CREDO APOSTÓLICO</MainTitle>
          
          <p className='text-green-800 font-bold text-5xl mb-16 tracking-wide text-justify leading-normal'>Creio em Deus Pai, Todo-poderoso, Criador do Céu e da terra.</p>
        </section>
        <section>
          <MainTitle>CREDO APOSTÓLICO</MainTitle>
          
          <p className='text-green-800 font-bold text-5xl mb-16 tracking-wide text-justify leading-normal'>Creio em Jesus Cristo, seu único Filho, nosso Senhor, o qual foi concebido por obra do Espírito Santo; nasceu da virgem Maria; padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado; desceu ao Hades; ressurgiu dos mortos ao terceiro dia; subiu ao Céu; está sentado à direita de Deus Pai Todo-poderoso, donde há de vir para julgar os vivos e os mortos.</p>
        </section>
        <section>
          <MainTitle>CREDO APOSTÓLICO</MainTitle>
          
          <p className='text-green-800 font-bold text-5xl mb-16 tracking-wide text-justify leading-normal'>Creio no Espírito Santo; na Santa Igreja Universal; na comunhão dos santos; na remissão dos pecados; na ressurreição do corpo; na vida eterna. Amém.</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O POVO CHAMADO POR CRISTO</MainTitle>
          <SubTitle>DECLARA PUBLICAMENTE SUA FÉ</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>BATISMO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CREDO APOSTÓLICO</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TRANSFORMAÇÃO, nº 336</LiturgyStep>
          </LiturgySteps>
        </section>

        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-336")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>O POVO CHAMADO POR CRISTO</MainTitle>
        <SubTitle>APRENDE OS ENSINOS DO MESTRE</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: JOÃO 1:43-51 (Rev. Arnaldo Matias)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>O POVO CHAMADO POR CRISTO</MainTitle>
          <SubTitle>ANUNCIA AS BOAS NOVAS AOS PERDIDOS</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TESTEMUNHO, nº 386</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-386")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} />
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
