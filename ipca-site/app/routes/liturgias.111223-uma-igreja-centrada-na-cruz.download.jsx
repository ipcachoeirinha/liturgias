import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Uma Igreja Centrada na Cruz - 12 de Novembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/hino-287", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-67", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-61", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-266", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/rude-cruz-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" },
]
const ZIP_FILENAME = "111223-uma-igreja-centrada-na-cruz"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
