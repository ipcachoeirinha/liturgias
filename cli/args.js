import { getBibleText } from './functions.js'

const slidesFolder = "202510"
const date = "101225"
const slug = "jesus-a-palavra-final-de-deus"
const title = "JESUS, A PALAVRA FINAL DE DEUS"
const htmlTitle = "Jesus, a Palavra Final de Deus - 12 de Outubro de 2025"
const bcwQuestionNumber = 40
const bcwQuestion = "O que Deus revelou primeiramente ao homem para regra de sua obediência?"
const bcwAnswer = [`A regra que Deus revelou primeiramente ao homem para sua
obediência foi a lei moral.`]

const slides = [
    {
        id: "worship",
        subtitle: "JESUS, A PALAVRA FINAL DE DEUS, DEVE SER ADORADO EM ESPÍRITO E EM VERDADE",
        steps: [
            { type: "alterned_reading", "text": "João 1.1-14" },
            { type: "hymn", name: "Trindade Santíssima", id: "11" },
            { type: "worship_prayer" }
        ],
        songLyrics: "11-trindade-santissima.txt",
        title: title
    },
    {
        id: "confession",
        subtitle: "JESUS, A PALAVRA FINAL DE DEUS, VEIO A ESSE MUNDO E POR MEIO DELE FOMOS PERDOADOS",
        steps: [
            { type: "reading", "text": "Colossenses 1.13-23" },
            { type: "song", name: "Colossenses 1", id: "74" },
            { type: "confession_prayer" },
            { type: "bcw-question", questionNumber: bcwQuestionNumber }
        ],
        bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
        songLyrics: "colossenses-1.txt",
        title: title
    },
    {
        id: "offering",
        subtitle: `JESUS, A PALAVRA FINAL DE DEUS, É CELEBRADO POR SUA IGREJA COM SEUS DIZÍMOS E OFERTAS`,
        steps: [
            { type: "reading", "text": "Filipenses 2.5-11" },
            { type: "offering" },
            { type: "song", name: "maranata", id: "32" },
            { type: "custom", value: "Oração" }
        ],
        songLyrics: "maranata.txt",
        title: title
    },
    {
        id: "preaching",
        subtitle: "JESUS, A PALAVRA FINAL DE DEUS, TRANSFORMA O NOSSO CORAÇÃO PARA COMPREENSÃO DO EVANGELHO ANUNCIADO",
        steps: [
            { type: "preaching", text: "Hebreus 1.1-4", speaker: "Rev. Marcos Santana" }
        ],
        title: title,
        songLyrics: false,
        text: getBibleText("Hebreus 1.1-4")
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "song", name: "Só em ti", id: "93" },
            { type: "supper" },
            { type: "ending_prayer" },
            { type: "blessings" }
        ],
        songLyrics: "so-em-ti.txt",
        title: title
    },
    {
        id: "supper",
        subtitle: "",
        steps: [

        ],
        songLyrics: "jesus-e-o-centro.txt",
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