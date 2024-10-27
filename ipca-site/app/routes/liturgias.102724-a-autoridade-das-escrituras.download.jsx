import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Santificados pela Palavra de Deus - 26 de Outubro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-11", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-67", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-145", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/oracao-silenciosa-hino-208", extension: "mp3", resourceType: "video" }
]

const ZIP_FILENAME = "102624-santificados-pela-palavra-de-deus"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
