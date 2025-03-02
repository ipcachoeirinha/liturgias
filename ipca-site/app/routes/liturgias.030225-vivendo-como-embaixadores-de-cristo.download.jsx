import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Vivendo como embaixadores de Cristo - 02 de Março de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-19", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-284", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-62", extension: "mp4", resourceType: "video" }
]

const ZIP_FILENAME = "030225-vivendo-como-embaixadores-de-cristo"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
