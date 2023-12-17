import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "A Superioridade de Jesus Cristo - 17 de Dezembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-230", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-68", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-269", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-266", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/rude-cruz-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" },
]

const ZIP_FILENAME = "121723-a-superioridade-de-jesus-cristo"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
