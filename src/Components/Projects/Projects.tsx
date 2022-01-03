import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link,useNavigate} from "react-router-dom";
import { project } from "../../interfaces/interfaces";
import "./projects.css"
const Projects = ()=>{
    const [projectsList,setProjectList] = useState<project[]>();
    const getProjects = async () => {
        const response = await fetch("JSON/projects.json", {
            method: "GET"
        })
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            setProjectList(data.projects)
        }


    }
    useEffect(()=>{
        getProjects()
    },[])
    return(
        <div className="projects-container">
            {projectsList && 
                projectsList.map(project => <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={project.picture} style={{"maxHeight":"150px","overflow":"hidden"}}/>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    {project.description}
                  </Card.Text>
                  <Button variant="primary" onClick={()=> window.location.assign(project.link)}>See Code</Button>
                </Card.Body>
              </Card>)
                
            }
        </div>
    )
}

export default Projects;
