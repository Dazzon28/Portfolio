import "./cards.css"
import SingleCard from "../SingleCard/SingleCard";
import { CardGroup } from "react-bootstrap";

const Cards = ()=>{
    return(
    <div className="cards-container">
        <CardGroup>
        <SingleCard title="Personal projects" text="See list of my personal projects"/>
        <SingleCard title="Personal Skills" text="See list of my personal skills"/>
        </CardGroup>
        
    </div>
    )
}

export default Cards;