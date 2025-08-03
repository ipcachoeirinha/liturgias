import defaultConfig from '../../../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../../../lib.server'

const PAGE_TITLE = "A Esperança Vem do Senhor - 03 de Agosto de 2025"
const CDN_ASSETS_LIST = [{"id":"ipcachoeirinha/cruz-wallpaper-light","extension":"jpg","resourceType":"image"},{"id":"ipcachoeirinha/santa-ceia-bg","extension":"png","resourceType":"image"},{"id":"ipcachoeirinha/background","extension":"png","resourceType":"image"}]

const ZIP_FILENAME = "080325-a-esperanca-vem-do-senhor.zip"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
