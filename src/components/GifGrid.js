import React from 'react';
import { useFecthGifs } from '../hooks/useFecthGifs';
import { GridItem } from './GridItem';



export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);
   

const {data:images, loading} = useFecthGifs( category );


     return ( 
     <div className="card-grid">
        <h3 className='animate__animated animate__fadeIn'> {category}</h3> <br/>

        { loading && <p>loading</p>}       
          {
                images.map( imagen => {
                    return <GridItem 
                            key={ imagen.id} 
                            {...imagen} 
                            />
                })
         }
        
         
     </div>
     
            );
}


