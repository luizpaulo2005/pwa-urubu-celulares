import Map from "../components/map"
import NavBar from "../components/navbar"

const MeuLocal = () =>{
    return(
        <div className="container-fluid g-0">
            <NavBar/>
            <div className="d-flex flex-wrap justify-content-center container mt-2">
                <Map/>
            </div>
        </div>
    )
}

export default MeuLocal