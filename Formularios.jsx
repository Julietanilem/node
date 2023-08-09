import React from 'react'

const Formularios = () => {
  const [fruta, setFruta] = React.useState("")
  const [descripcion, setdescripcion] = React.useState("")
  const [calidad, setCalidad] = React.useState("Muy buena")
  const [inventario, setInventario] = React.useState([])
 
  const guardarDatos = (e) =>{
    e.preventDefault()
    if(!fruta.trim()){
      console.log("Fruta esta vacio")
      return false;
    }
    if(!descripcion.trim()){
      console.log("Descripción esta vacio")
      return false;
    } 

    let canasta ={
      fruta ,
      descripcion,
      calidad
    }
    setInventario([...inventario,canasta ])
    setFruta("")
    setdescripcion("")
    setCalidad("Muy buena")
    console.log("Agregando")
  }
  return (
    <div>
        <h2>Formularios</h2>
        <form onSubmit={e => guardarDatos(e)}>
           
                <input
                  type="text"
                  className = "form-control mb-2" 
                  placeholder="Ingrese ruta" 
                  onChange={ evento => {setFruta(evento.target.value)}}
                  value={fruta}
                />
                <input 
                  type="text" 
                  className = "form-control mb-2"
                  placeholder="Ingrese descripcion" 
                  onChange={(evento)=>{setdescripcion(evento.target.value)}}
                  value={descripcion}
               />
                <select id="calidad"
                   onChange={e => setCalidad(e.target.value)}
                   value={calidad}>
                  <option value="Muy buena">Muy buena</option>
                  <option value="Buena">Buena</option>
                  <option value="Regular">Regular</option>
                </select><br/>
                <button className='btn btn-primary btn-block' >Listo</button>
        </form>
        <br/>
        {
          inventario.length !==0 &&
                inventario.map((item, index) => (
                  <div key={index}>
                    <hr/>
                    <p>{item.fruta}</p>
                    <p>{item.descripcion}</p>
                    <p>{item.calidad}</p>
                  </div>
            ))
        }
    </div>
  )
}
export default Formularios