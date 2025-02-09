import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Percorrendo um caminho de humildade - 9 de Fevereiro de 2025"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-11", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-68", extension: "mp4", resourceType: "video" }
]

const ZIP_FILENAME = "020925-percorrendo-um-caminho-de-humildade"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
