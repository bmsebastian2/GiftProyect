import React,{useEffect,useState} from 'react';
import getGifts from  '../services/getGift'
import Gift from "./Gift"

const GiftofList = ({params}) => {

    const {keyword} = params
    const [loading, seTloading] = useState(false)
    const [gift, setGift] = useState([]); 
  
  useEffect(() => {
    seTloading(true);
    getGifts({keyword})
      .then(gift =>{ 
      setGift(gift) 
      seTloading(false)
      }
      )}
      , [keyword]);
   if(loading){
     return <i>Cargando...</i>
   }
  return  <div> 
   
           {
             
            gift.map( elementGift => 
               <Gift 
                  elementGift = {elementGift} 
                  key = {elementGift.id}
               />                 
            )
          } 
          </div>
    
}
export default GiftofList
