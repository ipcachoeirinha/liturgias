import { getBibleText } from './functions.js'

const slidesFolder = "202511"
const date = "112325"
const slug = "uma-igreja-madura-em-cristo"
const title = "UMA IGREJA MADURA EM CRISTO"
const htmlTitle = "Uma igreja madura em Cristo - 23 de Novembro de 2025"
const bcwQuestionNumber = 43
const bcwQuestion = "Qual é o prefácio dos dez mandamentos?"
const bcwAnswer = [`O prefácio dos dez mandamentos é: “Eu sou o Senhor teu Deus, que te tirei da
terra do Egito, da casa da servidão”.`]

const slides = [
  {
    id: "worship",
    subtitle: "SABE QUE SOMENTE O SENHOR É DIGNO DE TODA ADORAÇÃO",
    steps: [
      { type: "alterned_reading", "text": "Salmo 98" },
      { type: "song", name: "Ajuntamento", id: "11" },
      { type: "worship_prayer" }
    ],
    songLyrics: "ajuntamento.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: "RECONHECE OS SEUS PECADOS E CONFESSA-OS AO SENHOR",
    steps: [
      { type: "unison_reading", "text": "Hebreus 5.11-14" },
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
    subtitle: `CELEBRA AO SENHOR COM SEUS DIZÍMOS E OFERTAS`,
    steps: [
      { type: "reading", "text": "Provérbios 3.9-10" },
      { type: "offering" },
      { type: "song", name: "63", id: "32" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "63.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: "TEM UM CORAÇÃO DISPOSTO PARA O ENSINO ETERNO DA PALAVRA DE DEUS",
    steps: [
      { type: "preaching", text: "1 Coríntios 3.1-9", speaker: "Rev. Marcos Santana" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("1 Coríntios 3.1-9")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "song", name: "Venho Senhor minha vida oferecer", id: "266" },
      { type: "supper" },
      { type: "ending_prayer" },
      { type: "blessings" }
    ],
    songLyrics: "venho-senhor-minha-vida-oferecer.txt",
    title: title
  },
  {
    id: "supper",
    subtitle: "",
    steps: [

    ],
    songLyrics: "por-amor.txt",
    title: "Santa Ceia"
  },
  {
    id: "after-supper",
    subtitle: "",
    steps: [
      { type: "ending_prayer" },
      { type: "blessings" }
    ],
    songLyrics: false,
    title: title
  },
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
