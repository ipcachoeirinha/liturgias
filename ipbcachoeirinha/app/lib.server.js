import fs from 'fs'
import AdmZip from 'adm-zip'
import { cloudinary } from './cloudinary.server'
import { getAsset } from "./utils.server/get-asset"
import { getTemplateFilepath } from "./utils.server/get-template-filepath"

export async function downloadSlideRemixLoader(remixLoaderContext, zipFilename, cdnAssetsList, pageTitle, revealjsConfig) {
    const { request } = remixLoaderContext
    const assets = cdnAssetsList.map(listItem =>
        ({
          id: listItem.id,
          url: cloudinary.url(`${listItem.id}.${listItem.extension}`, { resource_type: listItem.resourceType }),
          extension: listItem.extension
        }))
    
        const page = await exportSlidePage(request.url.replace("/download", ""), pageTitle, revealjsConfig, assets)
        const zip = await createSlidesZipFile(page, assets)
      
        return new Response(zip.toBuffer(), {
          'headers': {
            'Content-Type': 'application/zip',
            'Content-Disposition': `attachment; filename="${zipFilename}"`
          }
        })
}

export async function presentationSlideRemixLoader(remixLoaderContext, cdnAssetsList) {
    const { request } = remixLoaderContext
    const assets = cdnAssetsList.map(listItem =>
        ({
          id: listItem.id,
          url: cloudinary.url(`${listItem.id}.${listItem.extension}`, { resource_type: listItem.resourceType }),
          extension: listItem.extension
        }))
    
      const requestUrl = new URL(request.url)
      const shouldExport = requestUrl.searchParams.get("export")
    
      if(shouldExport !== null) {
        return ["export", assets]
      }
    
      return ["normal", assets]
}

export async function createSlidesZipFile(indexHtmlContent, assetsToDownload) {
    const zip = new AdmZip()

    zip.addFile('ipcachoeirinha/', null)
    zip.addFile("index.html", Buffer.from(indexHtmlContent, "utf-8"))
    zip.addFile("ipcachoeirinha/reset.css", await fs.promises.readFile('./node_modules/reveal.js/dist/reset.css'))
    zip.addFile("ipcachoeirinha/reveal.css", await fs.promises.readFile('./node_modules/reveal.js/dist/reveal.css'))
    zip.addFile("ipcachoeirinha/reveal.js", await fs.promises.readFile('./node_modules/reveal.js/dist/reveal.js'))
    zip.addFile("ipcachoeirinha/tailwind.css", await fs.promises.readFile(getAsset("tailwind.css")))

    const promises = await Promise.all(assetsToDownload.map(asset => {
        const { url } = asset
        return fetch(url).then(async response => {
            const buffer = []

            for await (const chunk of response.body) {
                buffer.push(chunk)
            }

            return { asset, buffer: Buffer.concat(buffer) }
        })
    }))

    promises.forEach((p) => {
        const { asset, buffer } = p
        const filename = `${asset.id}.${asset.extension}`
        zip.addFile(filename, buffer)
    })

    return zip
}

async function getRoutePageFile(routeUrl) {
    const response = await fetch(`${routeUrl}?export=true`)
    const body = await response.text()

    return body
}

export async function exportSlidePage(routeUrl, pageTitle, revealConfig, assets) {
    let template = (await fs.promises.readFile(getTemplateFilepath(), { encoding: "utf-8" }))
    const currentPageHtml = await getRoutePageFile(routeUrl)
    const revealElement = extractRevealElementFromHtmlText(currentPageHtml)

    template = template.replace("__TITLE__", pageTitle)
    template = template.replace("__REVEAL_CONFIG__", JSON.stringify(revealConfig))
    template = template.replace("__REVEAL_ROOT_ELEMENT__", revealElement)

    return template
}

function extractRevealElementFromHtmlText(htmlText) {
    const [revealElement, rest] = htmlText.match(/<div\s?class="reveal">\s?[.\s\D\d]+<\/div>/)

    return revealElement
}
