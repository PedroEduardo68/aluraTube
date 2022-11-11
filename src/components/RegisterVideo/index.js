import { useState } from "react";
import { StyledRegisterVideo } from "./styles"



const RegisterVideo = () =>{
    const [formVisivel,setFormVisivel] = useState(false)
    return (
        <>
            <StyledRegisterVideo>
                <button className="add-video">
                    +
                </button>
                {formVisivel && 
                                <form>
                                <div>
                                    <button className="close-modal">
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
