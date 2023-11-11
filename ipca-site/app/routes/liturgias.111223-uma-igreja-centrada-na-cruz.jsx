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

const PAGE_TITLE = "Uma Igreja Centrada na Cruz - 12 de Novembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-287", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-67", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-61", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-266", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/rude-cruz-instrumental", extension: "mp3", resourceType: "video" },
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

export default function UmPovoQueSeAjudaMutuamente() {
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
        <MainTitle>UMA IGREJA CENTRADA NA CRUZ</MainTitle>
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
          <MainTitle>UMA IGREJA CENTRADA NA CRUZ</MainTitle>
          <SubTitle>GLORIFICA A DEUS EM MEIO A PERSEGUIÇÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: SALMO 115</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: IGREJA ALERTA, nº 287</LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-287")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA CENTRADA NA CRUZ</MainTitle>
          <SubTitle>BUSCA UMA VIDA DE DEVOÇÃO A CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 2 CORÍNTIOS 5:14-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
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
          <MainTitle>UMA IGREJA CENTRADA NA CRUZ</MainTitle>
          <SubTitle>BUSCA UMA VIDA DE DEVOÇÃO A CRISTO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: 2 CORÍNTIOS 5:14-17</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.silent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.repent_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: CORAÇÃO QUEBRANTADO, nº 67</LiturgyStep>
          </LiturgySteps>
        </section>

        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-67")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>UMA IGREJA QUE NAO SE CANSA DE FAZER O BEM</MainTitle>
          <SubTitle>ENTREGA AS PRIMÍCIAS COM GRATIDÃO</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MALAQUIAS 3:6-12</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: AÇÕES DE GRAÇAS, nº 61</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.thankful_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-61")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE NAO SE CANSA DE FAZER O BEM</MainTitle>
        <SubTitle>ATENTA AOS ENSINOS DO SENHOR</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.pray_for_children}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: GÁLATAS 6:11-18 (Rev. Arnaldo Matias)</LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SlideWithBackground>
        <MainTitle>UMA IGREJA QUE NAO SE CANSA DE FAZER O BEM</MainTitle>
        <SubTitle>DESFRUTA DA COMUNHÃO COM O SALVADOR</SubTitle>

        <LiturgySteps>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: RUDE CRUZ, nº 318</LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
          <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
        </LiturgySteps>
      </SlideWithBackground>

      <SupperSlide>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
        </section>
        <section>
          <MainTitle>SANTA CEIA</MainTitle>
          <audio data-autoplay><source
            type="audio/mpeg"

            src={getAssetUrl("ipcachoeirinha/rude-cruz-instrumental")}


          />O seu navegador não suporta o elemento <code>audio</code>.</audio>
        </section>
        <section>
          <MainTitle>PERGUNTA 174</MainTitle>
          <div className='max-w-[55%] mt-4'>
            <h2 className='text-green-800 text-justify font-bold text-6xl mb-16 leading-normal'>O que é exigido dos que recebem o sacramento da Ceia, na ocasião de sua celebração?</h2>
          </div>
        </section>
        <section>
          <div className='max-w-[60%] mt-4'>
            <p className='text-green-800 text-justify font-bold text-6xl mb-16 leading-normal'>Exige-se dos que recebem o sacramento da Ceia que, durante a sua celebração, esperem em Deus, nessa ordenança, com toda a santa reverência e atenção;</p>
          </div>
        </section>
        <section>
          <div className='max-w-[60%] mt-4'>
            <p className='text-green-800 text-justify font-bold text-6xl mb-16 leading-normal'>Que, diligentemente, observem os elementos e os atos sacramentais;</p>
          </div>
        </section>
        <section>
          <div className='max-w-[60%] mt-4'>
            <p className='text-green-800 text-justify font-bold text-6xl mb-16 leading-normal'>Que, atentamente, discirnam o corpo do Senhor e, cheios de amor, meditem na sua morte e sofrimentos, e, assim, sejam despertados a um exercício das suas graças, julgando-se a si mesmos e entristecendo-se pelo pecado;</p>
          </div>
        </section>
        <section>
          <div className='max-w-[60%] mt-4'>
            <p className='text-green-800 text-justify font-bold text-6xl mb-16 leading-normal'>Tendo fome e sede ardentes em Cristo, alimentando-se nele pela fé, recebendo da sua plenitude, confiando nos seus méritos, regozijando-se no seu amor, sendo gratos pela sua graça e renovando o pacto que fizeram com Deus e o amor que votaram a todos os crentes.</p>
          </div>

        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-266")} />
      </SupperSlide>

      <SlideWithBackground>
        <section>
          <MainTitle>POSLÚDIO</MainTitle>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/uma-bencao-antiga-letra")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>AVISOS</MainTitle>
        </section>
      </SlideWithBackground>

    </RevealJsBaseElement>
  )
}
