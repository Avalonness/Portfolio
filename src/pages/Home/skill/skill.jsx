import html from '../../../assets/logo/html5.svg'
import css from '../../../assets/logo/css3.svg'
import js from '../../../assets/logo/js.svg'
import sass from '../../../assets/logo/sass.svg'
import react from '../../../assets/logo/react.svg'
import node from '../../../assets/logo/node.svg'
import mysql from '../../../assets/logo/mysql.png'
import sequelize from '../../../assets/logo/sequelize.png'
import colors from '../../../utils/styles/colors';
import styled from 'styled-components'

const SkillBarContainer = styled.div`
    display: flex;
    & img {
        margin-right: 15px;
        width: 20px;
    }
`

const SkillBar = styled.div`
height: 20px;
width: 50%;
background: ${colors.primary};
margin-right: 10px;
    & .html5 {
        width: 100%;
        height: 20px;
        background: green;
    }
    & .css3 {
        width: 100%;
        height: 20px;
        background: green;
    }
    & .js {
        width: 75%;
        height: 20px;
        background: green; 
    }
    & .sass {
        width: 80%;
        height: 20px;
        background: green; 
    }
    & .react {
        width: 60%;
        height: 20px;
        background: green; 
    }
    & .node {
        width: 80%;
        height: 20px;
        background: green; 
    }
    & .mysql {
        width: 100%;
        height: 20px;
        background: green; 
    }
    & .sequelize {
        width: 80%;
        height: 20px;
        background: green; 
    }
`

function Skill () {
    return (
        <>
                <ul>
                {/* HTML */}
                  <li>
                    <SkillBarContainer>
                      <img src={html} alt='Logo HTML5' />
                      <SkillBar><div className='html5'></div></SkillBar>
                      <span>100%</span>
                    </SkillBarContainer>
                  </li>
                  <li>
                    <SkillBarContainer>
                      <img src={css} alt='Logo css3' />
                      <SkillBar><div className='css3'></div></SkillBar>
                      <span>100%</span>
                    </SkillBarContainer>
                  </li>
                  <li>
                    <SkillBarContainer>
                      <img src={js} alt='Logo js' />
                      <SkillBar><div className='js'></div></SkillBar>
                      <span>75%</span>
                    </SkillBarContainer>
                  </li>
                  <li>
                    <SkillBarContainer>
                      <img src={sass} alt='Logo sass' />
                      <SkillBar><div className='sass'></div></SkillBar>
                      <span>80%</span>
                    </SkillBarContainer>
                  </li>
                  <li>
                    <SkillBarContainer>
                      <img src={react} alt='Logo react' />
                      <SkillBar><div className='react'></div></SkillBar>
                      <span>60%</span>
                    </SkillBarContainer>
                  </li>
                  <li>
                    <SkillBarContainer>
                      <img src={node} alt='Logo node' />
                      <SkillBar><div className='node'></div></SkillBar>
                      <span>80%</span>
                    </SkillBarContainer>
                  </li>
                  <li>
                    <SkillBarContainer>
                      <img src={mysql} alt='Logo mysql' />
                      <SkillBar><div className='mysql'></div></SkillBar>
                      <span>100%</span>
                    </SkillBarContainer>
                  </li>
                  <li>
                    <SkillBarContainer>
                      <img src={sequelize} alt='Logo sequelize' />
                      <SkillBar><div className='sequelize'></div></SkillBar>
                      <span>80%</span>
                    </SkillBarContainer>
                  </li>
                </ul>
        </>
    )
}

export default Skill