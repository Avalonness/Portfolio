import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import logo from '../../assets/logo2.svg'
import git from '../../assets/github-brands.svg'
import '../../utils/styles/font.css'

const HeaderContainer = styled.div `
background: ${colors.secondary};
font-size: 22px;
& .logo {
    height: 20px;
}
& .header__nav__content {
    width: 60%;
    margin: auto;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
    align-items: center;
    font-family: 'Lobster', cursive;
    & ul {
        display: flex;
        & li {
            margin-right: 15px;
            font-size: 20px;
            display: flex;
            align-items: center;
            & img {
                width: 20px;
                margin-right: 5px;
            }
            & .cv__element{
                background: ${colors.attention};
                padding: 5px;
                border-radius: 8px;
            }
        }
    }
}
`



function Header () {
    return (
        <>
            <header>
            {/* Conteneur header */}
                <HeaderContainer>
                {/* Conteneur des éléments du header */}
                    <div className='header__nav__content'>
                        <div><img src={logo} alt="logo" className='logo' /><span>Vincent DOMINGUES</span></div>
                        <div>
                            <ul>
                                <li>Projet</li>
                                <li><img src={git} alt='gitHub'/>GitHub</li>
                                <li><span className='cv__element'>Télécharger CV</span></li>
                            </ul>
                        </div>
                    </div>
                </HeaderContainer>
            </header>
        </>
    )
}

export default Header