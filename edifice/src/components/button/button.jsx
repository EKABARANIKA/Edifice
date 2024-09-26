import React from "react"
import "./button.css";
export default function Button(props){
    return(
        <div className='compound'>
              
            <button className={props.Class} type="submit">{props.Name}</button>
                 
      </div>
    )
}