import { getBibleText } from './functions.js'

const slidesFolder = "202511"
const date = "113025"
const slug = "uma-igreja-que-honra-seu-proximo"
const title = "UMA IGREJA QUE HONRA SEU PRÓXIMO"
const htmlTitle = "Uma igreja que honra seu próximo - 30 de Novembro de 2025"
const bcwQuestionNumber = 44
const bcwQuestion = "O que nos ensina o prefácio dos Dez Mandamentos?"
const bcwAnswer = [`O prefácio dos Dez Mandamentos ensina-nos que nós
temos a obrigação de guardar todos os mandamentos de Deus, por
ser ele o Senhor nosso Deus e nosso Redentor.`]

const slides = [
  {
    id: "worship",
    subtitle: "ADORA AO SENHOR DE FORMA UNÍSSONA",
    steps: [
      { type: "unison_reading", "text": "Salmo 148" },
      { type: "song", name: "Ajuntamento", id: "11" },
      { type: "worship_prayer" }
    ],
    songLyrics: "ajuntamento.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: "CONFESSA SUA DISPLICÊNCIA EM AMAR AS AUTORIDADES",
    steps: [
      { type: "reading", "text": "Mateus 15.1-9" },
      { type: "hymn", name: "Coração Quebrantado", id: "67" },
      { type: "confession_prayer" },
      { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "67-coracao-quebrantado.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `É AGRADECIDO A DEUS PELA INSTRUÇÃO PATERNAL`,
    steps: [
      { type: "reading", "text": "Salmo 78.4" },
      { type: "offering" },
      { type: "hymn", name: "A igreja em Adoração", id: "3" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "3-a-igreja-em-adoracao.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: "OUVE O CONSELHO DA PALAVRA DE DEUS",
    steps: [
      { type: "preaching", text: "", speaker: "Ev. João Machado" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "song", name: "Corpo e Família", id: "266" },
      // { type: "supper" },
      { type: "ending_prayer" },
      // { type: "blessings" }
    ],
    songLyrics: "corpo-e-familia.txt",
    title: title
  },
  // {
  //   id: "supper",
  //   subtitle: "",
  //   steps: [

  //   ],
  //   songLyrics: "por-amor.txt",
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
