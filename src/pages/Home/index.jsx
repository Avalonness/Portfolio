import styled from 'styled-components'
import colors from '../../utils/styles/colors';
import '../../utils/styles/font.css'
import bear from '../../assets/bear.gif'
import avatar from '../../assets/icon/profil.gif'
import avatar2 from '../../assets/icon/etudes.gif'
import avatar3 from '../../assets/icon/compétence.gif'
import Skill from './skill/skill';

const HomeContainer = styled.div`
width: 50%;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
& .bear_img {
  width:500px;
  border-radius: 5px;
}
& .bulle__info {
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
  background: rgba(255, 255, 255, 0.08);
}
`

const BodyContainer = styled.div`
margin-top: 30px;
padding: 10px;
width: 60%;
& .body_header {
  display: flex;
  justify-content: space-between;

  & img {
    width: 100px;
    border-radius: 50%;
    border: 2px solid ${colors.primary}
  }

  & .body_header__content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Playfair Display', serif;
    & h1 {
    font-size: 28px;
  }
  }
}
`

const MainContent = styled.div`
font-family: 'Playfair Display', serif;
margin-top: 20px;
& img {
  height: 100px;
  border-radius: 50%;
  border: 2px solid ${colors.primary}
}
& h2 {
  font-size: 22px;
  text-decoration: underline;
  font-weight: bold;
  margin-bottom: 10px;
}
& .etude_bloc {
margin-top: 25px;
display: flex;
align-items: center;
padding: 5px;
& .etude_bloc__content {
  margin-left: 15px;
  text-align: justify;
  & h2 {
    text-align: right;
  }
}
}

& .skill_bloc{
  margin-top: 25px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
& .skill_bloc__content {
  margin-right: 15px;
  text-align: justify;
  width: 100%;
  & h2 {
    text-align: left;
  }
  & ul {
    img {
      height: 25px;
      border: none;
      border-radius: 0px;+
    }
    & li {
      margin-top: 10px;
    }
  }
}
}

`

function Home() {
  return (
    <>
      <HomeContainer>
        <img src={bear} alt="gif" className='bear_img'/>
        <div className='bulle__info'>Bonjour, je suis DOMINGUES Vincent, Développeur Web !</div>
        {/* Body de la page */}
        <BodyContainer>
          {/* En-tête du body */}
          <div className='body_header'>
            <div className='body_header__content'>
              <h1>Vincent DOMINGUES</h1>
              <span>Dévelpppeur Web</span>
            </div>
            <img src={avatar} alt="Vincent"/>
          </div>

          {/* Coeur de la page */}
          <MainContent>
            <div className='profil_bloc'> 
              <h2>Profil:</h2>
              <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus auctor dolor at facilisis. Curabitur convallis fringilla lorem eget malesuada. Sed consequat sapien lectus, nec malesuada libero cursus in. Ut ex sem, gravida sit amet ornare at, vulputate non purus. Aenean finibus erat sapien, quis euismod arcu imperdiet ut. Sed ultrices, tortor et aliquet lacinia, metus nisi consequat massa, sollicitudin efficitur magna justo a libero. Nunc elit quam, commodo in dui id, fermentum tincidunt massa. Quisque faucibus convallis malesuada.
              </span>
            </div>

            <div className='etude_bloc'> 
              <img src={avatar2} alt="onion head" />
              <div className='etude_bloc__content'>
                <h2>Etudes:</h2>
                <span>
                <ul>
                  <li>• 2014/2015 - BAC STI2D Système Informatiquer et Numérique</li>
                  <li>• 2020/2020 - Formation Tronc Commun Informatique</li>
                  <li>• 2021/2022 - Formation Développeur Web</li>
                </ul>
                </span>
              </div>            
            </div>

            <div className='skill_bloc'> 
              <div className='skill_bloc__content'>
                <h2>Compétences:</h2>
                <span>
                <Skill />
                </span>
              </div>   
              <img src={avatar3} alt="onion head" />         
            </div>
          </MainContent>
        </BodyContainer>
      </HomeContainer>
    </>
  );
}

export default Home;
