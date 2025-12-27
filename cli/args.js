import { getBibleText } from './functions.js'

const slidesFolder = "202512"
const date = "122825"
const slug = "gratidao-a-deus-por-uma-igreja-missionaria"
const title = "GRATIDÃO A DEUS POR UMA IGREJA MISSIONÁRIA"
const htmlTitle = "Gratidão a Deus por uma igreja missionária - 28 de Dezembro de 2025"
const bcwQuestionNumber = 48
const bcwQuestion = `O que nos é ensinado pelas palavras “diante de mim”,
no primeiro mandamento?`
const bcwAnswer = [`As palavras, “diante de mim”, no primeiro mandamento, nos
ensinam que Deus, que vê todas as coisas, toma conhecimento e muito se
ofende do pecado de ter-se outro deus em seu lugar.`]

const slides = [
  {
    id: "worship",
    subtitle: `A GRATIDÃO A DEUS POR UMA IGREJA MISSIONÁRIA NOS LEVA A UMA
ADORAÇÃO VERDADEIRA AO SENHOR`,
    steps: [
      { type: "alterned_reading", "text": "Efésios 1.3-14" },
      { type: "hymn", name: "A Igreja Em Adoração", id: "3" },
      { type: "worship_prayer" }
    ],
    songLyrics: "3-a-igreja-em-adoracao.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: `A GRATIDÃO DE UMA IGREJA MISSIONÁRIA NOS LEVA A RECONHECER
NOSSAS LUTAS CONTRA OS NOSSOS PECADOS`,
    steps: [
      { type: "alterned_reading", "text": "Salmo 15" },
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
    subtitle: `DEVOLVEMOS NOSSOS DÍZIMOS E OFERTAS PARA CONTRIBUIÇÃO NA
EXPANSÃO DO EVANGELHO`,
    steps: [
      { type: "reading", "text": "Malaquias 3.6-12" },
      { type: "offering" },
      { type: "song", name: "Santo Pra Sempre", id: "231" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "santo-pra-sempre.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: `COM ALEGRIA RECEBEMOS O EVANGELHO PELA PREGAÇÃO DA PALAVRA
DE DEUS`,
    steps: [
      { type: "preaching", text: "Filipenses 1.3-11", speaker: "Sem. Eduardo Menezes" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Filipenses 1.3-11")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "hymn", name: "Aflição e Paz", id: "108" },
      // { type: "supper" },
      { type: "ending_prayer" },
      // { type: "blessings" }
    ],
    songLyrics: "108.txt",
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
