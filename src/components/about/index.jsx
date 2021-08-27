import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            {/* <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Front End Developer</SubTitle>
            </div>  */}
            <div>
              <Title> Macho000 </Title>
              <Text> I'm 	first year graduate student from <b className="text-primary lined-link">Shizuoka University　Informatics</b> </Text>
              <ResumeButton href="https://docs.google.com/document/d/e/2PACX-1vTjLcGL5a4Iu0w4tgeDSvUPh9uaDIoN3blJdtSu51NvaNVLq4XxzUgP98OpQpPvkbicwNK73yWLOiMl/pub" target="_blank"> Resume </ResumeButton>
              <ResumeButton href="https://docs.google.com/document/d/e/2PACX-1vSUgwlRGZ3yUSiH3LyMOz0tlVT6RGP7FzbnlCIa3ge79X9uAPtXaD2RRPLOzjFkZ-tNZ3RLScFskSnO/pub" target="_blank"> 履歴書 </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
