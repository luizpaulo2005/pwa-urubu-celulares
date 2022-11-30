import Map from "../components/map"
import NavBar from "../components/navbar"

const MeuLocal = () =>{
    return(
        <div className="container-fluid g-0">
            <NavBar/>
            <div>
                <Map/>
            </div>
        </div>
    )
}

export default MeuLocal