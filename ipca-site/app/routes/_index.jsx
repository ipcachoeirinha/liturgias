import { Link } from '@remix-run/react'

export default function Index() {
    return (<div>
        <a href="https://cachoeirinha.ipb.org.br">Igreja Presbiteriana de Cachoeirinha - RS</a><br />
        <Link to={"/liturgias"}>Liturgias</Link>
    </div>)
}