import { getBibleText } from './functions.js'

const slidesFolder = "202601"
const date = "011126"
const slug = "uma-igreja-desejosa-pela-sabedoria-de-deus"
const title = "UMA IGREJA DESEJOSA PELA SABEDORIA DE DEUS"
const htmlTitle = "Uma igreja desejosa pela sabedoria de Deus - 11 de Janeiro de 2026"
const bcwQuestionNumber = 50
const bcwQuestion = `O que o segundo mandamento exige?`
const bcwAnswer = [`O segundo mandamento exige que recebamos, observemos e guardemos
puros e intactos o culto e as ordenanças religiosas que Deus instituiu na sua Palavra.`]

const slides = [
  {
    id: "worship",
    subtitle: `RECONHECE QUE SUA ADORAÇÃO
DEVE SER FEITA SOMENTE AO SENHOR`,
    steps: [
      { type: "alterned_reading", "text": "Salmo 119.1-8" },
      { type: "hymn", name: "Os Céus Proclamam", id: "22" },
      { type: "worship_prayer" }
    ],
    songLyrics: "22.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: `RECONHECE OS SEUS PECADOS E
CONFESSA AO SENHOR`,
    steps: [
      { type: "alterned_reading", "text": "Salmo 15" },
      { type: "song", name: "Salmo 15", id: "71" },
      { type: "confession_prayer" },
      { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "salmo-15.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `RECONHECE QUE TUDO QUE TEM
VEM DO SENHOR E POR ISSO DEVOLVEMOS NOSSOS DÍZIMOS E OFERTAS COM ALEGRIA
EM NOSSO CORAÇÃO`,
    steps: [
      { type: "reading", "text": "Atos 20.35" },
      { type: "offering" },
      { type: "song", name: "Diante Da Cruz", id: "231" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "diante-da-cruz.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: `RECONHECE QUE A PALAVRA DE
DEUS GUIA O SEU POVO E POR ISSO MEDITAMOS NELA`,
    steps: [
      { type: "preaching", text: "Tiago 1.5-8", speaker: "Rev. Marcos Santana" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Tiago 1.5-8")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "hymn", name: "O Deus Fiel", id: "32" },
      // { type: "supper" },
      { type: "ending_prayer" },
      { type: "blessings" }
    ],
    songLyrics: "32.txt",
    title: title
  },
  // {
  //   id: "supper",
  //   subtitle: "",
  //   steps: [],
  //   songLyrics: "vinho-e-pao.txt",
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
