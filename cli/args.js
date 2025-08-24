import { getBibleText } from './functions.js'

const slidesFolder = "202508"
const date = "082425"
const slug = "uma-igreja-que-adora-verdadeiramente"
const title = "UMA IGREJA QUE ADORA VERDADEIRAMENTE"
const htmlTitle = "Uma igreja que adora verdadeiramente - 24 de Agosto de 2025"
const bcwQuestionNumber = 34
const bcwQuestion = "O que é adoção?"
const bcwAnswer = [`Adoção é um ato da livre graça de Deus, pelo qual somos recebidos no número
dos filhos de Deus, e temos direito a todos os seus privilégios.`]

const slides = [
    {
        id: "worship",
        subtitle: "UMA IGREJA QUE ADORA VERDADEIRAMENTE, BUSCA ADORAR DE CORAÇÃO",
        steps: [
            { type: "reading", "text": "Salmo 9.1-2" },
            { type: "hymn", name: "A Igreja em Adoração", id: "03" },
            { type: "worship_prayer" }
        ],
        songLyrics: "3-a-igreja-em-adoracao.txt",
        title: title
    },
    {
        id: "confession",
        subtitle: "UMA IGREJA QUE ADORA VERDADEIRAMENTE, CONFESSA A FALSA ADORAÇÃO",
        steps: [
            { type: "reading", "text": "Isaías 29:13-16" },
            { type: "song", name: "Coração Quebrantado", id: "67" },
            { type: "confession_prayer" },
            { type: "bcw-question", questionNumber: bcwQuestionNumber }
        ],
        bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
        songLyrics: "67-coracao-quebrantado.txt",
        title: title
    },
    {
        id: "offering",
        subtitle: `UMA IGREJA QUE ADORA VERDADEIRAMENTE, ADORA COM OFERTAS DE GRATIDÃO`,
        steps: [
            { type: "reading", "text": "Salmo 50.14" },
            { type: "offering" },
            { type: "song", name: "Grandes São as Tuas obras", id: "" },
            { type: "custom", value: "Oração" }
        ],
        songLyrics: "rei-das-nacoes.txt",
        title: title
    },
    {
        id: "preaching",
        subtitle: "UMA IGREJA QUE ADORA VERDADEIRAMENTE, OUVE A PALAVRA EM CONTRIÇÃO",
        steps: [
            { type: "preaching", text: "João 4.43-54", speaker: "Sem. João Gabriel" }
        ],
        title: title,
        songLyrics: false,
        text: getBibleText("João 4.43-54")
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "hymn", name: "Firmeza na Fé", id: "93" },
            // { type: "supper" },
            { type: "ending_prayer" },
            { type: "blessings" }
        ],
        songLyrics: "93-firmeza-na-fe.txt",
        title: title
    },
    // {
    //     id: "supper",
    //     subtitle: "",
    //     steps: [

    //     ],
    //     songLyrics: "bem-mais-que-tudo.txt",
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