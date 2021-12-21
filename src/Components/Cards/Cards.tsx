import "./cards.css"
import SingleCard from "../SingleCard/SingleCard";
import { CardGroup } from "react-bootstrap";

const Cards = ()=>{
    return(
    <div className="cards-container">
        <CardGroup>
        <SingleCard />
        <SingleCard />
        <SingleCard />
        </CardGroup>
        
    </div>
    )
}

export default Cards;