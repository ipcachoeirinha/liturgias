import { getBibleText } from './functions.js'

const slidesFolder = "202511"
const date = "110125"
const slug = "uma-igreja-que-ama-ao-senhor"
const title = "UMA IGREJA QUE AMA AO SENHOR"
const htmlTitle = "Uma Igreja que ama ao Senhor - 01 de Novembro de 2025"
const bcwQuestionNumber = 41
const bcwQuestion = "Onde a lei moral está resumidamente compreendida?"
const bcwAnswer = [`A lei moral está resumidamente compreendida nos Dez
Mandamentos.`]

const slides = [
  {
    id: "worship",
    subtitle: "LOUVA-O POR CAUSA DO SEU AMOR",
    steps: [
      { type: "unison_reading", "text": "Naum 1.7" },
      { type: "unison_reading", "text": "Jeremias 31.3" },
      { type: "song", name: "Ele É Exaltado", id: "177" },
      { type: "worship_prayer" }
    ],
    songLyrics: "ele-e-exaltado.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: "CLAMA POR DIVINO FAVOR",
    steps: [
      { type: "alterned_reading", "text": "Obadias 1.11-14" },
      { type: "hymn", name: "Coração Quebrantado", id: "67" },
      { type: "confession_prayer" },
      // { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: false, //{ questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "67-coracao-quebrantado.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `AGRADECE COM ALEGRE LOUVOR`,
    steps: [
      { type: "reading", "text": "1 Pedro 1.3-9" },
      { type: "offering" },
      { type: "song", name: "Grande é o Senhor", id: "32" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "grande-e-o-senhor.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: "ATENTA À PALAVRA COM FERVOR",
    steps: [
      { type: "preaching", text: "Cânticos 1.2-4", speaker: "Ev. João Gabriel Machado" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Cânticos 1.2-4")
  },
  {
    id: "after-preaching",
    subtitle: "VIVE NA PALAVRA COM VIGOR",
    steps: [
      { type: "hymn", name: "A Igreja em Adoração", id: "3" },
      // { type: "supper" },
      { type: "ending_prayer" },
      // { type: "blessings" }
    ],
    songLyrics: "3-a-igreja-em-adoracao.txt",
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
