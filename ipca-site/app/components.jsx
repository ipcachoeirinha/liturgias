export function OnlyAssetsPage({ assets }) {
    const elements = Object.keys(assets).map((k, i) => {
        return (<div key={i}>
            <span>{k}</span> <a href={assets[k]["url"]}>a</a> <span>{assets[k]["extension"]}</span>
        </div>)
    })

    return (
        <div id="assets_page">{elements}</div>
    )
}