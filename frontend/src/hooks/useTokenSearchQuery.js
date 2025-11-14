import { useMutation } from "@tanstack/react-query"
import { searchTokens } from "../services/tokenService"


const useTokenSearchQuery = (query) => {
    const {mutate, data: searchResults, isLoading: isLoadingSearchTokens, error: searchTokensError} = useMutation({
        mutationFn: () => searchTokens(query),
        enabled: !!query
    })

    return {
        mutate,
        searchResults,
        isLoadingSearchTokens,
        searchTokensError
    }
}

export default useTokenSearchQuery
