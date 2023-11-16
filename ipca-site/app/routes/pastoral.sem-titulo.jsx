import { Link } from '@remix-run/react'

export const meta = () => {
    const title = "Sem Título - Pastoral - Igreja Presbiteriana de Cachoeirinha"
    const description = "Sem descrição"

    return [
        {
            title: title
        },
        {
            description: description
        },
        {
            property: "og:title",
            content: title
        },
        {
            property: "og:image",
            content: ""
        },
        {
            property: "og:url",
            content: "https://ipcachoeirinha.com.br/pastoral/sem-titulo"
        },
        {
            property: "og:type",
            content: "website"
        },
    ]
}

export default function SemTitulo() {
    return (
        <>
            <header className='bg-slate-700 py-4 px-8 mb-4'>
                <div className='max-w-5xl m-auto flex items-center space-x-4 flex-col md:flex-row'>
                    <Link to="/">
                        <div className='flex items-center space-x-4 basis-2/5 mb-4 md:mb-0'>
                            <div>
                                <img src="/logo.png" className="max-w-[100px]" alt="Logo IP Cachoeirinha" />
                            </div>
                            <div className=''>
                                <h1 className='text-green-50'>IGREJA<br /> PRESBITERIANA<br /> DE CACHOEIRINHA</h1>
                            </div>
                        </div>
                    </Link>
                    <div className='justify-items-end basis-3/5'>
                        <ul className='flex flex-row justify-end space-x-4'>
                            <li className='block'><Link className='text-green-50' to={"/sobre-a-igreja"}>Sobre a Igreja</Link></li>
                            <li className='block'><Link className='text-green-50' to={"/agenda"}>Agenda</Link></li>
                            <li className='block'><Link className='text-green-50' to={"/localizacao"}>Localização</Link></li>
                            <li className='block'><Link className='text-green-50' to={"/contato"}>Contato</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            <main>
                <div className='text-justify max-w-5xl mx-auto p-4'>
                    <h1 className='text-yellow-600 text-3xl font-bold mb-4'>Sem Título</h1>
                    <p className="mb-2 leading-normal">Uma esposa de pastor compartilhou recentemente sua experiência de orar antes das refeições ao receber um estudante hindu em sua casa. Em seu curto artigo, ela compartilhou a grande oportunidade de evangelizarmos através da hospitalidade.</p>

                    <p className="mb-2 leading-normal">Ela disse que "embora muitos de nós oremos regularmente com nossos cônjuges e filhos, às vezes, renunciamos a essa prática quando temos convidados em casa. Se fizermos isto, perderemos uma oportunidade valiosa. Seja acolhendo amigos para o café ou hospedando-os por um fim de semana, nossas orações juntos refrigeram os corações dos santos e são um testemunho para os não convertidos."</p>

                    <p className="mb-2 leading-normal">Querida ovelha, você já percebeu a grande oportunidade de evangelismo ao receber alguém em sua casa? A casa de um cristão é um ambiente propício para anunciar as boas novas!</p>

                    <p className="mb-2 leading-normal">Por exemplo. Quando estamos fora de casa muitas vezes quem estabelece os rumos das conversas e questionamentos são os descrentes. E em geral não são perguntas primordiais à salvação, mas coisas do tipo "homossexualidade é pecado? Você é contra o controle de natalidade?". Embora sejam perguntas válidas, são focadasna ética, não naquele que redime a ética.</p>

                    <p className="mb-2 leading-normal">Por isso, durante a refeição em sua casa você tem a liberdade singular de estabelecer o rumo da conversa para aquilo que mais importa: Jesus Cristo. Seja através da sua oração antes da refeição, até mesmo durante o culto doméstico - você tem feito o culto doméstico, certo?</p>

                    <p className="mb-2 leading-normal">O ponto é que se você vive o cristianismo a sua casa conterá uma atmosfera cristã que rapidamente será percebida pelo seu convidado.Ofereça o pão para as almas de seus convidados. Ao orarmos, anunciamos aos nossos convidados (e nos lembramos a nós mesmos) que cada um de nós é um ser espiritual que deve adoração a Deus e se aproxima dele apenas através do sangue de Cristo.</p>

                    <p className="mb-2 leading-normal">"Assim como as orações de Estêvão sem dúvida ecoaram nos ouvidos de Paulo (Atos 7.58-60; 22.20), e, mais tarde, as orações de Paulo tiveram o mesmo efeito sobre o carcereiro de Filipos (Atos 16.25,30), o testemunho de nossas orações familiares pode levar à salvação de muitos. Um dia, poderemos encontrar nossos antigos convidados para jantar sentados ao nosso lado na grande festa de casamento do Cordeiro."</p>

                    <p className="mb-2 leading-normal">Então, vamos orar!</p>

                    <p>Em Cristo,</p>
                    <p>Rev Arnaldo Matias</p>
                </div >
            </main>
        </>)
}