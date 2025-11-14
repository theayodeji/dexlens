import { fetchTokenById, fetchTokens } from "../services/tokenService"
import { useQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react";


export default function useTokenQuery(id, query) {
    const [page, setPage] = useState(1);
    const [perPage, ] = useState(50);

    const {data: tokens, isLoading: isLoadingTokens, error: tokensError} = useQuery({
        queryKey: ['tokens', page, perPage],
        queryFn: () => fetchTokens(page, perPage),
        onSuccess: (data) => {
            console.log(data)
        }
    })

    const {data: token, isLoading: isLoadingToken, error: tokenError} = useQuery({
        queryKey: ['token', id],
        queryFn: () => fetchTokenById(id),
        enabled: !!id || !!query
    })

    const {data: searchTokens, isLoading: isLoadingSearchTokens, error: searchTokensError} = useQuery({
        queryKey: ['searchTokens', query],
        queryFn: () => searchTokens(query),
        enabled: !!query
    })

    return useMemo(() => {
        return {
        tokens,
        isLoadingTokens,
        tokensError,
        token,
        isLoadingToken,
        tokenError,
        searchTokens,
        isLoadingSearchTokens,
        searchTokensError,
        page,
        setPage,
        perPage,
    }
    }, [tokens, isLoadingTokens, tokensError, token, isLoadingToken, tokenError, searchTokens, isLoadingSearchTokens, searchTokensError, page, setPage, perPage])
}
