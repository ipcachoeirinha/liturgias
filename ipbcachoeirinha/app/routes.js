import { index, route } from "@react-router/dev/routes"

const routes = [
    index("routes/home.jsx"),
    route("/sobre-a-igreja", "routes/about.jsx"),
    route("/healthcheck", "routes/healthcheck.jsx"),
    route("/liturgias", "routes/liturgias.jsx"),
    
    // SLIDE_ROUTES
    route("/liturgia/070525-celebrando-ao-senhor-com-gratidao", "routes/slides/202507/070525-celebrando-ao-senhor-com-gratidao.jsx"),
    route("/liturgia/070525-celebrando-ao-senhor-com-gratidao/download", "routes/slides/202507/070525-celebrando-ao-senhor-com-gratidao.download.jsx"),
    route("/liturgia/062925-uma-igreja-que-ama-a-deus-acima-de-tudo", "routes/slides/202506/062925-uma-igreja-que-ama-a-deus-acima-de-tudo.jsx"),
    route("/liturgia/062925-uma-igreja-que-ama-a-deus-acima-de-tudo/download", "routes/slides/202506/062925-uma-igreja-que-ama-a-deus-acima-de-tudo.download.jsx"),
    route("/liturgia/061525-uma-igreja-perseguida", "routes/slides/202506/061525-uma-igreja-perseguida.jsx"),
    route("/liturgia/061525-uma-igreja-perseguida/download", "routes/slides/202506/061525-uma-igreja-perseguida.download.jsx"),
    route("/liturgia/060825-confiado-no-senhor", "routes/slides/202506/060825-confiado-no-senhor.jsx"),
    route("/liturgia/060825-confiado-no-senhor/download", "routes/slides/202506/060825-confiado-no-senhor.download.jsx"),
    route("/liturgia/060125-jesus-o-nosso-pescador-por-excelencia", "routes/slides/202506/060125-jesus-o-nosso-pescador-por-excelencia.jsx"),
    route("/liturgia/060125-jesus-o-nosso-pescador-por-excelencia/download", "routes/slides/202506/060125-jesus-o-nosso-pescador-por-excelencia.download.jsx"),
]

export default routes
