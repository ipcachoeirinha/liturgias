import { getBibleText } from './functions.js'

const slidesFolder = "202510"
const date = "100525"
const slug = "a-igreja-que-recebe-a-novidade-do-evangelho"
const title = "A IGREJA QUE RECEBE A NOVIDADE DO EVANGELHO"
const htmlTitle = "A igreja que recebe a novidade do evangelho - 05 de Outubro de 2025"
const bcwQuestionNumber = 39
const bcwQuestion = "Qual é o dever que Deus exige do homem?"
const bcwAnswer = [`O dever que Deus exige do homem é obediência à sua vontade
revelada.`]

const slides = [
    {
        id: "worship",
        subtitle: "A IGREJA QUE RECEBE A NOVIDADE DO EVANGELHO, ADORA A DEUS EM ESPÍRITO E EM VERDADE",
        steps: [
            { type: "reading", "text": "João 4.23-24" },
            { type: "hymn", name: "Trindade Santíssima", id: "11" },
            { type: "worship_prayer" }
        ],
        songLyrics: "11-trindade-santissima.txt",
        title: title
    },
    {
        id: "confession",
        subtitle: "A IGREJA QUE RECEBE A NOVIDADE DO EVANGELHO, DEIXA SEUS PECADOS PARA TRÁS",
        steps: [
            { type: "reading", "text": "Efésios 4.17-24" },
            { type: "hymn", name: "Sinceridade", id: "74" },
            { type: "confession_prayer" },
            { type: "bcw-question", questionNumber: bcwQuestionNumber }
        ],
        bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
        songLyrics: "74-sinceridade.txt",
        title: title
    },
    {
        id: "offering",
        subtitle: `A IGREJA QUE RECEBE A NOVIDADE DO EVANGELHO, CELEBRA AO SENHOR COM SEUS DIZÍMOS E OFERTAS`,
        steps: [
            { type: "reading", "text": "Provérbios 3.9-10" },
            { type: "offering" },
            { type: "song", name: "Quebrantado", id: "32" },
            { type: "custom", value: "Oração" }
        ],
        songLyrics: "quebrantado.txt",
        title: title
    },
    {
        id: "preaching",
        subtitle: "A IGREJA QUE RECEBE A NOVIDADE DO EVANGELHO, TEM SEU CORAÇÃO RENOVADO PELA PALAVRA DE DEUS",
        steps: [
            { type: "preaching", text: "Marcos 2.18-22", speaker: "Sem. Vinícius Genuíno" }
        ],
        title: title,
        songLyrics: false,
        text: getBibleText("Marcos 2.18-22")
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "song", name: "Me Derramar", id: "93" },
            // { type: "supper" },
            { type: "ending_prayer" },
            // { type: "blessings" }
        ],
        songLyrics: "me-derramar.txt",
        title: title
    },
    // {
    //     id: "supper",
    //     subtitle: "",
    //     steps: [

    //     ],
    //     songLyrics: false,
    //     title: "Santa Ceia"
    // },
    // {
    //     id: "after-supper",
    //     subtitle: "",
    //     steps: [
    //         { type: "ending_prayer" },
    //         { type: "blessings" }
    //     ],
    //     songLyrics: false,
    //     title: title
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