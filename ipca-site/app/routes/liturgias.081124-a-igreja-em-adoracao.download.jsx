import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "A Igreja em Adoração - 11 de Agosto de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-1", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-74", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-19", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-319", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-269", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/oracao-silenciosa-hino-208", extension: "mp3", resourceType: "video" }
]

const ZIP_FILENAME = "081124-a-igreja-em-adoracao"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
