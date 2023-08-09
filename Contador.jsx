import React,{useState} from 'react';
const Contador = () => {
    const [numerodeClicks, setNumerodeClicks]=useState(0)
    // variable que se cambia del dom
    const [numeroClicks, setNumeroClick] = React.useState(0);
    const manejarClick = ()=>{
        setNumeroClick(numeroClicks+1)
    }
    return (
        <div>
        Contador: {numeroClicks}
        {/* Al pasar el evento */}
        <br/><button onClick ={()=>{manejarClick ()}}>Click</button>
       </div>
    )
}
export default Contador;