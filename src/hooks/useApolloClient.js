import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "cross-fetch"
import { useMemo } from "react"

const uri = ""

export const createClient = () =>
	new ApolloClient({
		cache: new InMemoryCache().restore(globalThis.apollo || {}),
		link: new HttpLink({ fetch, uri }),
		ssrMode: !globalThis.document
	})

export const useApolloClient = (initialClient) =>
	useMemo(() => initialClient || createClient(), [initialClient])

export default useApolloClient
