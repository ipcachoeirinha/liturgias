import { getBibleText } from './functions.js'

const slidesFolder = "202601"
const date = "010426"
const slug = "uma-igreja-moldada-a-imagem-de-cristo"
const title = "UMA IGREJA MOLDADA A IMAGEM DE CRISTO"
const htmlTitle = "Uma igreja moldada a imagem de Cristo - 04 de Janeiro de 2026"
const bcwQuestionNumber = 49
const bcwQuestion = `Qual é o segundo mandamento?`
const bcwAnswer = [`O segundo mandamento é: “Não farás para ti imagem de escultura, nem semelhança
alguma do que há em cima nos céus, nem embaixo na terra, nem nas águas debaixo da terra. ...`,`Não as
adorarás, nem lhes darás culto; porque eu sou o Senhor teu Deus, Deus zeloso, que visito a iniqüidade
dos pais nos filhos até à terceira e quarta geração daqueles que me aborrecem e faço misericórdia
até mil gerações daqueles que me amam e guardam os meus mandamentos”.`]

const slides = [
  {
    id: "worship",
    subtitle: `SENDO MOLDADOS A IMAGEM DE CRISTO, TEMOS A GRATIDÃO COMO MARCA DE
UMA VERDADEIRA ADORAÇÃO AO SENHOR`,
    steps: [
      { type: "unison_reading", "text": "Romanos 5.1-5" },
      { type: "hymn", name: "Firmes nas promessas", id: "177" },
      { type: "worship_prayer" }
    ],
    songLyrics: "177.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: `SENDO MOLDADOS A IMAGEM DE CRISTO, NOS APROXIMAMOS EM CONTRIÇÃO AO
SENHOR PARA CONFESSARMOS OS NOSSOS PECADOS`,
    steps: [
      { type: "alterned_reading", "text": "Salmo 15" },
      { type: "song", name: "Salmo 15", id: "71" },
      { type: "confession_prayer" },
      { type: "bcw-question", questionNumber: bcwQuestionNumber }
    ],
    bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
    songLyrics: "salmo-15.txt",
    title: title
  },
  {
    id: "offering",
    subtitle: `SENDO MOLDADOS A IMAGEM DE CRISTO, RECONHECEMOS A NOSSA ALEGRIA EM
CONTRIBUIR NA EXPANSÃO DO EVANGELHO`,
    steps: [
      { type: "reading", "text": "Mateus 6.31-34" },
      { type: "offering" },
      { type: "song", name: "Descansarei", id: "231" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "descansarei.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: `SENDO MOLDADOS A IMAGEM DE CRISTO, SOMOS PERSEVERANTES NO CONHECIMENTO
BÍBLICO NA EXPOSIÇÃO DA PALAVRA DE DEUS`,
    steps: [
      { type: "preaching", text: "Tiago 1.1-4", speaker: "Rev. Marcos Santana" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Tiago 1.1-4")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "hymn", name: "Mais perto que estar", id: "116" },
      { type: "supper" },
      { type: "ending_prayer" },
      { type: "blessings" }
    ],
    songLyrics: "116.txt",
    title: title
  },
  {
    id: "supper",
    subtitle: "",
    steps: [],
    songLyrics: "vinho-e-pao.txt",
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
