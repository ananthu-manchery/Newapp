import { Link } from "react-router-dom"
import "./home.css";
export default function About(props) {
    // console.log(props);
    // console.log(props.data1);
const PropsData=props.str

    return(
        <header>
        <div >
            <h2 className="head1">This is About</h2>
            
            {/* <h1>{PropsData}</h1> */}
        </div>
        </header>
    )
    
}