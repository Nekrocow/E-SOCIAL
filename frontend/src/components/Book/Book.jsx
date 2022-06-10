import React from 'react'
import style from './Book.module.css'

function Book({nombre,image}) {
    
    return (
        <div className={style.bookItem}>
            <div>
                <h1 className= {style.nombre}>{nombre}</h1>
                <img
                    className={style.book}
                    src={image} 
                    alt='Img not found'
                    onError={(e)=>e.target.setAttribute('src','https://pbs.twimg.com/profile_images/1611903252/Books-Icon120x120_400x400.jpg')} />
            </div>
        </div>
    )
}

export default Book