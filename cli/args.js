const slidesFolder = "202508"
const date = "080325"
const slug = "a-esperanca-vem-do-senhor"
const title = "A ESPERANÇA VEM DO SENHOR"
const htmlTitle = "A Esperança Vem do Senhor - 03 de Agosto de 2025"
const bcwQuestionNumber = 31
const bcwQuestion = "O que é vocação eficaz?"
const bcwAnswer = `Vocação eficaz é a obra do Espírito Santo pela qual, convencendo-nos de nosso
pecado e de nossa miséria, iluminando nosso entendimento pelo conhecimento de Cristo,
e renovando a nossa vontade, ele nos persuade e habilita a abraçar Jesus Cristo, que nos é
oferecido de graça no evangelho.`

const slides = [
    {
        id: "worship",
        subtitle: "SOMOS CONVOCADOS A ADORAR AO SENHOR O REI JUSTO",
        steps: [
            { type: "reading", "text": "João 18.33-37" },
            { type: "hymn", name: "Deus dos Antigos", id: "18" },
            { type: "worship_prayer" }
        ],
        songLyrics: "18-deus-dos-antigos.txt",
        title: title
    },
    {
        id: "confession",
        subtitle: "O EVANGELHO NOS MOSTRA QUE PECAMOS CONTRA O SENHOR, MAS EM CRISTO RECEBEMOS O SEU PERDÃO",
        steps: [
            { type: "reading", "text": "Hebreus 4.14-16" },
            { type: "song", name: "Vasos Quebrados", id: "" },
            { type: "confession_prayer" },
            { type: "bcw-question", questionNumber: bcwQuestionNumber }
        ],
        bcw: { questionNumber: bcwQuestionNumber, question: bcwQuestion, answer: bcwAnswer },
        songLyrics: "vasos-quebrados.txt",
        title: title
    },
    {
        id: "offering",
        subtitle: `SOMOS GRATOS AO SENHOR POR PODERMOS PARTICIPAR DE SUA GRANDE MISSÃO`,
        steps: [
            { type: "reading", "text": "Hebreus 1.1-4" },
            { type: "offering" },
            { type: "hymn", name: "O Deus Fiel", id: "32" },
            { type: "custom", value: "Oração" }
        ],
        songLyrics: "32-o-deus-fiel.txt",
        title: title
    },
    {
        id: "preaching",
        subtitle: "POR MEIO DO EVANGELHO SOMOS ALIMENTADOS ESPIRITUALMENTE",
        steps: [
            { type: "preaching", text: "Miquéias 2.1-13", speaker: "Rev. Marcos Santana" }
        ],
        title: title,
        songLyrics: false,
        text: [{
            "ref": "Miquéias 2.1-13",
            "text": [
                `¹ Ai daqueles que, no seu leito, imaginam a iniquidade e maquinam o mal! À luz da alva, o praticam, porque o poder está em suas mãos.`,
                `² Se cobiçam campos, os arrebatam; se casas, as tomam; assim, fazem violência a um homem e à sua casa, a uma pessoa e à sua herança.`,
            ]
        },
        {
            "ref": "Miquéias 2.1-13",
            "text": [
                `³ Portanto, assim diz o Senhor: Eis que projeto mal contra esta família, do qual não tirareis a vossa cerviz; e não andareis altivamente, porque o tempo será mau.`,
            ]
        },
        {
            "ref": "Miquéias 2.1-13",
            "text": [
                `⁴ Naquele dia, se criará contra vós outros um provérbio, se levantará pranto lastimoso e se dirá: Estamos inteiramente desolados! A porção do meu povo, Deus a troca! Como me despoja! Reparte os nossos campos aos rebeldes!`,
            ]
        },
        {
            "ref": "Miquéias 2.1-13",
            "text": [
                `⁵ Portanto, não terás, na congregação do Senhor, quem, pela sorte, lançando o cordel, meça possessões.`,
                `⁶ Não babujeis, dizem eles. Não babujeis tais coisas, porque a desgraça não cairá sobre nós.`,
            ]
        },
        {
            "ref": "Miquéias 2.1-13",
            "text": [
                `⁷ Tais coisas anunciadas não alcançarão a casa de Jacó. Está irritado o Espírito do Senhor? São estas as suas obras? Sim, as minhas palavras fazem o bem ao que anda retamente;`,
            ]
        },
        {
            "ref": "Miquéias 2.1-13",
            "text": [
                `⁸ mas, há pouco, se levantou o meu povo como inimigo; além da roupa, roubais a capa àqueles que passam seguros, sem pensar em guerra.`,
                `⁹ Lançais fora as mulheres de meu povo do seu lar querido; dos filhinhos delas tirais a minha glória, para sempre.`,
            ]
        },
        {
            "ref": "Miquéias 2.1-13",
            "text": [
                `¹⁰ Levantai-vos e ide-vos embora, porque não é lugar aqui de descanso; ide-vos por causa da imundícia que destrói, sim, que destrói dolorosamente.`,
            ]
        },
        {
            "ref": "Miquéias 2.1-13",
            "text": [
                `¹¹ Se houver alguém que, seguindo o vento da falsidade, mentindo, diga: Eu te profetizarei do vinho e da bebida forte, será este tal o profeta deste povo.`,
            ]
        },
        {
            "ref": "Miquéias 2.1-13",
            "text": [
                `¹² Certamente, te ajuntarei todo, ó Jacó; certamente, congregarei o restante de Israel; pô-los-ei todos juntos, como ovelhas no aprisco, como rebanho no meio do seu pasto; farão grande ruído, por causa da multidão dos homens.`,
            ]
        },
        {
            "ref": "Miquéias 2.1-13",
            "text": [
                `¹³ Subirá diante deles o que abre caminho; eles romperão, entrarão pela porta e sairão por ela; e o seu Rei irá adiante deles; sim, o Senhor, à sua frente.`
            ]
        }]
    },
    {
        id: "after-preaching",
        subtitle: "",
        steps: [
            { type: "song", name: "Te Louvarei", id: "" },
            { type: "supper" },
            { type: "ending_prayer" },
            { type: "blessings" }
        ],
        songLyrics: "te-louvarei.txt",
        title: title
    },
    {
        id: "supper",
        subtitle: "",
        steps: [

        ],
        songLyrics: "bem-mais-que-tudo.txt",
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