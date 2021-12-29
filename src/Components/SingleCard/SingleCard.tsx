import { Card } from "react-bootstrap"
import "./singlecard.css"
interface Props{
    title:string,
    text:string
}
const SingleCard = ({title,text}:Props) => {
    return (
        <Card className="card">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SingleCard

