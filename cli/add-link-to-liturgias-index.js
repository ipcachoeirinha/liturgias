import fs from 'fs'
import { args } from './args.js'

const routesDir = "../ipbcachoeirinha/app/routes"

const liturgiasRouteFile = `${routesDir}/liturgias.jsx`

const liturgiasRouteFileContent = fs.readFileSync(liturgiasRouteFile, { encoding: "utf-8" })

const linkTemplate = `<Link className="" to="/liturgias/:URL">:TITLE</Link> <a className="" href="/liturgias/:URL/download">Download</a><br />`
const link = linkTemplate
    .replace(":TITLE", args.htmlTitle)
    .replaceAll(":URL", args.url)

const newLiturgiasRouteFileContent = liturgiasRouteFileContent
    .replace("{/* NEXT_LINK */}", `{/* NEXT_LINK */}\n${link}`)

fs.writeFileSync(liturgiasRouteFile, newLiturgiasRouteFileContent)