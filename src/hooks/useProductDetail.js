import { gql, useQuery } from "@apollo/client"

const EXCHANGE_RATES = gql`
	query GetExchangeRates {
		rates(currency: "USD") {
			currency
			rate
		}
	}
`

export const useProductDetail = () => {
	const queryResult = useQuery(EXCHANGE_RATES)

	return { queryResult }
}

export default useProductDetail
