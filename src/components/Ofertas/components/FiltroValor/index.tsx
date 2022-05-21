import { useEffect, useState } from "react"
import { CampTexto, Container } from "./stylesFiltroValor";

interface Props{
    setFiltro1: (value:string)=> void;
    setFiltro2: (value:string)=> void;
}

export default function FiltroValor({setFiltro1, setFiltro2}:Props) {
    const [campo1, setCampo1] = useState("")
    const [campo2, setCampo2] = useState("")

    function mask(value:string){
        if(Number(value) >= 0){
            return value
        } else{
            return ''
        }
    }
    
    
    console.log(Number('a') > 0)
    useEffect(()=>{
        function salvaFiltro(valor1 : string, valor2 : string){
            if(Number(valor1) < Number(valor2)){
                setFiltro1(valor1)
                setFiltro2(valor2)
                
            }else{
                setFiltro1(valor2)
                setFiltro2(valor1)
            }
        }

        salvaFiltro(campo1,campo2);

    },[campo1,campo2])

    return (
        <Container>
            De
            <CampTexto type="text" placeholder="R$ 00,00" value={campo1}  onChange={text => setCampo1(mask( text.target.value))}/>
            Até
            <CampTexto type="text" placeholder="R$ 00,00" value={campo2} onChange={text => setCampo2(mask( text.target.value))}/>
        </Container>
    )
}