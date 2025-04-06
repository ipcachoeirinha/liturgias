const _LITURGY_STEP_TYPES = {
    "pray_for_children": "ORAÇÃO PELAS CRIANÇAS",
    "preaching": "PREGAÇÃO",
    "alterned_reading": "LEITURA BÍBLICA ALTERNADA",
    "unison_reading": "LEITURA BÍBLICA UNÍSSONA",
    "reading": "LEITURA BÍBLICA",
    "offering": "CONSAGRAÇÃO DE DÍZIMOS E OFERTAS",
    "supper": "SANTA CEIA",
    "hymn": "HINO",
    "singing": "CÂNTICOS CONGREGACIONAIS",
    "silent_prayer": "ORAÇÃO SILENCIOSA",
    "repent_prayer": "ORAÇÃO DE ARREPENDIMENTO",
    "confession_prayer": "ORAÇÃO DE CONFISSÃO DE PECADOS",
    "worship_prayer": "ORAÇÃO DE ADORAÇÃO",
    "thankful_prayer": "ORAÇÃO DE AGRADECIMENTO",
    "ending_prayer": "ORAÇÃO FINAL",
    "blessings": "BENÇÃO APOSTÓLICA",
    "custom": ""
}

export const LITURGY_STEP_TYPES = {
    "pray_for_children": "pray_for_children",
    "preaching": "preaching",
    "alterned_reading": "alterned_reading",
    "unison_reading": "unison_reading",
    "reading": "reading",
    "offering": "offering",
    "supper": "supper",
    "hymn": "hymn",
    "singing": "singing",
    "silent_prayer": "silent_prayer",
    "repent_prayer": "repent_prayer",
    "confession_prayer": "confession_prayer",
    "worship_prayer": "worship_prayer",
    "thankful_prayer": "thankful_prayer",
    "ending_prayer": "ending_prayer",
    "blessings": "blessings",
    "custom": "custom",
}

export function LiturgyStep({ children, liturgyStepType }) {
    return <li className="text-green-900 text-6xl mb-8 tracking-wider font-bold">{_LITURGY_STEP_TYPES[liturgyStepType]}{children}</li>
}

