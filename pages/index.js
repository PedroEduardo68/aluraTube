import config from '../config.json'
import styled from 'styled-components'


const HomePage = () => {
    const estiloDaHomePage = {backgroundColor: "red"}



    return(
        <>
            <div style={estiloDaHomePage}>
                <Menu/>
                <Header/>
                <TimeLine />
            </div>
        </>
    )
}

export default HomePage





const Menu = () =>{
    return (
        <>
        
        </>
    )
}

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-Items: center;
        width: 100%;
        padding: 16px 32px;
    }

`;

const Header = () =>{
    return (
        <>
            <StyledHeader>

                <section className="user-info" >
                        {/* <img src="banner" /> */}
                    <img src={`https://github.com/${config.github}.png`} />
                    <di>
                        <h2>
                            {config.name}
                        </h2>
                        <p>
                            {config.job}
                        </p>
                    </di>


                </section>

            </StyledHeader>

        </>
    )
}





const TimeLine = () =>{
    return (
        <>
        
        </>
    )
}