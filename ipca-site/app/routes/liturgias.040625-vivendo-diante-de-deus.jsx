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

const PAGE_TITLE = "Vivendo Diante de Deus - 06 de Abril de 2025"
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
        <MainTitle>VIVENDO DIANTE DE DEUS</MainTitle>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
          <MainTitle>PRELÚDIO</MainTitle>
        </section>
      </SlideWithBackground>

      <SlideWithBackground>
        <section>
            <MainTitle>VIVENDO DIANTE DE DEUS</MainTitle>
            <SubTitle>DIANTE DE DEUS, ADORAMOS EM ESPÍRITO E EM VERDADE</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: JOÃO 4.19-24</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: VIVIFICAÇÃO, nº 132</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.worship_prayer}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu, que sobre a amarga cruz</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Revelaste teu amor;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tu, que vives, ó Jesus,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vivifica-nos, Senhor!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem! Oh! Vem, Jesus Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Nossas almas despertar!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com teu santo e puro amor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem, Senhor, nos inflamar!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Oh! Vem! Oh! Vem Nossas almas inflamar!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eis o mundo tentador</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A querer nos atrair;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sem teu fogo abrasador,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Não podemos resistir.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem! Oh! Vem, Jesus Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Nossas almas despertar!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com teu santo e puro amor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem, Senhor, nos inflamar!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Oh! Vem! Oh! Vem Nossas almas inflamar!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Quantos que corriam bem,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">De ti longe agora vão!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Outros seguem, mas, também,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sem fervor vivendo estão.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem! Oh! Vem, Jesus Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Nossas almas despertar!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com teu santo e puro amor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem, Senhor, nos inflamar!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Oh! Vem! Oh! Vem Nossas almas inflamar!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem agora consumir</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tudo quanto, ó Salvador,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Quer altivo resistir</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao teu brando e santo amor.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem! Oh! Vem, Jesus Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Nossas almas despertar!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Com teu santo e puro amor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vem, Senhor, nos inflamar!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Oh! Vem! Oh! Vem Nossas almas inflamar!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>VIVENDO DIANTE DE DEUS</MainTitle>
            <SubTitle>RECONHECENDO A MAJESTADE DE NOSSO DEUS, CONFESSAMOS NOSSOS PECADOS E DIANTE DELE, RECEBEMOS O SEU PERDÃO</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.alterned_reading}>: GÁLATAS 5.16-26</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.hymn}>: SINCERIDADE, nº 74</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.confession_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>PERGUNTA 13 DO BREVE CATECISMO DE WESTMINSTER</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Jesus Senhor, me achego a ti,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Tua ira santa mereci;</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O teu favor estende aqui!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aceita um pecador!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu venho como estou!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, venho como estou!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Porque Jesus por mim morreu,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu venho como estou!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">As minhas culpas grandes são,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mas Tu, que não morreste em vão,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me podes conceder perdão!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aceita um pecador!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu venho como estou!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, venho como estou!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Porque Jesus por mim morreu,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu venho como estou! </p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Oh! Vem agora Salvador,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Livrar-me por teu grande amor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pois Tu, Jesus, és meu Senhor,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Aceita um pecador.</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu venho como estou!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sim, venho como estou!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Porque Jesus por mim morreu,</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Eu venho como estou!</p>
</section></SlideWithBackground>
<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA 13: Os nossos primeiros pais se conservaram no estado em que foram criados?</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>Nossos primeiros pais, sendo deixados à liberdade da sua própria vontade, caíram do estado em que foram criados, pecando contra Deus.</p>
            </section>
          </SlideWithBackground>
    
<SlideWithBackground>
        <section>
            <MainTitle>VIVENDO DIANTE DE DEUS</MainTitle>
            <SubTitle>VIVENDO DIANTE DE DEUS, RECONHECEMOS QUE TUDO QUE TEMOS, VEM DO SENHOR</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.reading}>: PROVÉRBIOS 3.9-10</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.unison_reading}>: EFÉSIOS 6.10</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.offering}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>CANÇÃO: GLÓRIA PARA SEMPRE</LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.custom}>ORAÇÃO</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Glória pra sempre, ao cordeiro de Deus</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A Jesus, o Senhor, ao Leão de Judá</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">A raiz de Davi, que venceu e o livro abrirá</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O céu, a terra e o mar, e tudo o que neles há</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">O adorarão, e confessarão</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Jesus Cristo é o Senhor!</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ele é o Senhor, ele é o Senhor!</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ressurreto dentre os mortos, ele é o Senhor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Todo joelho se dobrará, toda língua confessará</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que Jesus Cristo é o Senhor!</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>VIVENDO DIANTE DE DEUS</MainTitle>
            <SubTitle>DIANTE DE DEUS NOS DEDICAMOS EM OUVIR DA SUA PALAVRA E APLICAMOS-A EM NOSSO DIA A DIA</SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.preaching}>: Filipenses 4.8-9 (Rev. Marcos Santana)</LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SlideWithBackground>
        <section>
            <MainTitle>VIVENDO DIANTE DE DEUS</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
                <LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.supper}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.ending_prayer}></LiturgyStep>
<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.blessings}></LiturgyStep>
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    


<SupperSlide>
            <section>
              <MainTitle>SANTA CEIA</MainTitle>
            </section>
          </SupperSlide>
<SlideWithBackground><section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Graças eu te dou, Pai</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pelo preço que pagou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sacrifício de amor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Que me comprou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ungido do Senhor</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pelos cravos em tuas mãos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Graças eu te dou, ó meu Senhor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Lavou minha mente e coração</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me deu perdão</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Restaurou-me a comunhão</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Digno é o Senhor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sobre o trono está</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Soberano, criador</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vou sempre te adorar</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Elevo minhas mãos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao Cristo que venceu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cordeiro de Deus morreu por mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mas ressuscitou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Digno é o Senhor</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Pelos cravos em tuas mãos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Graças eu te dou, ó meu Senhor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Lavou minha mente e coração</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Me deu perdão</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Restaurou-me a comunhão</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Digno é o Senhor</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Sobre o trono está</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Soberano, criador</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Vou sempre te adorar</p>
</section>

<section className="bg-zinc-50">
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Elevo minhas mãos</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Ao Cristo que venceu</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Cordeiro de Deus morreu por mim</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Mas ressuscitou</p>
  <p className="text-black text-[84px] font-bold text-left leading-none mb-12">Digno é o Senhor</p>
</section></SlideWithBackground>

<SlideWithBackground>
        <section>
            <MainTitle>VIVENDO DIANTE DE DEUS</MainTitle>
            <SubTitle></SubTitle>

            <LiturgySteps>
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
