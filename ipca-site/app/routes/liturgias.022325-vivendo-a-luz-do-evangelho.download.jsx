import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Vivendo à Luz do Evangelho - 23 de Fevereiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-114", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-71", extension: "mp4", resourceType: "video" }
]

const ZIP_FILENAME = "022325-vivendo-a-luz-do-evangelho"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
