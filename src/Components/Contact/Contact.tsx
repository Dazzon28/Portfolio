import { Button, ListGroup, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setContactView } from "../../Redux/Slices/viewContacts"
import { RootState } from "../../Redux/store"
import {AiOutlineMail,AiOutlinePhone} from "react-icons/ai"
import CustomListItem from "../CustomListItem/CustomListItem"
const Contacts = () => {
    const dispatch = useDispatch()
    const viewContacts = useSelector((state:RootState)=>state.viewContacts)
    return (
        <Modal
            show={viewContacts}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Contact me
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    <CustomListItem icon={<AiOutlineMail/>} content="barreyrodawson@gmail.com" />
                    <CustomListItem icon={<AiOutlinePhone/>} content="+39 3245367174" />
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>dispatch(setContactView(false))}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Contacts