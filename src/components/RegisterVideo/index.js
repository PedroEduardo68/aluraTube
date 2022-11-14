import { useState } from "react";
import { StyledRegisterVideo } from "./styles"
import { createClient } from '@supabase/supabase-js'


// get youtube thumbnail from video url
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

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

const supabaseUrl = 'https://guroxesxctmenafhhudh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1cm94ZXN4Y3RtZW5hZmhodWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTM2NjgsImV4cCI6MTk4Mzk2OTY2OH0.SjPLtP75hOeRnZtXCeaZ9MJrMQX-QowuGMAvu003nWs'
const supabase = createClient(supabaseUrl, supabaseKey)



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
                                supabase.from("video").insert({
                                    title:formCadastro.values.titulo,
                                    url:formCadastro.values.url,
                                    thumb: getThumbnail(formCadastro.values.url),
                                    playlist:"jogos",
                                }).then((resp)=>{
                                    console.log(resp);
                                })
                                .catch((err) => {
                                   console.log(err);
                                })
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
