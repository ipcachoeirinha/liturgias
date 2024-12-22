import defaultConfig from '../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../lib.server'

const PAGE_TITLE = "A Alegria do Natal - 15 de Dezembro de 2024"
const CDN_ASSETS_LIST = [
  { id: "ipcachoeirinha/cruz-wallpaper-light", extension: "jpg", resourceType: "image" },
  { id: "ipcachoeirinha/querido-visitante", extension: "png", resourceType: "image" },
  { id: "ipcachoeirinha/psola-isaias-53-playback1", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/vporcristo-doce-nome-playback1", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-239", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-230", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/hino-001-instrumental", extension: "mp3", resourceType: "video" },
  { id: "ipcachoeirinha/uma-bencao-antiga-letra", extension: "mp4", resourceType: "video" },
  { id: "ipcachoeirinha/oracao-silenciosa-hino-208", extension: "mp3", resourceType: "video" }
]

const ZIP_FILENAME = "122224-uma-alma-que-engrandece-ao-senhor"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
