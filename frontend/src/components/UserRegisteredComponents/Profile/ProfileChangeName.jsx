import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {cambiarNombre} from "../../../redux/actions/actionUser"
import s from './Profile.module.css'
import swal from 'sweetalert';
export default function ProfileChangeName({closeModalNombre, idUser}) {
  const [nombre, setNombre] = useState("")
  const dispatch = useDispatch()
  const user = useSelector(state => state.usuarioActual)
console.log(idUser)

  const handleChange = (e) => {
    setNombre(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
     const hola = await dispatch(cambiarNombre({
        id: idUser,
        nombre: nombre
    })) 
     console.log(hola)
    swal('Tu nombre se modifico correctamente')
    window.location.reload()
  }

  return (
    <div className={s.containerGeneral}>
      <div className={s.containerImagen}>
      <button onClick={closeModalNombre}  >X</button>
        <div>
          <p>Cambia tu nombre de usuario</p>
          <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
             className={s.input}
              name="nombre"
              value={nombre}
              onChange={handleChange}
              id="nombre"
              type="nombre"
              placeholder="Cambia tu nombre de usuario"
            />
    
              <button className={s.buttonPsw} type="submit">
                CAMBIAR NOMBRE DE USUARIO
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}
