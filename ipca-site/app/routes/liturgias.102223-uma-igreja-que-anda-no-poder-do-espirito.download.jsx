import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Uma Igreja que Anda no Poder do Espírito - 22 de Outubro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-39", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-93", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-135", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-3", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" },
]
const ZIP_FILENAME = "102223-uma-igreja-que-anda-no-poder-do-espirito"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, { ...defaultConfig, width: 1600 })
}
