import { getBibleText } from './functions.js'

const slidesFolder = "202601"
const date = "011826"
const slug = "uma-igreja-que-se-gloria-no-senhor"
const title = "UMA IGREJA QUE SE GLORIA NO SENHOR"
const htmlTitle = "Uma igreja que se gloria no Senhor - 18 de Janeiro de 2026"
const bcwQuestionNumber = 51
const bcwQuestion = `O que o segundo mandamento proíbe?`
const bcwAnswer = [`O segundo mandamento proíbe adorar a Deus por meio de imagens, ou de qualquer outra
maneira não prescrita em sua Palavra.`]

const slides = [
  {
    id: "worship",
    subtitle: `ADORA AO SENHOR, POIS ELE É A FONTE DE
NOSSA ADORAÇÃO`,
    steps: [
      { type: "alterned_reading", "text": "Salmo 96" },
      { type: "hymn", name: "Trindade Santíssima", id: "11" },
      { type: "worship_prayer" }
    ],
    songLyrics: "11.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: `RECONHECE OS SEUS PECADOS E
CONFESSA AO SENHOR`,
    steps: [
      { type: "alterned_reading", "text": "Salmo 32" },
      { type: "unison_reading", "text": "Mateus 5.3" },
      { type: "hymn", name: "Perdão", id: "71" },
      { type: "confession_prayer" },
      { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "71.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `RECONHECE QUE TUDO QUE TEM VEM DO
SENHOR E POR ISSO DEVOLVEMOS NOSSOS DÍZIMOS E OFERTAS COM ALEGRIA EM
NOSSO CORAÇÃO`,
    steps: [
      { type: "reading", "text": "Jeremias 9.23-24" },
      { type: "offering" },
      { type: "song", name: "Salmo 15", id: "231" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "salmo-15.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: `ALIMENTA-SE CONSTANTEMENTE DE SUA
PALAVRA`,
    steps: [
      { type: "preaching", text: "Tiago 1.9-11", speaker: "Rev. Marcos Santana" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Tiago 1.9-11")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "song", name: "Coração Igual ao Teu", id: "32" },
      // { type: "supper" },
      { type: "ending_prayer" },
      { type: "blessings" }
    ],
    songLyrics: "coracao-igual-ao-teu.txt",
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
