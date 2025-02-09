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

const PAGE_TITLE = "Percorrendo um caminho de humildade - 9 de Fevereiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-11", extension: "mp4", resourceType: "video" },
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
        <MainTitle>PERCORRENDO O CAMINHO DA HUMILDADE</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PERCORRENDO O CAMINHO DA HUMILDADE</MainTitle>
          <SubTitle>O CRISTÃO BUSCA ADORAR AO SENHOR COM HUMILDADE E SINCERIDADE</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MATEUS 11.28-30</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: TRINDADE SANTÍSSIMA, nº 11</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
          </LiturgySteps>
        </section>
        <VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-11")} />
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Deus Onipotente!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Louvam nossas vozes teu nome com fervor!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Justo e compassivo!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            És Deus Triúno, Excelso Criador!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Nós, os pecadores,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Não podemos ver tua glória sem temor.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tu somente és Santo! Só tu és perfeito,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Deus Soberano, imenso em teu amor.
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Todos os remidos,
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Juntos com os anjos, proclamam teu louvor!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Antes de formar-se o firmamento e a terra
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Eras, e sempre és, e hás de ser Senhor!
          </p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Deus Onipotente!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Tuas obras louvam teu nome com fervor.
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Santo! Santo! Santo! Justo e compassivo!
          </p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">
            Deus Soberano, Excelso Criador! Amém.
          </p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PERCORRENDO O CAMINHO DA HUMILDADE</MainTitle>
          <SubTitle>O CRISTÃO RECONHECE SEUS PECADOS E COM HUMILDADE CONFESSA-OS AO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: ROMANOS 8.31-39</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: NECESSIDADE, nº 68</LiturgyStep>
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
          <MainTitle>PERCORRENDO O CAMINHO DA HUMILDADE</MainTitle>
          <SubTitle>PERCORRENDO UM CAMINHO DE HUMILDADE, VIVEMOS CONSTANTEMENTE NA
            DEPENDÊNCIA DO NOSSO DEUS E DEVOLVEMOS A ELE OS NOSSOS DÍZIMOS E OFERTAS.</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: MATEUS 6.19-21</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO VENHO SENHOR</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Venho, Senhor, minha vida oferecer</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Como oferta de amor e sacrifício</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quero minha vida a Ti entregar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Como oferta viva em Teu altar</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Venho, Senhor, minha vida oferecer</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Como oferta de amor e sacrifício</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Quero minha vida a Ti entregar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Como oferta viva em Teu altar</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois pra Te adorar foi que eu nasci</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cumpre em mim o Teu querer</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Faça o que está em Teu coração</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E que a cada dia eu queira mais e mais</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estar ao Teu lado, Senhor</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois pra Te adorar foi que eu nasci</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cumpre em mim o Teu querer</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Faça o que está em Teu coração</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E que a cada dia eu queira mais e mais</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estar ao Teu lado, Senhor</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E que a cada dia eu queira mais e mais</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estar ao Teu lado</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Estar ao Teu lado</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Senhor</p>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PERCORRENDO O CAMINHO DA HUMILDADE</MainTitle>
          <SubTitle>PERCORRENDO UM CAMINHO DE HUMILDADE, OBSERVAMOS ATENTAMENTE A
            PALAVRA DO SENHOR</SubTitle>

          <LiturgySteps>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 2.1-4 (Rev. Marcos Santana)</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: A VOZ DO EVANGELHO, nº 304</LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
            <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
          </LiturgySteps>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A voz do Evangelho</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Já se fez ouvir aqui,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Publicando, em som alegre,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">O que Deus já fez por ti.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois tanto ao mundo amou</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">E ao perdido pecador,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que do céu lhe deu seu Filho</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Para ser seu Redentor.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Santa paz e perdão,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">É a nova lá dos céus!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Santa paz e perdão,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Bendito o nosso Deus!</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A voz do Evangelho</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Segurança, vida e paz,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">É o amor de Jesus Cristo</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que o perdão de Deus nos traz.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">As novas se nos dão</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">De haver um Salvador,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Poderoso e mui bondoso</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Que perdoa o pecador.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Santa paz e perdão,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">É a nova lá dos céus!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Santa paz e perdão,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Bendito o nosso Deus!</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">A voz do Evangelho</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Vem a todos avisar</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Do perigo, grande e grave,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Para quem se descuidar.</p>
        </section>

        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Salvai-vos desde já,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Não vos detenhais no mal,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Cobiçando os seus prazeres,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Pois vos pode ser fatal.</p>
        </section>
        <section className="bg-black">
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Santa paz e perdão,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">É a nova lá dos céus!</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Santa paz e perdão,</p>
          <p className="text-zinc-50 text-[65px] font-bold text-left leading-none mb-8">Bendito o nosso Deus!</p>
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
