import React,{useState} from 'react'
import { AddCategoria } from './AddCategoria';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
   
    const [categorias, setCategorias] = useState(['One Punch']);
  /*   const handleAdd=()=>{
        setCategorias(cats=> [...cats, 'HunterXHunter' ])
    } */

    return (
        <>
        <h2>Gif Expert App</h2>
        <AddCategoria setCategorias={setCategorias}/>
        <hr/>
        
        <ol>
            {
                categorias.map((categoria)=> 
                   <GifGrid 
                        key={categoria}
                        categoria={categoria}  
                    />
                )
            }
        </ol>
        
        </>
    )
}
