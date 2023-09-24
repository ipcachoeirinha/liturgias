import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Uma Igreja Nascida do Espirito - 24 de Setembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-4", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-133", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-189", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-93", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/oracao", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" }
]
const ZIP_FILENAME = "092423-uma-igreja-nascida-do-espirito"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, defaultConfig)
}
