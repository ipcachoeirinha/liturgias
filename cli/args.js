import { getBibleText } from './functions.js'

const slidesFolder = "202601"
const date = "012526"
const slug = "uma-igreja-que-foge-da-aparencia-do-mal"
const title = "UMA IGREJA QUE FOGE DA APARÊNCIA DO MAL"
const htmlTitle = "Uma igreja que foge da aparência do mal - 25 de Janeiro de 2026"
const bcwQuestionNumber = 52
const bcwQuestion = `Quais são as razões anexas ao segundo mandamento?`
const bcwAnswer = [`As razões anexas ao segundo mandamento são a soberania de Deus sobre
nós, o seu direito de propriedade sobre nós e o zelo que ele tem pelo seu culto.`]

const slides = [
  {
    id: "worship",
    subtitle: `FUGIMOS DA APARÊNCIA DO MAL QUANDO NOS ACHEGAMOS AO SENHOR
COM UM CORAÇÃO HUMILDE PARA ADORÁ-LO`,
    steps: [
      { type: "reading", "text": "1 Pedro 1.6-7" },
      { type: "hymn", name: "Sempre Vencendo", id: "49" },
      { type: "worship_prayer" }
    ],
    songLyrics: "49.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: `FUGIMOS DA APARÊNCIA DO MAL QUANDO RECONHECEMOS NOSSA
PECAMINOSIDADE, MAS POR CAUSA DE CRISTO SOMOS PERDOADOS E
TRANSFORMADOS`,
    steps: [
      { type: "alterned_reading", "text": "Gênesis 3.1-15" },
      { type: "hymn", name: "Sinceridade", id: "74" },
      { type: "confession_prayer" },
      { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "74.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `FUGIMOS DA APARÊNCIA DO MAL E RECONHECEMOS NOSSA TOTAL
DEPENDÊNCIA EM DEUS, POR ISSO SOMOS GRATOS COM TUDO QUE TEMOS`,
    steps: [
      { type: "reading", "text": "1 Crônicas 29.11-14" },
      { type: "offering" },
      { type: "song", name: "Salmo 15", id: "231" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "salmo-15.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: `FUGIMOS DA APARÊNCIA DO MAL QUANDO NOS APROXIMAMOS DA LUZ DA
PALAVRA DE DEUS`,
    steps: [
      { type: "preaching", text: "Tiago 1.12-15", speaker: "Rev. Marcos Santana" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Tiago 1.12-15")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "song", name: "Nenhuma condenação há", id: "32" },
      // { type: "supper" },
      { type: "ending_prayer" },
      { type: "blessings" }
    ],
    songLyrics: "nenhuma-condenacao-ha.txt",
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
