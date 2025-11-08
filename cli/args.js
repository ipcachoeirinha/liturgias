import { getBibleText } from './functions.js'

const slidesFolder = "202511"
const date = "110925"
const slug = "o-deus-de-toda-sabedoria"
const title = "O DEUS DE TODA SABEDORIA"
const htmlTitle = "O Deus de toda sabedoria - 09 de Novembro de 2025"
const bcwQuestionNumber = 41
const bcwQuestion = "Onde a lei moral está resumidamente compreendida?"
const bcwAnswer = [`A lei moral está resumidamente compreendida nos Dez
Mandamentos.`]

const slides = [
  {
    id: "worship",
    subtitle: "É LOUVADO PELA PRONFUNDIDADE DE SUA SABEDORIA E CONHECIMENTO",
    steps: [
      { type: "alterned_reading", "text": "Romanos 11:33-36" },
      { type: "song", name: "Ele É Exaltado", id: "177" },
      { type: "worship_prayer" }
    ],
    songLyrics: "ele-e-exaltado.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: "CONHECE NOSSOS PECADOS E NOS CHAMA AO ARREPENDIMENTO",
    steps: [
      { type: "reading", "text": "Jeremias 17.5-10" },
      { type: "song", name: "Bondade de Deus", id: "67" },
      { type: "confession_prayer" },
      // { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: false, //{ questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "bondade-de-deus.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `NOS DÁ REDENÇÃO EM CRISTO JESUS`,
    steps: [
      { type: "unison_reading", "text": "1 Coríntios 1.30-31" },
      { type: "offering" },
      { type: "song", name: "Vim para adorar-te", id: "32" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "vim-para-adorar-te.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: "EDIFICA SUA IGREJA POR MEIO DE SUA PALAVRA",
    steps: [
      { type: "preaching", text: "Provérbios 9:13-18", speaker: "Sem. Vinícius Genuíno" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Provérbios 9:13-18")
  },
  {
    id: "after-preaching",
    subtitle: "NOS ENVIA PARA VIVERMOS EM SEUS CAMINHOS",
    steps: [
      { type: "hymn", name: "Rude Cruz", id: "266" },
      // { type: "supper" },
      { type: "ending_prayer" },
      // { type: "blessings" }
    ],
    songLyrics: "266-rude-cruz.txt",
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
