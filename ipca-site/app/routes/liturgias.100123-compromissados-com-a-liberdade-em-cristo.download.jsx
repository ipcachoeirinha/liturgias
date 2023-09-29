import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Compromissados com a Liberdade em Cristo - 01 de Outubro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-14", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-78", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-58", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-287", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" },
]
const ZIP_FILENAME = "100123-compromissados-com-a-liberdade-em-cristo"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, defaultConfig)
}
