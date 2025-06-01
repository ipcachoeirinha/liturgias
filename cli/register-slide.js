import fs from 'fs'
import { args } from './args.js'

const appRoot = "../ipbcachoeirinha/app"

const liturgiasRouteFile = `${appRoot}/routes/liturgias.jsx`
const routeFile = `${appRoot}/routes.js`

const liturgiasRouteFileContent = fs.readFileSync(liturgiasRouteFile, { encoding: "utf-8" })

const linkTemplate = `
    <Link className="" to="/liturgias/:URL">:TITLE</Link> <a className="" href="/liturgia/:URL/download">Download</a><br/>`
const link = linkTemplate
    .replace(":TITLE", args.htmlTitle)
    .replaceAll(":URL", args.url)

const newLiturgiasRouteFileContent = liturgiasRouteFileContent
    .replace("{/* NEXT_LINK */}", `{/* NEXT_LINK */}${link}`)

fs.writeFileSync(liturgiasRouteFile, newLiturgiasRouteFileContent)

const routesFileContent = fs.readFileSync(routeFile, { encoding: "utf-8" })

const routeTemplate = `
    route("/liturgia/:SLIDE_URL", "routes/slides/:MONTH_FOLDER/:SLIDE_FILENAME.jsx"),
    route("/liturgia/:DOWNLOAD_URL", "routes/slides/:MONTH_FOLDER/:DOWNLOAD_FILENAME.jsx"),`
const route = routeTemplate
    .replaceAll(":SLIDE_URL", args.url)
    .replaceAll(":MONTH_FOLDER", args.slidesFolder)
    .replaceAll(":SLIDE_FILENAME", args.slide_filename)
    .replaceAll(":DOWNLOAD_FILENAME", args.download_filename)
    .replaceAll(":DOWNLOAD_URL", `${args.url}/download`)

const newRoutesFileContent = routesFileContent
    .replace("// SLIDE_ROUTES", `// SLIDE_ROUTES${route}`)

fs.writeFileSync(routeFile, newRoutesFileContent)