import React from "react";
import { Container,Wrapper,Title,Desc,ToggleGroup,ToggleButton, Divider, CardContainer } from "./ProjectStyle";
import { useState } from "react";
import ProjectCard from "../Card/ProjectCard";
import { projects } from "../../data/constants";


const Projects = (openModal, setOpenModal) =>{
    const [toggle, setToggle] = useState("all");
    return(
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>I have worked on some projects.Here are some of my projects.</Desc>
                <ToggleGroup>
                    {toggle === "all" ? (
                        <ToggleButton active value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
                    ):(
                        <ToggleButton value="all">ALL</ToggleButton>
                    )}
                        <Divider />
                    {toggle === "web app" ? (
                        <ToggleButton active onClick={()=> setToggle("web app")}>WEB APP</ToggleButton>
                    ):(
                        <ToggleButton value="web app" onClick={()=> setToggle("web app")}>WEB APP</ToggleButton>
                    )}
                        <Divider />
                        {toggle === "backend app" ? (
                        <ToggleButton active value="backend app" onClick={()=> setToggle("backend app")}>BACKEND APP</ToggleButton>
                    ):(
                        <ToggleButton value="backend app" onClick={()=> setToggle("backend app")}>BACKEND APP</ToggleButton>
                    )}
                        <Divider />
                        {toggle === "full stack" ? (
                        <ToggleButton active value="full stack" onClick={()=> setToggle("full stack")}>FULL STACK</ToggleButton>
                    ):(
                        <ToggleButton value="full stack" onClick={()=> setToggle("full stack")}>FULL STACK</ToggleButton>
                    )}
                         
                </ToggleGroup>
                <CardContainer>
                    {toggle === "all" &&
                     projects.map((project)=>(
                     <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />) )}
                    {projects
                        .filter((item) => item.category == toggle)
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
        )
}
export default Projects