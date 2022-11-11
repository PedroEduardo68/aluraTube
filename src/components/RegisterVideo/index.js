import { useState } from "react";
import { StyledRegisterVideo } from "./styles"


const useFrom = (Props) =>{
    const [values,setValues] = useState(Props.initialvalues)

    const handleChange = (event) =>{ 
        const value = event.target.value;
        const name = event.target.name;
        setValues({...values, [name] :value })
    }

    const clearform = () =>{
        setValues({})
    }

    return {
        values,
        handleChange,
        clearform
    }
}


const RegisterVideo = () =>{
    const formCadastro = useFrom({
        initialvalues : {titulo : "", url: ""}
    })
    const [formVisivel,setFormVisivel] = useState(false)
   

    
    return (
        <>
            <StyledRegisterVideo>
                <button className="add-video" onClick={() => setFormVisivel(true)}>
                    +
                </button>
                {formVisivel && 
                            <form onSubmit={(event) =>{
                                event.prventDefault();
                                setFormVisivel(false)
                                formCadastro.clearform()
                            }}>
                                <div>
                                    <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                        X
                                    </button>
                                    <input placeholder="Titulo do Vídeo" values={formCadastro.values.titulo} onChange={formCadastro.handleChange} name="titulo" />
                                    <input placeholder="URL" values={formCadastro.values.url} onChange={formCadastro.handleChange}   name="url" />
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
