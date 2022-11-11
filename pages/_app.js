import { useContext } from "react"
import { ThemeProvider } from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import ColorModeProvider, {ColorModeContext} from "../src/components/Menu/compenents/ColorModeProvider"
import RegisterVideo from "../src/components/RegisterVideo"





/**
 * The ProviderWrapper function takes in a child component and returns a ColorModeProvider component
 * that wraps the child component.
 * @param props - The props that are passed to the component.
 * @returns A function that returns a component
 */
// _app.js -> Definições globais do NextJS
// ThemeProvider -> Prover o tema para a app toda
// ColorModeProvider -> Prove o state de light ou dark mode para todo mundo 

const ProviderWrapper = (props) =>{
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}



// _app.js
const MyApp = ({ Component, pageProps }) => {
    const themeActive = {
        light: {
            backgroundBase: "#f9f9f9",
            backgroundLevel1: "#ffffff",
            backgroundLevel2: "#f0f0f0",
            borderBase: "#e5e5e5",
            textColorBase: "#222222",
        },
        dark: {
            backgroundBase: "#181818",
            backgroundLevel1: "#202020",
            backgroundLevel2: "#313131",
            borderBase: "#383838",
            textColorBase: "#FFFFFF",
        }
    
    }




    
    const context = useContext(ColorModeContext)





    return (
        <>
                <ThemeProvider theme={themeActive[context.mode]}>
                    <CSSReset />
                    <Component {...pageProps}/>
                    <RegisterVideo />
                </ThemeProvider>
        </>

    )


}



const _App = (Props) =>{
    return(
        <ProviderWrapper>
            <MyApp {...Props}/>
        </ProviderWrapper>
    )
}
  
export default _App;
