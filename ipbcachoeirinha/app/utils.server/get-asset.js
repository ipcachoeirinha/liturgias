import { getProjectRoot } from "./get-project-root"

export function getAsset(path) {
    if(process.env.NODE_ENV === 'development') {
        return `${getProjectRoot()}/public/${path}`
    }

    return `${getProjectRoot()}/build/client/${path}`
}