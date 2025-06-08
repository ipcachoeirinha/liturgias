import { index, route } from "@react-router/dev/routes"

const routes = [
    index("routes/home.jsx"),
    route("/sobre-a-igreja", "routes/about.jsx"),
    route("/healthcheck", "routes/healthcheck.jsx"),
    route("/liturgias", "routes/liturgias.jsx"),
    
    // SLIDE_ROUTES
    route("/liturgia/060825-confiado-no-senhor", "routes/slides/202506/060825-confiado-no-senhor.jsx"),
    route("/liturgia/060825-confiado-no-senhor/download", "routes/slides/202506/060825-confiado-no-senhor.download.jsx"),
    route("/liturgia/060125-jesus-o-nosso-pescador-por-excelencia", "routes/slides/202506/060125-jesus-o-nosso-pescador-por-excelencia.jsx"),
    route("/liturgia/060125-jesus-o-nosso-pescador-por-excelencia/download", "routes/slides/202506/060125-jesus-o-nosso-pescador-por-excelencia.download.jsx"),
]

export default routes
