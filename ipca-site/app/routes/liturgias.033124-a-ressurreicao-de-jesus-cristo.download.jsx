import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "A Ressurreição de Jesus Cristo - 31 de Março de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/a-ressurreicao-de-jesus-cristo", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-42", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-334", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-272", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-318", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
]

const ZIP_FILENAME = "033124-a-ressurreicao-de-jesus-cristo"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
