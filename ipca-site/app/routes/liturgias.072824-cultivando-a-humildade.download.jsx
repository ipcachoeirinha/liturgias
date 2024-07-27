import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Cultivando a Humildade - 28 de Julho de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-17", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-128", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-218", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-312", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/oracao-silenciosa-hino-208", extension: "mp3", resourceType: "video" }
]

const ZIP_FILENAME = "072824-cultivando-a-humildade"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
