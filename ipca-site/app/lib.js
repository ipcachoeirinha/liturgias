export function getAssetUrlBuilder(mode, assetsList) {
    return (key) => {
        const asset = assetsList.find(a => a.id === key)
        if (!asset) throw new Error(`${key} not found in assetList`)

        const { url, extension } = asset
        if (mode === 'export') {
            return `${key}.${extension}`
        }

        return url
    }
}