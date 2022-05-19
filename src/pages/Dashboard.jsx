import stocks from "../stocks"
import {Link} from "react-router-dom"

export default function Dashboard (){
    return (
        <div className="dashboard">
        {stocks.map(({name,symbol},id)=>
        <Link key={id} to={`/stocks/${symbol}`}>
            <h2>{name}</h2>
        </Link>
        )}
    </div>
    )
}