import { useState } from "react";
import { StyledRegisterVideo } from "./styles"



const RegisterVideo = () =>{
    const [formVisivel,setFormVisivel] = useState(false)
    const [titulo,setTitulo] = useState("")
    const [url,setUrl] = useState('')
    
    return (
        <>
            <StyledRegisterVideo>
                <button className="add-video" onClick={() => setFormVisivel(true)}>
                    +
                </button>
                {formVisivel && 
                                <form>
                                <div>
                                    <button className="close-modal" onClick={() => setFormVisivel(false)}>
                                        X
                                    </button>
                                    <input placeholder="Titulo do Vídeo" />
                                    <input placeholder="URL"/>
                                    <button type="submit">
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                }

            </StyledRegisterVideo>
        </>
    )
}



export default RegisterVideo;
