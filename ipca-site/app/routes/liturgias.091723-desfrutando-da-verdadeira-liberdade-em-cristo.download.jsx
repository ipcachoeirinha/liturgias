import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Desfrutando da Verdadeira Liberdade em Cristo - 17 de Setembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/hino-386", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-110", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-86", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-135", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/what-a-beautiful-name-hillsong-cover-daniel-jang", extension: "mp3", resourceType: "audio" }
]
const ZIP_FILENAME = "091723-desfrutando-da-verdadeira-liberdade-em-cristo"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, defaultConfig)
}
