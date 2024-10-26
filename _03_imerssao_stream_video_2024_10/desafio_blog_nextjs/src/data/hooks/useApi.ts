import { useCallback } from 'react'

const URL_BASE = process.env.NEXT_PUBLIC_API_URL

export default function useAPI() {

    const httpGet = useCallback(
        async function (caminho: string) {
            const uri = caminho.startsWith('/') ? caminho : `/${caminho}`
            const urlCompleta = `${URL_BASE}${uri}`

            const resposta = await fetch(urlCompleta)
            
            return extrairDados(resposta)
        },
        [URL_BASE]
    )

    async function extrairDados(resposta: Response) {
        let conteudo = ''
        try {
            conteudo = await resposta.text()
            return JSON.parse(conteudo)
        } catch (e) {
            return conteudo
        }
    }

    return { httpGet }
}