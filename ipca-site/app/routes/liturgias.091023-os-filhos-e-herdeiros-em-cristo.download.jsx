import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "Os Filhos e Herdeiros em Cristo - 10 de Setembro de 2023"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/santa-ceia-bg", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/juliano-son-so-em-jesus", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-14", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-217", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-341", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-320", extension: "mp4", resourceType: "video" },
]
const ZIP_FILENAME = "091023-os-filhos-e-herideiros-em-cristo"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, defaultConfig)
}
