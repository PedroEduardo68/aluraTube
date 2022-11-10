import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

export const ColorModeContext = createContext({
    mode: "",
    setMode: () => { alert("Você precisa me configurar primeiro!")  },
    toggleMode: () => { alert("Você precisa me configurar primeiro!")  },
})

const ColorModeProvider = (Props) =>{
    const [mode, setMode] = useState(Props.initialMode);

    function toggleMode() {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }


    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {Props.children}
        </ColorModeContext.Provider>
    )

}



// const ColorModeProvider = ({children}) =>{
//     return (
//         <div>
//             {children}
//         </div>
//     )

// }


export default ColorModeProvider;