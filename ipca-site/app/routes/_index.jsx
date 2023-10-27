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
        // {
        //     id: 1,
        //     url: "/pastoral-teste",
        //     title: "Pastoral Teste",
        //     description: "Uma pastoral de teste",
        //     cover: "cover.png",
        //     createdAt: new Date(),
        //     updatedAt: null
        // },
        // {
        //     id: 2,
        //     url: "/pastoral-teste-2",
        //     title: "Pastoral Teste 2",
        //     description: "Uma pastoral de teste 2",
        //     cover: "cover.png",
        //     createdAt: new Date(),
        //     updatedAt: null
        // },
        // {
        //     id: 1,
        //     url: "/pastoral-teste",
        //     title: "Pastoral Teste",
        //     description: "Uma pastoral de teste",
        //     cover: "cover.png",
        //     createdAt: new Date(),
        //     updatedAt: null
        // },
        // {
        //     id: 2,
        //     url: "/pastoral-teste-2",
        //     title: "Pastoral Teste 2",
        //     description: "Uma pastoral de teste 2",
        //     cover: "cover.png",
        //     createdAt: new Date(),
        //     updatedAt: null
        // }
    ]

    return data;
}

export default function Index() {
    const postsData = useLoaderData()

    return (<>
        <header className='bg-slate-700 py-4 px-8'>
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
            <div className='bg-[url("/bg5.svg")] bg-cover px-8 py-4 min-h-[500px] flex items-center pb-[100px]'>
                <div className='flex flex-col md:flex-row max-w-5xl m-auto justify-around items-center space-x-4'>
                    <section className='basis-1/4 grow-0 mb-4 md:mb-0'>
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
            <div className='max-w-5xl m-auto'>
                <PostsSection posts={postsData} />
            </div>
        </main>
    </>)
}