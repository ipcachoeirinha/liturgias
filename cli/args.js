import { getBibleText } from './functions.js'

const slidesFolder = "202510"
const date = "101925"
const slug = "seja-fiel-ate-a-morte"
const title = "SEJA FIEL ATÉ A MORTE"
const htmlTitle = "Seja Fiel Até a Morte - 19 de Outubro de 2025"
const bcwQuestionNumber = 41
const bcwQuestion = "Onde a lei moral está resumidamente compreendida?"
const bcwAnswer = [`A lei moral está resumidamente compreendida nos Dez
Mandamentos.`]

const slides = [
  {
    id: "worship",
    subtitle: "UMA IGREJA FIEL AO SENHOR O ADORA EM ESPÍRITO E EM VERDADE",
    steps: [
      { type: "alterned_reading", "text": "Salmo 103" },
      { type: "hymn", name: "Firme nas promessas", id: "177" },
      { type: "worship_prayer" }
    ],
    songLyrics: "177-firme-nas-promessas.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: "UMA IGREJA FIEL AO SENHOR RECONHECE SEUS PECADOS E MAZELAS E OS CONFESSAM AO SENHOR",
    steps: [
      { type: "reading", "text": "1 João 1.5-10" },
      { type: "song", name: "Só em ti", id: "74" },
      { type: "confession_prayer" },
      { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "so-em-ti.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `UMA IGREJA FIEL AO SENHOR TEM PRAZER EM CELEBRÁ-LO COM SEUS DÍZIMOS E OFERTAS`,
    steps: [
      { type: "reading", "text": "Provérbios 3.9-10" },
      { type: "offering" },
      { type: "song", name: "Jesus em tua presença", id: "32" },
      { type: "custom", value: "Oração" }
    ],
    songLyrics: "jesus-em-tua-presenca.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: "JESUS, A PALAVRA FINAL DE DEUS, TRANSFORMA O NOSSO CORAÇÃO PARA COMPREENSÃO DO EVANGELHO ANUNCIADO",
    steps: [
      { type: "preaching", text: "Apocalipse 2.8-11", speaker: "Rev. André Silvério" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Apocalipse 2.8-11")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "hymn", name: "Castelo Forte", id: "155" },
      // { type: "supper" },
      { type: "ending_prayer" },
      { type: "blessings" }
    ],
    songLyrics: "155-castelo-forte.txt",
    title: title
  },
  // {
  //   id: "supper",
  //   subtitle: "",
  //   steps: [

  //   ],
  //   songLyrics: "jesus-e-o-centro.txt",
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
