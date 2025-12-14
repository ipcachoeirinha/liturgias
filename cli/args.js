import { getBibleText } from './functions.js'

const slidesFolder = "202512"
const date = "121425"
const slug = "natal-a-luz-do-cristo-ressuscitado"
const title = "NATAL À LUZ DO CRISTO RESSUSCITADO"
const htmlTitle = "Natal à Luz do Cristo Ressuscitado - 14 de Dezembro de 2025"
const bcwQuestionNumber = 46
const bcwQuestion = "O que exige o primeiro mandamento?"
const bcwAnswer = [`O primeiro mandamento exige de nós conhecer e
reconhecer a Deus como único Deus verdadeiro e nosso Deus, e como
tal adorá-lo.`]

const slides = [
  {
    id: "worship",
    subtitle: "ADORAMOS AO CRISTO RESSUSCITADO COM CONSTANTE ALEGRIA",
    steps: [
      { type: "alterned_reading", "text": "Lucas 2.8-20" },
      { type: "hymn", name: "Adoração", id: "230" },
      { type: "worship_prayer" }
    ],
    songLyrics: "230-adoracao.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: `O CRISTO RESSUSCITADO PAGOU UM ALTO PREÇO POR NOSSOS
PECADOS. SOMENTE POR ELE PODEMOS RECEBER O PERDÃO PELOS
NOSSOS PECADOS`,
    steps: [
      { type: "reading", "text": "João 2.23-25" },
      { type: "hymn", name: "Perdão", id: "71" },
      { type: "confession_prayer" },
      { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "71-perdao.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `ADORAMOS AO CRISTO RESSUSCITADO COM TUDO QUE TEMOS,
POIS RECONHECEMOS QUE A NOSSA VIDA PERTENCE A ELE`,
    steps: [
      { type: "unison_reading", "text": "João 2.13-22" },
      { type: "offering" },
      { type: "song", name: "Bom estarmos aqui", id: "3" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "bom-estarmos-aqui.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: `SOMOS ALIMENTADOS CONSTANTEMENTE PELA PALAVRA DO
SENHOR`,
    steps: [
      { type: "preaching", text: "João 20.11-18", speaker: "Sem. Taison Dorneles" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("João 20.11-18")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "song", name: "Nas Estrelas", id: "266" },
      // { type: "supper" },
      { type: "ending_prayer" },
      // { type: "blessings" }
    ],
    songLyrics: "nas-estrelas.txt",
    title: title
  },
  // {
  //   id: "supper",
  //   subtitle: "",
  //   steps: [],
  //   songLyrics: "digno-e-o-senhor-versao-2.txt",
  //   title: "Santa Ceia"
  // },
  // {
  //   id: "after-supper",
  //   subtitle: "",
  //   steps: [
  //     { type: "ending_prayer" },
  //     { type: "blessings" }
  //   ],
  //   songLyrics: false,
  //   title: title
  // },
]

const assets = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/background", extension: "png", resourceType: "image" }
]

const args = {
  "date": date,
  "title": title,
  "htmlTitle": htmlTitle,
  "slug": slug,
  "url": `${date}-${slug}`,
  "type": "normal",
  "slide_filename": `${date}-${slug}`,
  "download_filename": `${date}-${slug}.download`,
  "zip_filename": `${date}-${slug}.zip`,
  "assets": assets,
  "slides": slides,
  "slidesFolder": slidesFolder
}

export { args }

console.log(`
URL="${args.url}"
ZIP_FILENAME="${args.zip_filename}"
`.trim())
