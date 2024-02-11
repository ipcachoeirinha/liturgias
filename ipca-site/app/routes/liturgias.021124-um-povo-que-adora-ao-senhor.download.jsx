import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Um Povo Que Adora Ao Senhor - 11 de Fevereiro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-4", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-110-a", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-115", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-135", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-340", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/oracao-silenciosa-hino-208", extension: "mp3", resourceType: "video" },
]

const ZIP_FILENAME = "021124-um-povo-que-adora-ao-senhor"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
