import { index, route } from "@react-router/dev/routes"

const routes = [
    index("routes/home.jsx"),
    route("/sobre-a-igreja", "routes/about.jsx"),
    route("/healthcheck", "routes/healthcheck.jsx"),
    route("/liturgias", "routes/liturgias.jsx"),
    
    // SLIDE_ROUTES
    route("/liturgia/101225-jesus-a-palavra-final-de-deus", "routes/slides/202510/101225-jesus-a-palavra-final-de-deus.jsx"),
    route("/liturgia/101225-jesus-a-palavra-final-de-deus/download", "routes/slides/202510/101225-jesus-a-palavra-final-de-deus.download.jsx"),
    route("/liturgia/100525-a-igreja-que-recebe-a-novidade-do-evangelho", "routes/slides/202510/100525-a-igreja-que-recebe-a-novidade-do-evangelho.jsx"),
    route("/liturgia/100525-a-igreja-que-recebe-a-novidade-do-evangelho/download", "routes/slides/202510/100525-a-igreja-que-recebe-a-novidade-do-evangelho.download.jsx"),
    route("/liturgia/092125-o-deus-que-perdoa-pecados", "routes/slides/202509/092125-o-deus-que-perdoa-pecados.jsx"),
    route("/liturgia/092125-o-deus-que-perdoa-pecados/download", "routes/slides/202509/092125-o-deus-que-perdoa-pecados.download.jsx"),
    route("/liturgia/090725-o-que-o-senhor-espera-do-seu-povo", "routes/slides/202509/090725-o-que-o-senhor-espera-do-seu-povo.jsx"),
    route("/liturgia/090725-o-que-o-senhor-espera-do-seu-povo/download", "routes/slides/202509/090725-o-que-o-senhor-espera-do-seu-povo.download.jsx"),
    route("/liturgia/083125-adorando-a-cristo-nosso-rei-pastor-e-juiz", "routes/slides/202508/083125-adorando-a-cristo-nosso-rei-pastor-e-juiz.jsx"),
    route("/liturgia/083125-adorando-a-cristo-nosso-rei-pastor-e-juiz/download", "routes/slides/202508/083125-adorando-a-cristo-nosso-rei-pastor-e-juiz.download.jsx"),
    route("/liturgia/082425-uma-igreja-que-adora-verdadeiramente", "routes/slides/202508/082425-uma-igreja-que-adora-verdadeiramente.jsx"),
    route("/liturgia/082425-uma-igreja-que-adora-verdadeiramente/download", "routes/slides/202508/082425-uma-igreja-que-adora-verdadeiramente.download.jsx"),
    route("/liturgia/081725-o-futuro-glorioso-do-povo-de-deus", "routes/slides/202508/081725-o-futuro-glorioso-do-povo-de-deus.jsx"),
    route("/liturgia/081725-o-futuro-glorioso-do-povo-de-deus/download", "routes/slides/202508/081725-o-futuro-glorioso-do-povo-de-deus.download.jsx"),
    route("/liturgia/081025-o-povo-sofre-por-lideres-maus", "routes/slides/202508/081025-o-povo-sofre-por-lideres-maus.jsx"),
    route("/liturgia/081025-o-povo-sofre-por-lideres-maus/download", "routes/slides/202508/081025-o-povo-sofre-por-lideres-maus.download.jsx"),
    route("/liturgia/080325-a-esperanca-vem-do-senhor", "routes/slides/202508/080325-a-esperanca-vem-do-senhor.jsx"),
    route("/liturgia/080325-a-esperanca-vem-do-senhor/download", "routes/slides/202508/080325-a-esperanca-vem-do-senhor.download.jsx"),
    route("/liturgia/072725-o-juizo-comeca-pela-casa-de-deus", "routes/slides/202507/072725-o-juizo-comeca-pela-casa-de-deus.jsx"),
    route("/liturgia/072725-o-juizo-comeca-pela-casa-de-deus/download", "routes/slides/202507/072725-o-juizo-comeca-pela-casa-de-deus.download.jsx"),
    route("/liturgia/072025-superando-os-obstaculos-da-evangelizacao", "routes/slides/202507/072025-superando-os-obstaculos-da-evangelizacao.jsx"),
    route("/liturgia/072025-superando-os-obstaculos-da-evangelizacao/download", "routes/slides/202507/072025-superando-os-obstaculos-da-evangelizacao.download.jsx"),
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
