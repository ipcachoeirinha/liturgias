import { getBibleText } from './functions.js'

const slidesFolder = "202509"
const date = "090725"
const slug = "o-que-o-senhor-espera-do-seu-povo"
const title = "O QUE O SENHOR ESPERA DO SEU POVO?"
const htmlTitle = "O Que o Senhor Espera do Seu Povo - 7 de Setembro de 2025"
const bcwQuestionNumber = 36
const bcwQuestion = "Quais são as bênçãos que nesta vida acompanham a justificação, a adoção e a santificação, ou delas procedem?"
const bcwAnswer = [`As bênçãos que nesta vida acompanham a justificação, a adoção e a
santificação, ou delas procedem, são: certeza do amor de Deus, paz de
consciência, gozo no Espírito Santo, aumento de graça e perseverança nela até ao
fim.`]

const slides = [
    {
        id: "worship",
        subtitle: "O SENHOR ESPERA QUE SEU POVO O ADORE VERDADEIRAMENTE",
        steps: [
            { type: "reading", "text": "Salmo 96.6-7b" },
            { type: "hymn", name: "A criação e Seu criador", id: "10" },
            { type: "worship_prayer" }
        ],
        songLyrics: "10-a-criacao-e-seu-criador.txt",
        title: title
    },
    {
        id: "confession",
        subtitle: "O SENHOR ESPERA QUE SEU POVO CONFESSE SEUS PECADOS",
        steps: [
            { type: "reading", "text": "Isaías 29.13-16" },
            { type: "reading", "text": "salmo 15" },
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
        subtitle: `O SENHOR ESPERA FIDELIDADE DO SEU POVO`,
        steps: [
            { type: "reading", "text": "2 Coríntios 9.6" },
            { type: "offering" },
            { type: "hymn", name: "Firme nas promessas", id: "177" },
            { type: "custom", value: "Oração" }
        ],
        songLyrics: "177-firme-nas-promessas.txt",
        title: title
    },
    {
        id: "preaching",
        subtitle: "O SENHOR ESPERA QUE SEU POVO OUÇA A SUA PALAVRA",
        steps: [
            { type: "preaching", text: "Miquéias 6.1-16", speaker: "Rev. Marcos Santana" }
        ],
        title: title,
        songLyrics: false,
        text: getBibleText("Miquéias 6.1-16")
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "song", name: "Jesus é o Centro", id: "93" },
            { type: "supper" },
            { type: "ending_prayer" },
            { type: "blessings" }
        ],
        songLyrics: "jesus-e-o-centro.txt",
        title: title
    },
    {
        id: "supper",
        subtitle: "",
        steps: [

        ],
        songLyrics: false,
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