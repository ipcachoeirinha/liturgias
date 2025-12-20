import { getBibleText } from './functions.js'

const slidesFolder = "202512"
const date = "122125"
const slug = "natal-a-mensagem-de-redencao-para-os-filhos-de-deus"
const title = "NATAL, A MENSAGEM DE REDENÇÃO PARA OS FILHOS DE DEUS"
const htmlTitle = "Natal, A Mensagem de Redenção para os Filhos de Deus - 21 de Dezembro de 2025"
const bcwQuestionNumber = 47
const bcwQuestion = "O que o primeiro mandamento proíbe?"
const bcwAnswer = [`O primeiro mandamento proíbe negar, deixar de adorar ou
glorificar ao verdadeiro Deus, como Deus, e nosso Deus, e dar a
qualquer outro a adoração e a glória que só a ele são devidas.`]

const slides = [
  {
    id: "worship",
    subtitle: `A MENSAGEM DE REDENÇÃO NOS TROUXE VIDA EM CRISTO, POR
ISSO ADORAMOS COM CONSTANTE ALEGRIA`,
    steps: [
      { type: "alterned_reading", "text": "Salmo 19" },
      { type: "hymn", name: "Adoração", id: "230" },
      { type: "worship_prayer" }
    ],
    songLyrics: "230-adoracao.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: `A MENSAGEM DE REDENÇÃO NOS LEMBRA QUE ESTÁVAMOS PERDIDOS
SEM O SENHOR, MAS ELE NOS ENVIOU O SEU ÚNICO FILHO PARA QUE
PUDÉSSEMOS TER VIDA E RECEBER O FRUTO DO ESPÍRITO`,
    steps: [
      { type: "alterned_reading", "text": "Gálatas 5.16-26" },
      { type: "song", name: "O Amor de Deus (Logo Eu)", id: "71" },
      { type: "confession_prayer" },
      { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "o-amor-de-deus-logo-eu.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `A MENSAGEM DE REDENÇÃO NOS LEVA À GRATIDÃO, POIS
RECONHECEMOS QUE TUDO QUE TEMOS VEM DO SENHOR`,
    steps: [
      { type: "unison_reading", "text": "" },
      { type: "offering" },
      { type: "hymn", name: "O Primeiro Natal", id: "231" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "231-o-primeiro-natal.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: `SOMOS ALIMENTADOS CONSTANTEMENTE PELA PALAVRA DO
SENHOR`,
    steps: [
      { type: "preaching", text: "Gálatas 4.1-7", speaker: "Rev. Marcos Santana" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Gálatas 4.1-7")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "song", name: "Vasos Quebrados", id: "266" },
      // { type: "supper" },
      { type: "ending_prayer" },
      // { type: "blessings" }
    ],
    songLyrics: "vasos-quebrados.txt",
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
