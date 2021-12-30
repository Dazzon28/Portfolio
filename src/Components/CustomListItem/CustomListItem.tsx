import { ReactNode } from "react"
import { ListGroup } from "react-bootstrap"

interface Props{
    icon:ReactNode,
    content:string
}
const CustomListItem = ({icon,content}:Props)=>{

    return(
        <ListGroup.Item className="d-flex align-items-center">{icon} <div style={{"marginLeft":"auto"}}>{content}</div></ListGroup.Item>
    )
}

export default CustomListItem