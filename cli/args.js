import { getBibleText } from './functions.js'

const slidesFolder = "202511"
const date = "111625"
const slug = "uma-igreja-vitoriosa"
const title = "UMA IGREJA VITORIOSA"
const htmlTitle = "Uma igreja vitoriosa - 16 de Novembro de 2025"
const bcwQuestionNumber = 42
const bcwQuestion = "Em que se resumem os Dez Mandamentos?"
const bcwAnswer = [`Os dez mandamentos se resumem em amar ao Senhor nosso Deus
de todo o nosso coração, de toda a nossa alma, de todas as nossas forças e de todo o nosso
entendimento; e ao nosso próximo como a nós mesmos.`]

const slides = [
  {
    id: "worship",
    subtitle: "ADORA AO SENHOR COM MUITA ALEGRIA",
    steps: [
      { type: "alterned_reading", "text": "Salmo 96" },
      { type: "hymn", name: "Trindade Santíssima", id: "11" },
      { type: "worship_prayer" }
    ],
    songLyrics: "11-trindade-santissima.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: "RECONHECE SEUS PECADOS E MAZELAS E OS CONFESSAM AO SENHOR",
    steps: [
      { type: "unison_reading", "text": "Apocalipse 19.11-16" },
      { type: "song", name: "Santo para sempre", id: "67" },
      { type: "confession_prayer" },
      { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "santo-pra-sempre.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `TEM PRAZER EM CELEBRAR AO SENHOR COM SEUS DÍZIMOS E OFERTAS`,
    steps: [
      { type: "reading", "text": "Salmo 100" },
      { type: "offering" },
      { type: "song", name: "Rei das Nações", id: "32" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "rei-das-nacoes.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: "ESPERA ARDENTEMENTE PELAS PALAVRAS DE VIDA ETERNA",
    steps: [
      { type: "preaching", text: "Salmo 149", speaker: "Rev. Marcos Santana" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Salmo 149")
  },
  {
    id: "after-preaching",
    subtitle: "NOS ENVIA PARA VIVERMOS EM SEUS CAMINHOS",
    steps: [
      { type: "song", name: "63", id: "266" },
      // { type: "supper" },
      { type: "ending_prayer" },
      // { type: "blessings" }
    ],
    songLyrics: "63.txt",
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
