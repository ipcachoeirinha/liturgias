import { getBibleText } from './functions.js'

const slidesFolder = "202512"
const date = "120725"
const slug = "jesus-nasceu-em-seu-coracao"
const title = "JESUS NASCEU EM SEU CORAÇÃO?"
const htmlTitle = "Jesus nasceu em seu coração? - 7 de Dezembro de 2025"
const bcwQuestionNumber = 45
const bcwQuestion = "Qual é o primeiro mandamento?"
const bcwAnswer = [`O primeiro mandamento é: “Não terás outros deuses diante
de mim”.`]

const slides = [
  {
    id: "worship",
    subtitle: "SE JESUS NASCEU EM SEU CORAÇÃO, VOCÊ É CHAMADO A VIVER EM CONSTANTE ADORAÇÃO",
    steps: [
      { type: "alterned_reading", "text": "Isaías 9.6-7" },
      { type: "hymn", name: "Adoração", id: "230" },
      { type: "worship_prayer" }
    ],
    songLyrics: "230-adoracao.txt",
    title: title
  },
  {
    id: "confession",
    subtitle: `SE JESUS NASCEU EM SEU CORAÇÃO, VOCÊ RECONHECERÁ QUE TENS
COMETIDO PECADO CONTRA O SENHOR, MAS ELE É FIEL E JUSTO PARA
NOS PERDOAR`,
    steps: [
      { type: "reading", "text": "1 João 1.5-10" },
      { type: "unison_reading", "text": "Gênesis 3.15" },
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
    subtitle: `SE JESUS NASCEU EM SEU CORAÇÃO, VOCÊ DEMONSTRARÁ
GRATIDÃO COM TUDO QUE TENS`,
    steps: [
      { type: "unison_reading", "text": "Provérbios 3.9-10" },
      { type: "offering" },
      { type: "song", name: "Ele É Exaltado", id: "3" },
      { type: "custom", value: "Oração de Gratidão" }
    ],
    songLyrics: "ele-e-exaltado.txt",
    title: title
  },
  {
    id: "preaching",
    subtitle: `SE JESUS NASCEU EM SEU CORAÇÃO, VOCÊ É ALIMENTADO
CONSTANTEMENTE POR SUA PALAVRA`,
    steps: [
      { type: "preaching", text: "Lucas 2.8-20", speaker: "Rev. Marcos Santana" }
    ],
    title: title,
    songLyrics: false,
    text: getBibleText("Lucas 2.8-20")
  },
  {
    id: "after-preaching",
    subtitle: "",
    steps: [
      { type: "song", name: "Vida aos sepulcros", id: "266" },
      // { type: "supper" },
      { type: "custom", value: "Santa Ceia e recepção de novos membros" },
      { type: "ending_prayer" },
      { type: "blessings" }
    ],
    songLyrics: "vida-aos-sepulcros.txt",
    title: title
  },
  {
    id: "supper",
    subtitle: "",
    steps: [],
    songLyrics: "digno-e-o-senhor-versao-2.txt",
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
