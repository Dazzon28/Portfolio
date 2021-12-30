import { Button, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setContactView } from "../../Redux/Slices/viewContacts"
import { RootState } from "../../Redux/store"
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
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>dispatch(setContactView(false))}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Contacts