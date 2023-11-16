import { Link } from '@remix-run/react'

export const meta = () => {
    const title = "Sobre a Igreja - Igreja Presbiteriana de Cachoeirinha"
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
            content: "https://ipcachoeirinha.com.br/sobre-a-igreja"
        },
        {
            property: "og:type",
            content: "website"
        },
    ]
}

export default function SobreAIgreja() {
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
                    <h1 className='text-yellow-600 text-3xl font-bold mb-4'>Sobre a nossa igreja</h1>
                    <p className="mb-2 leading-normal">No dia 28 de junho de 2016, na residência do Presb. Erasmo Rodrigues, no Bairro Granja Esperança – Cachoeirinha (RS), ocorreu o culto inaugural do trabalho presbiteriano na cidade de Cachoeirinha. Tivemos a presença de 26 pessoas, entre elas os pastores Daniel e Samuel, Presbíteros Erasmo, Paulo, Fábio e Gutemberg, Diácono Roney, membros da IPC, bem como visitantes. O culto foi dirigido pelo Rev. Daniel e a pregação pelo Rev. Samuel. Após o Culto tivemos um delicioso momento de confraternização ofertado pelos anfitriões.</p>

                    <p className="mb-2 leading-normal">Este trabalho iniciado nesta data tem origens mais remotas com os esforços conjuntos das Igrejas IPCristo Redentor e IPCanoas que já atuaram no local em tempos antigos: A IPCR inicialmente tinha uma congregação no bairro que funcionou por alguns anos, mas devido a mudança de residência para outros estados de vários membros, deixou de atuar no local e o templo acabou sendo vendido há mais de 15 anos.</p>

                    <p className="mb-2 leading-normal">Mais recentemente com o recebimento do Presb. Erasmo como membro da IPC, foi iniciado em 2009, em sua casa, um trabalho que ocorria todas as terças e sextas-feiras e que arrebanhou vários irmãos da região, mas foi interrompido em 2014 por causa das obras que o Presb. Erasmo teve de fazer em sua casa, contudo, os cultos continuavam acontecendo em seu outro lar com menor periodicidade. Finalmente, em 2016, considerando o término das obras na casa do Presb. Erasmo, as Igrejas IPCR e IPC juntamente com uma família da IP Canela, resolveram retomar o trabalho na residência do Presb. Erasmo todas as terças às 20h.</p>

                    <p className="mb-2 leading-normal">Em fevereiro de 2020, assumiu como obreiro responsável pelo trabalho, o então diácono, e hoje presbítero Marcelo A. Mittelstädt. Ele e sua esposa Tatiana Mittelstädt ficaram até o final de 2021 na congregação, quando então partiram para São Paulo, onde ele concluirá o curso de Bacharel em Teologia no Seminário Presbiteriano Rev. José Manoel da Conceição.</p>

                    <p className="mb-2 leading-normal">Nos dias 10 e 11 de abril de 2021 aconteceram os cultos de inauguração do novo templo, na Av. Lídio Batista Soares, 996, próximo ao centro da cidade e com espaço bem mais amplo. Em janeiro de 2022 assumiu como responsável do trabalho o Rev. Arnaldo Matias, pastor auxiliar da IPC.</p>

                    <p className="mb-2 leading-normal">E assim, rogamos ao Senhor da Seara uma ação soberana do Espírito Santo na vida das pessoas desta cidade. Que estas, conscientes e entristecidas dos seus pecados, tenham suas vidas santificadas e juntem-se a nós em adoração ao Senhor. Nossa oração é que Deus nos use para a glória dEle e que este trabalho frutifique.</p>

                    <p>Em Cristo,</p>
                    <p>Rev Arnaldo Matias</p>
                </div >
            </main>
        </>)
}