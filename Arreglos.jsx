import React from 'react'
let numeroActual=5;
const Arreglos = () => {
    const [numeros, setNumeros] =  React.useState([{key:0, valor:1}])
    const [tiempo, setTiempo] =  React.useState(1)
    
    const AgregarNumeros = () => {
        console.log("Hicisteclick");
        numeroActual=numeroActual + 1;
        setNumeros([...numeros,numeros.length+1])
    }
    const aumentar = ()=>{
        setTiempo(tiempo+1)
        setNumeros([
            ...numeros, {key:tiempo, valor:tiempo-1}
        ])

    }


  return (
    <div>
        <ul>
        {
            numeros.map((item, index) =>(
                <li key={index}>
                    {/* no ppueden repetirse las llaves */}
                    {item}-{index}
                </li>
            ))
        }
        </ul>
        <p>Tiempo: {tiempo}   </p>
        {
            numeros.map(item=>(
                <li>
                    {item.valor}
                </li>
            ))
        }
        <button 
            className="btn btn-dark"   
            onClick ={()=>{
                AgregarNumeros ()
            }} 
        >Agregar</button>
    </div>
  )
}

export default Arreglos