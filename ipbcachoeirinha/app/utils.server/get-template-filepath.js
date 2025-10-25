import { getProjectRoot } from "./get-project-root";

export function getTemplateFilepath() {
    if(process.env.NODE_ENV === 'development') {
        return `${getProjectRoot()}/app/templates/template.html`
    }

    return `${getProjectRoot()}/build/server/template.html`
}