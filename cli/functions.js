import fs from 'fs'

export function getTemplate(type) {
    if (type === "supper") {
        return "template-slide-santa-ceia.jsx"
    }
    return "template-slide.jsx"
}

export function createSlideSession(slideData) {
    const template = `<SlideWithBackground>
        <section>
            <MainTitle>:MAIN_TITLE</MainTitle>
            <SubTitle>:SUBTITLE</SubTitle>

            <LiturgySteps>
                :STEPS
            </LiturgySteps>
        </section>
        {/*<VideoSlide videoUrl={getAssetUrl("ipcachoeirinha/hino-3")} />*/}
    </SlideWithBackground>
    `

    const steps = slideData
        .steps.map(step => createSlideSessionStep(step))
        .join("\n")

    const slide = template
        .replace(":MAIN_TITLE", slideData.title.toLocaleUpperCase())
        .replace(":SUBTITLE", slideData.subtitle.toLocaleUpperCase())
        .replace(":STEPS", steps)

    return slide
}

export function createSupperSlide(slideData) {
    const template = `<SupperSlide>
            <section>
              <MainTitle>:MAIN_TITLE</MainTitle>
            </section>
          </SupperSlide>`

    const slide = template
        .replace(":MAIN_TITLE", slideData.title.toLocaleUpperCase())

    return slide
}

export function createSlideSessionStep(stepData) {
    const template = `<LiturgyStep liturgyStepType={LITURGY_STEP_TYPES.:TYPE}>:VALUE</LiturgyStep>`
    switch (stepData.type) {
        case "alterned_reading":
        case "unison_reading":
        case "reading": {
            const value = `: ${stepData.text.toLocaleUpperCase()}`
            const step = template.replace(":TYPE", stepData.type).replace(":VALUE", value)
            return step
        }
        case "hymn": {
            const value = `: ${stepData.name.toLocaleUpperCase()}, nº ${stepData.id}`
            const step = template.replace(":TYPE", stepData.type).replace(":VALUE", value)
            return step
        }
        case "ending_prayer":
        case "supper":
        case "blessings":
        case "confession_prayer":
        case "worship_prayer": {
            const step = template.replace(":TYPE", stepData.type).replace(":VALUE", "")
            return step
        }
        case "preaching": {
            const { text, speaker } = stepData
            const value = speaker.length > 0 ? `: ${text} (${speaker})` : `: ${text}`
            const step = template.replace(":TYPE", stepData.type).replace(":VALUE", value)
            return step
        }
        case "offering": {
            const step = template.replace(":TYPE", stepData.type).replace(":VALUE", "")
            return step
        }
        case "custom": {
            const value = stepData.value.toLocaleUpperCase()
            const step = template.replace(":TYPE", "custom").replace(":VALUE", value)
            return step
        }
        case "song": {
            const value = `Canção: ${stepData.name}`.toLocaleUpperCase()
            const step = template.replace(":TYPE", "custom").replace(":VALUE", value)
            return step
        }
        case "bcw-question": {
            const { questionNumber } = stepData
            const value = `PERGUNTA ${questionNumber} DO BREVE CATECISMO DE WESTMINSTER`
            const step = template.replace(":TYPE", "custom").replace(":VALUE", value)
            return step
        }
    }
    console.log(`${stepData.type} not found`)
    return template.replace(":TYPE", stepData.type)
}

export function createSongLyricsSlide(pathToLyrics) {
    
    try {
        const lyrics = fs.readFileSync(pathToLyrics, { encoding: "utf-8" })
        const preparedLyrics = prepareLyrics(lyrics)

        const template = `<SlideWithBackground>${preparedLyrics}</SlideWithBackground>`
        return template
    }
    catch (error) {
        console.log(error.message)
        return `<SlideWithBackground><section>${error.message}</section></SlideWithBackground>`
    }
}

export function createBcwSlide(bcwData) {
    const { questionNumber, question, answer } = bcwData

    const template = `<SlideWithBackground>
            <section>
              <MainTitle>BREVE CATECISMO DE WESTMINSTER</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>PERGUNTA :NUMBER: :QUESTION</p>
            </section>
            <section>
              <MainTitle>RESPOSTA</MainTitle>
              <p className='text-green-900 text-[72px] font-bold text-left leading-normal mb-12'>:ANSWER</p>
            </section>
          </SlideWithBackground>
    `

    const slide = template
        .replace(":NUMBER", questionNumber)
        .replace(":QUESTION", question)
        .replace(":ANSWER", answer)

    return slide
}

export function prepareLyrics(lyrics) {
    return lyrics
        .trim()
        .split(/\n\s*\n/)
        .map(block =>
            `<section className="bg-white dark:bg-black">\n` +
            block.split('\n').map(line => `  <p className="text-black dark:text-white text-[84px] font-bold text-left leading-[1.2] mb-12">${line}</p>`).join('\n') +
            `\n</section>`
        )
        .join('\n\n')
}
