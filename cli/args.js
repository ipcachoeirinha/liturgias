const slidesFolder = "202508"
const date = "081725"
const slug = "o-futuro-glorioso-do-povo-de-deus"
const title = "O FUTURO GLORIOSO DO POVO DE DEUS"
const htmlTitle = "O Futuro Glorioso do Povo de Deus - 17 de Agosto de 2025"
const bcwQuestionNumber = 33
const bcwQuestion = "O que é justificação?"
const bcwAnswer = [`Justificação é um ato da livre graça de Deus, no qual ele perdoa todos os
nossos pecados e nos aceita como justos diante Dele, somente por causa da justiça de
Cristo a nós imputada, e recebida só pela fé.`]

const slides = [
    {
        id: "worship",
        subtitle: "DESFRUTAMOS DO FUTURO GLORIOSO DA ETERNIDADE QUANDO NOS REUNIMOS PARA ADORAR AO SENHOR",
        steps: [
            { type: "alterned_reading", "text": "Isaias 43.1-13" },
            { type: "hymn", name: "Vencendo Vem Jesus", id: "147" },
            { type: "worship_prayer" }
        ],
        songLyrics: "147-vencendo-vem-jesus.txt",
        title: title
    },
    {
        id: "confession",
        subtitle: "MESMO EM UM MUNDO CAÍDO PODEMOS TER A CERTEZA QUE O NOSSO DEUS É CONOSCO, NADA NESTE MUNDO PODE NOS SEPARAR DESSE GRANDE AMOR",
        steps: [
            { type: "reading", "text": "Romanos 8.31-39" },
            { type: "song", name: "Eu me Rendo aos Teus pés", id: "" },
            { type: "confession_prayer" },
            { type: "bcw-question", questionNumber: bcwQuestionNumber }
        ],
        bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
        songLyrics: "eu-me-rendo.txt",
        title: title
    },
    {
        id: "offering",
        subtitle: `SOMOS GRATOS AO SENHOR POR PODERMOS PARTICIPAR DE SUA GRANDE MISSÃO`,
        steps: [
            { type: "reading", "text": "Provérbios 3.9-10" },
            { type: "offering" },
            { type: "song", name: "Santo Pra sempre", id: "" },
            { type: "custom", value: "Oração" }
        ],
        songLyrics: "santo-pra-sempre.txt",
        title: title
    },
    {
        id: "preaching",
        subtitle: "POR MEIO DO EVANGELHO SOMOS ALIMENTADOS ESPIRITUALMENTE",
        steps: [
            { type: "preaching", text: "Miquéias 4.1-13", speaker: "Rev. Marcos Santana" }
        ],
        title: title,
        songLyrics: false,
        text: [{
            "ref": "Miquéias 4.1-13",
            "text": [
                `¹ Mas, nos últimos dias, acontecerá que o monte da Casa do Senhor será estabelecido no cimo dos montes e se elevará sobre os outeiros, e para ele afluirão os povos.`
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `² Irão muitas nações e dirão: Vinde, e subamos ao monte do Senhor e à casa do Deus de Jacó, para que nos ensine os seus caminhos, e andemos pelas suas veredas; porque de Sião procederá a lei, e a palavra do Senhor, de Jerusalém.`
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `³ Ele julgará entre muitos povos e corrigirá nações poderosas e longínquas; estes converterão as suas espadas em relhas de arados e suas lanças, em podadeiras; uma nação não levantará a espada contra outra nação, nem aprenderão mais a guerra.`    
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `⁴ Mas assentar-se-á cada um debaixo da sua videira e debaixo da sua figueira, e não haverá quem os espante, porque a boca do Senhor dos Exércitos o disse.`
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `⁵ Porque todos os povos andam, cada um em nome do seu deus; mas, quanto a nós, andaremos em o nome do Senhor, nosso Deus, para todo o sempre.`
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `⁶ Naquele dia, diz o Senhor, congregarei os que coxeiam e recolherei os que foram expulsos e os que eu afligira.`,
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `⁷ Dos que coxeiam farei a parte restante e dos que foram arrojados para longe, uma poderosa nação; e o Senhor reinará sobre eles no monte Sião, desde agora e para sempre.`,
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `⁸ A ti, ó torre do rebanho, monte da filha de Sião, a ti virá; sim, virá o primeiro domínio, o reino da filha de Jerusalém.`,
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `⁹ Agora, por que tamanho grito? Não há rei em ti? Pereceu o teu conselheiro? Apoderou-se de ti a dor como da que está para dar à luz?`,
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `¹⁰ Sofre dores e esforça-te, ó filha de Sião, como a que está para dar à luz, porque, agora, sairás da cidade, e habitarás no campo, e virás até à Babilônia; ali, porém, serás libertada; ali, te remirá o Senhor das mãos dos teus inimigos.`,
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `¹¹ Acham-se, agora, congregadas muitas nações contra ti, que dizem: Seja profanada, e vejam os nossos olhos o seu desejo sobre Sião.`,
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `¹² Mas não sabem os pensamentos do Senhor, nem lhe entendem o plano que as ajuntou como feixes na eira.`,
            ]
        },
        {
            "ref": "Miquéias 4.1-13",
            "text": [
                `¹³ Levanta-te e debulha, ó filha de Sião, porque farei de ferro o teu chifre e de bronze, as tuas unhas; e esmiuçarás a muitos povos, e o seu ganho será dedicado ao Senhor, e os seus bens, ao Senhor de toda a terra. `,
            ]
        }]
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "hymn", name: "Ao Deus Grandioso", id: "26" },
            // { type: "supper" },
            { type: "ending_prayer" },
            { type: "blessings" }
        ],
        songLyrics: "26-ao-deus-grandioso.txt",
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