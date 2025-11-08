import defaultConfig from '../../../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../../../lib.server'

const PAGE_TITLE = "O Deus de toda sabedoria - 09 de Novembro de 2025"
const CDN_ASSETS_LIST = [{"id":"ipcachoeirinha/cruz-wallpaper-light","extension":"jpg","resourceType":"image"},{"id":"ipcachoeirinha/santa-ceia-bg","extension":"png","resourceType":"image"},{"id":"ipcachoeirinha/background","extension":"png","resourceType":"image"}]

const ZIP_FILENAME = "110925-o-deus-de-toda-sabedoria.zip"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
