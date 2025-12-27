import defaultConfig from '../../../config/revealjs-default.json'
import { downloadSlideRemixLoader } from '../../../lib.server'

const PAGE_TITLE = "Gratidão a Deus por uma igreja missionária - 28 de Dezembro de 2025"
const CDN_ASSETS_LIST = [{"id":"ipcachoeirinha/cruz-wallpaper-light","extension":"jpg","resourceType":"image"},{"id":"ipcachoeirinha/santa-ceia-bg","extension":"png","resourceType":"image"},{"id":"ipcachoeirinha/background","extension":"png","resourceType":"image"}]

const ZIP_FILENAME = "122825-gratidao-a-deus-por-uma-igreja-missionaria.zip"

export async function loader(remixLoaderContext) {
  return downloadSlideRemixLoader(remixLoaderContext, ZIP_FILENAME, CDN_ASSETS_LIST, PAGE_TITLE, {...defaultConfig, width: 1600 })
}
