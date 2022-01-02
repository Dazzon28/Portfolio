import { Card } from "react-bootstrap"
import "./singlecard.css"
import {BsGear,BsPersonBadge} from "react-icons/bs"
import { card } from "../../interfaces/interfaces"
interface Props{
    card:card,
}
const SingleCard = ({card}:Props) => {
    return (
        <Card className="card">
            <Card.Body>
                <Card.Text className="card-icon"> {card.id === 1 ? <BsGear id="gear" className="icon" /> :
                <BsPersonBadge id="skill" className="icon"/>  } </Card.Text>
                <Card.Title className="text-center">{card.title}</Card.Title>
                <Card.Text className="text-center">
                    
                    {card.content.map((item,id)=>
                       <><p key={id}>{item}</p></> 
)}            
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SingleCard

