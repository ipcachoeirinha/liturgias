const slidesFolder = "202506"
const date = "060125"
const slug = "jesus-o-nosso-pescador-por-excelencia"
const title = "JESUS, O NOSSO PESCADOR POR EXCELÊNCIA"
const htmlTitle = "Jesus, o nosso pescador por excelência - 01 de Junho de 2025"
const bcwQuestionNumber = 21
const bcwQuestion = "Quem é o Redentor dos eleitos de Deus?"
const bcwAnswer = `O único Redentor dos escolhidos de Deus é o Senhor Jesus Cristo, que, 
sendo o eterno Filho de Deus, se fez homem, e assim foi e continua a ser Deus e homem em duas 
naturezas distintas, e uma só pessoa, para sempre.`

const slides = [
    {
        id: "worship",
        subtitle: "JESUS, O NOSSO PESCADOR POR EXCELÊNCIA, NOS SALVOU ANTES DA FUNDAÇÃO DO MUNDO, POR ISSO CELEBRAMOS",
        steps: [
            { type: "reading", "text": "Salmo 100" },
            { type: "hymn", name: "Trindade Santíssima", id: "11" },
            { type: "worship_prayer" }
        ],
        songLyrics: "11-trindade-santissima.txt",
        title: title
    },
    {
        id: "confession",
        subtitle: "CONFESSAMOS NOSSOS PECADOS EM NOME DO NOSSO SENHOR JESUS, POIS NA CRUZ ENCONTRAMOS PERDÃO",
        steps: [
            { type: "reading", "text": "Isaías 6.1-8" },
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
        subtitle: "DEVOLVEMOS NOSSOS DÍZIMOS E OFERTAS, RECONHECENDO QUE TUDO QUE NÓS TEMOS PERTENCE AO NOSSO SENHOR",
        steps: [
            { type: "reading", "text": "1 Timóteo 6.17-19" },
            { type: "offering" },
            { type: "song", name: "Doce Nome" },
            { type: "custom", value: "Oração" }
        ],
        songLyrics: "doce-nome.txt",
        title: title
    },
    {
        id: "preaching",
        subtitle: "",
        steps: [
            { type: "preaching", text: "Lucas 5.1-11", speaker: "" }
        ],
        title: title,
        songLyrics: false
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "song", name: "Sonda-me" },
            { type: "supper" },
            { type: "ending_prayer" },
            { type: "blessings" }
        ],
        songLyrics: "sonda-me.txt",
        title: title
    },
    {
        id: "supper",
        subtitle: "",
        steps: [
            
        ],
        songLyrics: "nada-alem-do-sangue.txt",
        title: "Santa Ceia"
    },
    {
        id: "supper",
        subtitle: "",
        steps: [
            
        ],
        songLyrics: "",
        title: "Santa Ceia"
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "song", name: "Sonda-me" },
            { type: "supper" },
            { type: "ending_prayer" },
            { type: "blessings" }
        ],
        songLyrics: "",
        title: title
    },
]

const assets = [
    { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
    { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" }
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