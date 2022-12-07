import React from "react";

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        // init state !!! 
        this.state = {  count : 1 }
    }
    render(){
        return(
            <div>
                <button  onClick={ ()=>{
                    /** §§§§§§§§§§§§§§  WRONG §§§§§§§§§
                     *   this.state.count++;
                    console.log(this.state.count);

                     */

                    this.setState(  {  count:  ( this.state.count + 1 )   }  )

                } }  > { this.state.count } clicks </button>
            </div>
        );
    }
}