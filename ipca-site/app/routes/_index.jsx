import { Link, useLoaderData } from '@remix-run/react'
import { PostsSection } from '../components/site/PostsSection'

export const meta = () => {
    return [
        { title: "Home - Igreja Presbiteriana de Cachoeirinha" },
    ]
}


/**
 * Como ainda não temos um DB, vamos usar hardcoded como exemplo.
 */
export function loader() {
    const data = [
        {
            id: 1,
            url: "/sem-titulo",
            title: "Sem Título",
            description: "Sem descrição",
            cover: "cover.png",
            createdAt: '2023-11-12 00:00:00',
            updatedAt: null
        },
        {
            id: 1,
            url: "/sem-titulo",
            title: "Sem Título",
            description: "Sem descrição",
            cover: "cover.png",
            createdAt: '2023-11-12 00:00:00',
            updatedAt: null
        },
        {
            id: 1,
            url: "/sem-titulo",
            title: "Sem Título",
            description: "Sem descrição",
            cover: "cover.png",
            createdAt: '2023-11-12 00:00:00',
            updatedAt: null
        },
        {
            id: 1,
            url: "/sem-titulo",
            title: "Sem Título",
            description: "Sem descrição",
            cover: "cover.png",
            createdAt: '2023-11-12 00:00:00',
            updatedAt: null
        }
    ]

    return data
}

export default function Index() {
    const postsData = useLoaderData()

    return (<>
        <header className='bg-slate-700 py-4 px-8 mb-4'>
            <div className='max-w-5xl m-auto flex items-center space-x-4 flex-col md:flex-row'>
                <div className='flex items-center space-x-4 basis-2/5 mb-4 md:mb-0'>
                    <div>
                        <img src="/logo.png" className="max-w-[100px]" alt="Logo IP Cachoeirinha" />
                    </div>
                    <div className=''>
                        <h1 className='text-green-50'>IGREJA<br /> PRESBITERIANA<br /> DE CACHOEIRINHA</h1>
                    </div>
                </div>
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
            <div className='px-8 py-4 min-h-[500px] flex items-center pb-[100px]'>
                <div className='flex flex-col md:flex-row max-w-5xl m-auto justify-around items-center space-x-4'>
                    <section className='basis-1/4 grow-0 mb-6 md:mb-0'>
                        <h1 className='text-center text-yellow-600 text-3xl font-bold mb-4'>Programações</h1>
                        <p className='text-green-950 text-lg text-center font-bold'>Culto Solene</p>
                        <p className='text-green-950 text-lg text-center mb-4'>Domingo, 18:00</p>

                        <p className='text-green-950 text-lg text-center font-bold'>Estudo e Oração</p>
                        <p className='text-green-950 text-lg text-center'>Quarta-feira, 20:00</p>
                    </section>
                    <div className='basis-1/4 grow-0'>
                        <h1 className='text-center text-yellow-600 text-3xl font-bold mb-4'>João 4:14</h1>
                        <p className='text-green-950 text-lg text-justify'>Aquele, porém, que beber da água que eu lhe der nunca mais terá sede. Pelo contrário, a água que eu lhe der será nele uma fonte a jorrar para a vida eterna.</p>
                    </div>
                </div>
            </div>

            <div className='max-w-5xl m-auto mb-6'>
                <section className='px-4'>
                    <h2 className='text-center md:text-left text-green-950 text-xl font-bold'>CONHEÇA A NOSSA IGREJA</h2>
                    <h1 className='text-center md:text-left text-yellow-600 text-3xl font-bold mb-4'>IGREJA PRESBITERIANA DE CACHOEIRINHA</h1>
                    <p className='mb-4 text-lg text-justify text-green-950'>Uma igreja que por meio de Cristo, honra a Deus com a plenitude da vida, alegrando-se Nele plenamente!</p>

                    <div className='flex justify-center'>
                        <Link
                            className='mb-4 bg-blue-400 hover:bg-blue-600 underline text-center text-white font-bold py-4 px-6 rounded-md'
                            to={"/sobre-a-igreja"}>Sobre a Igreja</Link>
                    </div>
                </section>
            </div>

            <div className='bg-slate-700 py-6'>
                <div className='max-w-5xl m-auto mb-6'>
                    <section className='px-4'>
                        <h1 className='text-center text-yellow-600 text-3xl font-bold mb-4'>Contribuições</h1>
                        <p className='mb-4 text-lg text-justify text-slate-100'>Contamos com sua ajuda e você pode contribuir utilizando os dados abaixo para dízimo e ofertas.</p>
                        <div className='flex mb-4'>
                            <div>
                            </div>
                            <div>
                                <ul className='text-slate-100'>
                                    <li><span className='font-bold'>IGREJA PRESBITERIANA DO BRASIL EM CANOAS</span></li>
                                    <li><span className='font-bold'>Bradesco</span></li>
                                    <li><span className='font-bold'>Agência</span> 0000</li>
                                    <li><span className='font-bold'>Conta</span> 0000000-0</li>
                                    <li><span className='font-bold'>CNPJ</span> 0000000-0</li>
                                    <li><span className='font-bold'>Chave PIX</span> email@email.com</li>
                                </ul>
                            </div>
                        </div>
                        <p className='bg-yellow-100 text-yellow-800 p-4 text-sm text-justify border-solid border border-yellow-300 rounded'>Atenção ao copiar os dados e informações para dízimo e ofertas, não nos responsabilizamos por contribuições realizadas com informações divergentes das apresentadas em nosso site.</p>
                    </section>
                </div>
            </div>
            <div className='max-w-5xl m-auto mb-6'>
                <PostsSection posts={postsData} />
            </div>
        </main>
    </>)
}