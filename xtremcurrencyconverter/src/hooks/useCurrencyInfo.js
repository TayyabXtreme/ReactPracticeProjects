import { useEffect , useState } from 'react';

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then(response => response.json())
        .then(res => {
            setData(res[currency])
            console.log(data)
        })
        .catch(error => console.log(error))
    }
    , [currency])
      

    return data

}

export default useCurrencyInfo