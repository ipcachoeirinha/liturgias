import { Link } from '@remix-run/react'

export function PostsSection({ posts }) {
    const postsElements = posts.map(p => <Post key={p.url} post={p} />)

    return (<section className='px-4'>
        <h1 className='text-left text-yellow-600 text-3xl font-bold mb-4'>Pastorais</h1>
        <div className='flex flex-col md:flex-row md:space-x-2'>
            {postsElements}
        </div>
    </section>)
}

function Post({ post }) {
    const date = new Date(post.createdAt)
    const formatted = `${date.getDate()}/${date.getMonth()}`

    return (<div style={{ background: `url('/${post.cover}')` }} className='p-4 basis-1/4 mb-2 md:mb-0'>
        <p>{formatted}</p>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <Link to={`/pastoral${post.url}`}>Ler</Link>
    </div>)
}