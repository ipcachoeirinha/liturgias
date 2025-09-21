import { getBibleText } from './functions.js'

const slidesFolder = "202509"
const date = "092125"
const slug = "o-deus-que-perdoa-pecados"
const title = "O DEUS QUE PERDOA PECADOS"
const htmlTitle = "O Deus que perdoa pecados - 21 de Setembro de 2025"
const bcwQuestionNumber = 37
const bcwQuestion = "Quais são as bênçãos que os crentes recebem de Cristo na hora da morte?"
const bcwAnswer = [`A alma dos fiéis, na hora da morte, é aperfeiçoada em santidade
e imediatamente entra na glória; e o corpo, que continua unido a Cristo,
descansa na sepultura até a ressurreição.`]

const slides = [
    {
        id: "worship",
        subtitle: "O DEUS QUE PERDOA PECADOS, DEVE SER ADORADO POR SUA MISERICÓRDIA",
        steps: [
            { type: "alterned_reading", "text": "Salmo 40" },
            { type: "hymn", name: "Deus dos antigos", id: "18" },
            { type: "worship_prayer" }
        ],
        songLyrics: "18-deus-dos-antigos.txt",
        title: title
    },
    {
        id: "confession",
        subtitle: "O DEUS QUE PERDOA PECADOS, REVELA O PECADO EM NOSSO CORAÇÃO",
        steps: [
            { type: "unison_reading", "text": "Marcos 7:21-23" },
            { type: "song", name: "Vasos Quebrados", id: "22" },
            { type: "confession_prayer" },
            { type: "bcw-question", questionNumber: bcwQuestionNumber }
        ],
        bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
        songLyrics: "vasos-quebrados.txt",
        title: title
    },
    {
        id: "offering",
        subtitle: `O DEUS QUE PERDOA PECADOS, MOSTRA SUA GRAÇA AO PERDOAR SEU POVO`,
        steps: [
            { type: "reading", "text": "Miquéias 7:18-20" },
            { type: "offering" },
            { type: "hymn", name: "O Deus fiel", id: "32" },
            { type: "custom", value: "Oração" }
        ],
        songLyrics: "32-o-deus-fiel.txt",
        title: title
    },
    {
        id: "preaching",
        subtitle: "O DEUS QUE PERDOA PECADOS, FALA AO CORAÇÃO DO SEU POVO",
        steps: [
            { type: "preaching", text: "Marcos 2:1-12", speaker: "Sem. Vinícius Genuíno" }
        ],
        title: title,
        songLyrics: false,
        text: getBibleText("Marcos 2:1-12")
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "song", name: "Te Louvarei", id: "93" },
            // { type: "supper" },
            { type: "ending_prayer" },
            // { type: "blessings" }
        ],
        songLyrics: "te-louvarei.txt",
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