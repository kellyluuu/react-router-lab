import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import stocks from "../stocks"



export default function Stock (){
    // Grabbing symbol from the URL Params
    const params = useParams()
    const sym = params.symbol
    //state to hold stock data 
    const[stockData,setStockData] = useState(null)
    const getStockData =  ()=>{
        const result = stocks.find(({symbol})=>symbol ===sym)
        setStockData(result)
    }
    //useEffect to run getStockData when components mounts
    useEffect(()=>{getStockData()},[])

    // function when data is fetched
    const loaded = ()=>{
        return (
            <div>
            <h1>{stockData.name}</h1>
            <h3>{stockData.symbol}</h3>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Price</th>
                        <th scope="col">Change</th>
                        <th scope="col">High</th>
                        <th scope="col">Low</th>
                        <th scope="col">Open</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-secondary">
                        <td>${stockData.lastPrice}</td>
                        <td>{stockData.change.toFixed(4)}</td>
                        <td>${stockData.high}</td>
                        <td>${stockData.low}</td>
                        <td>${stockData.open}</td>
                    </tr>   
                </tbody>
            </table>
        </div>
        )
    }

    // Function when data doesn't exist
    const loading = ()=>{
        return<h1>LOADING....</h1>
    }

    return stockData ? loaded (): loading()
}

// const stocks = [
//     {name: "Apple Inc.", symbol: "AAPL", lastPrice: 140.64, change: -0.280000000000001, high: 141.74, low: 140.35, open: 141.5},
//     {name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 64.98, change: 0.109999999999999, high: 65.45, low: 64.76, open: 65.12},
//     {name: "Alphabet Inc.", symbol: "GOOGL", lastPrice: 835.14, change: -4.50999999999999, high: 844, low: 829.1, open: 842},
//     {name: "Facebook, Inc.", symbol: "FB", lastPrice: 140.34, change: 0.810000000000002, high: 141.0244, low: 139.76, open: 140.08},
//     {name: "Oracle Corporation", symbol: "ORCL", lastPrice: 44.65, change: -0.300000000000004, high: 45.09, low: 44.575, open: 44.91},
//     {name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58}
//   ]

//   export default stocks