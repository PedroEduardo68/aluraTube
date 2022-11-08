import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/TimeLine'


const HomePage = () => {
 



    return(
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header/>
                <Timeline playlists={config.playlist} />
            </div>
        </>
    )
}

export default HomePage





// const Menu = () =>{
//     return (
//         <>
        
//         </>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
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





const Timeline = (Props) =>{


    const playlistNames = Object.keys(Props.playlists)

    return (
        <>
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = Props.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
        </>
    )
}

