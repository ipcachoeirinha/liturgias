import { Link } from 'react-router'

export function PostsSection({ posts }) {
    const postsElements = posts.map(p => <Post key={p.url} post={p} />)

    return (<section className='p-4'>
        <h1 className='text-yellow-600 text-3xl font-bold mb-4 text-center md:text-left'>Pastorais</h1>
        <div className='flex flex-col md:flex-row md:space-x-2'>
            {postsElements}
        </div>
    </section>)
}

function Post({ post }) {
    const date = new Date(post.createdAt)
    const formatted = `${date.getDate()}/${date.getMonth()}`

    return (<div className='p-4 basis-1/4 mb-2 md:mb-0'>
        <p>{formatted}</p>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <Link className='text-blue-500 underline' to={`/pastoral${post.url}`}>Ler</Link>
    </div>)
}