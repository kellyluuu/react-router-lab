import {Link} from "react-router-dom"

export default function Nav (){
    return (
        <div className="navBar">
            <button type="button" class="btn btn-outline-primary">
            <Link to="/">Home</Link>
            </button>
            <button type="button" className="btn btn-outline-primary">
            <Link to="/about">About</Link>
            </button>
        </div>
    )
}