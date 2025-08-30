import { getBibleText } from './functions.js'

const slidesFolder = "202508"
const date = "083125"
const slug = "adorando-a-cristo-nosso-rei-pastor-e-juiz"
const title = "ADORANDO A CRISTO NOSSO REI, PASTOR E JUÍZ"
const htmlTitle = "Adorando a Cristo nosso Rei, Pastor e Juíz - 31 de Agosto de 2025"
const bcwQuestionNumber = 35
const bcwQuestion = "O que é santificação?"
const bcwAnswer = [`Santificação é a obra da livre graça de Deus, pela qual somos renovados
em todo o nosso ser, segundo a imagem de Deus, habilitados a morrer cada vez
mais para o pecado e a viver para a retidão.`]

const slides = [
    {
        id: "worship",
        subtitle: "LOUVAMOS A CRISTO NOSSO REI, PASTOR E JUÍZ POR MEIO DA ADORAÇÃO",
        steps: [
            { type: "reading", "text": "Salmo 24" },
            { type: "hymn", name: "Rei Sublime", id: "19" },
            { type: "worship_prayer" }
        ],
        songLyrics: "19-rei-sublime.txt",
        title: title
    },
    {
        id: "confession",
        subtitle: "RECONHECEMOS A GRANDEZA DO NOSSO REI E PASTOR JESUS CRISTO E UM DIA ELE VIRÁ PARA NOS JULGAR",
        steps: [
            { type: "alterned_reading", "text": "Romanos 5.12-21" },
            { type: "hymn", name: "A revelação de Deus", id: "22" },
            { type: "confession_prayer" },
            { type: "bcw-question", questionNumber: bcwQuestionNumber }
        ],
        bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
        songLyrics: "22-os-ceus-proclamam.txt",
        title: title
    },
    {
        id: "offering",
        subtitle: `AGRADECEMOS COM NOSSOS DÍZIMOS E OFERTAS AO BOM PASTOR QUE DOOU A SUA VIDA POR NÓS`,
        steps: [
            { type: "reading", "text": "João 10.11-18" },
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
            { type: "preaching", text: "Miquéias 5.2-15", speaker: "Rev. Marcos Santana" }
        ],
        title: title,
        songLyrics: false,
        text: getBibleText("Miquéias 5.2-15")
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "song", name: "Em espírito e em verdade", id: "93" },
            // { type: "supper" },
            { type: "ending_prayer" },
            { type: "blessings" }
        ],
        songLyrics: "em-espirito-e-em-verdade.txt",
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