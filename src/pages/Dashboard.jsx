import stocks from "../stocks"
import {Link} from "react-router-dom"

export default function Dashboard (){
    return (
        <div className="dashboard">
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Company Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Change</th>
                </tr>
                </thead>
                <tbody>
                {stocks.map(({name, symbol, lastPrice, change},id)=>
                <tr key={id} className={change>0 ? "table-success" : "table-danger"}>
                    <th key={name.id}><Link key={id} to={`/stocks/${symbol}`}>{name} - {symbol} </Link></th>
                    <td >${lastPrice}</td>
                    <td >{change}</td>
                </tr>
        )}
                </tbody>
            </table>
    </div>
    )
}