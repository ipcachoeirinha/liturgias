import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Uma Igreja com uma Fé Verdadeira - 09 de Março de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-147", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-177", extension: "mp4", resourceType: "video" }
]

const ZIP_FILENAME = "030925-uma-igreja-com-uma-fe-verdadeira"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
