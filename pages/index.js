import config from '../config.json'
import styled from 'styled-components'
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu'
import { StyledTimeline } from '../src/components/TimeLine'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { videoService } from "../src/services/videoService";
import { useEffect } from 'react/'


const supabaseUrl = 'https://guroxesxctmenafhhudh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1cm94ZXN4Y3RtZW5hZmhodWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTM2NjgsImV4cCI6MTk4Mzk2OTY2OH0.SjPLtP75hOeRnZtXCeaZ9MJrMQX-QowuGMAvu003nWs'
const supabase = createClient(supabaseUrl, supabaseKey)



const HomePage = () => {
    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = useState("")
    const [playlists, setPlaylists] = React.useState({}); 


 

    useEffectt(() => {
        console.log("useEffect");
        service
            .getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                // Forma imutavel
                const novasPlaylists = {};
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
                    novasPlaylists[video.playlist] = [
                        video,
                        ...novasPlaylists[video.playlist],
                    ];
                });

                setPlaylists(novasPlaylists);
            });
    }, []);





    return(
        <>
          
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu setValorDoFiltro={setValorDoFiltro} valorDoFiltro={valorDoFiltro}/>
                <Header  />
                <Timeline searchValue={valorDoFiltro} playlists={playlists} />
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
    background-color: ${({ theme }) => theme.backgroundLevel1};

    
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {

        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;


const StyledBanner = styled.div`
    background-color: blue;
    height: 230px;
    background-image: url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')
`



const Header = () =>{
    return (
        <>
        
            <StyledHeader>
            <StyledBanner />
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





const Timeline = ({searchValue,...Props}) =>{


    const playlistNames = Object.keys(Props.playlists)

    return (
        <>
            <StyledTimeline>
                {playlistNames.map((playlistName) => {
                    const videos = Props.playlists[playlistName];
                    // console.log(playlistName);
                    // console.log(videos);
                    return (
                        <section key={playlistName}>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos.filter((video) =>{
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchNormalized)
                                }).map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
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

