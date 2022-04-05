import { useEffect } from "react"

const Contacto = () => {

    const handleClick = () => {
        console.log('clik')
    }

    useEffect (()=> {
        window.addEventListener ('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [])
   
    return(
        <div>
            <p>Contacto</p>
        </div>
    )
}
export default Contacto;