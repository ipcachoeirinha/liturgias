import { args } from './args.js'
import { createBcwSlide, createSupperSlide, createSlideSession, createSongLyricsSlide, getTemplate } from './functions.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const type = args.type
const template = getTemplate(type)
const slidesDir = `../ipbcachoeirinha/app/routes/slides/${args.slidesFolder}`
const slideFile = `${slidesDir}/${args.slide_filename}.jsx`
const downloadFile = `${slidesDir}/${args.download_filename}.jsx`
const lyricsDir = `${__dirname}/lyrics`

const templateFileContent = fs.readFileSync(`${__dirname}/templates/${template}`, { encoding: "utf-8" })
const downloadTemplateFileContent = fs.readFileSync(`${__dirname}/templates/template-download.jsx`, { encoding: "utf-8" })

const slidesJsx = args.slides
    .map(slide => {
        const slideSession = slide.id === "supper" ? createSupperSlide(slide) : createSlideSession(slide) // melhorar isso
        let songLyricsSlide = ""
        let bcwSlide = ""

        if(slide.songLyrics) {
            songLyricsSlide = createSongLyricsSlide(`${lyricsDir}/${slide.songLyrics}`)
        }

        if(slide.bcw) {
            bcwSlide = createBcwSlide(slide.bcw)
        }

        return `${slideSession}\n${songLyricsSlide}\n${bcwSlide}`
    }).join("\n")

const outputFileContent = templateFileContent
    .replace(":PAGE_TITLE", args.htmlTitle)
    .replace(":CDN_ASSETS_LIST", JSON.stringify(args.assets))
    .replace(":MAIN_TITLE", args.title.toLocaleUpperCase())
    .replace(":GENERATED_SLIDES", slidesJsx)

fs.writeFileSync(slideFile, outputFileContent)

const outputDownloadFileContent = downloadTemplateFileContent
    .replace(":PAGE_TITLE", args.htmlTitle)
    .replace(":CDN_ASSETS_LIST", JSON.stringify(args.assets))
    .replace(":ZIP_FILENAME", args.zip_filename)

fs.writeFileSync(downloadFile, outputDownloadFileContent)

