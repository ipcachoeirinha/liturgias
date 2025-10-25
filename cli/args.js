import { getBibleText } from './functions.js'

const slidesFolder = "202510"
const date = "102625"
const slug = "a-igreja-que-adora-a-deus-de-forma-verdadeira"
const title = "A IGREJA QUE ADORA A DEUS DE FORMA VERDADEIRA"
const htmlTitle = "A igreja que adora a Deus de forma verdadeira - 26 de Outubro de 2025"
const bcwQuestionNumber = 41
const bcwQuestion = "Onde a lei moral está resumidamente compreendida?"
const bcwAnswer = [`A lei moral está resumidamente compreendida nos Dez
Mandamentos.`]

const slides = [
  {
    id: "worship",
    subtitle: "O ADORA EM ESPÍRITO E EM VERDADE",
    steps: [
      { type: "reading", "text": "João 4:23-24" },
      { type: "song", name: "Em Espirito e em verdade", id: "177" },
      { type: "worship_prayer" }
    ],
    songLyrics: "em-espirito-e-em-verdade.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: "VIVE UMA VIDA PURA",
    steps: [
      { type: "reading", "text": "Efésios 5:3-12" },
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
    subtitle: `TEM SEUS PECADOS PERDOADOS MEDIANTE A FÉ`,
    steps: [
      { type: "reading", "text": "Colossenses 3:15-17" },
      { type: "offering" },
      { type: "song", name: "Quebrantado", id: "32" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "quebrantado.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: "É INSTRUÍDA POR SUA PALAVRA",
    steps: [
      { type: "preaching", text: "Tiago 1:26-27", speaker: "Sem. Vinícius Genuíno" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Tiago 1:26-27")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "song", name: "Venho Senhor Minha Vida Oferecer", id: "155" },
      // { type: "supper" },
      { type: "ending_prayer" },
      // { type: "blessings" }
    ],
    songLyrics: "venho-senhor-minha-vida-oferecer.txt",
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
