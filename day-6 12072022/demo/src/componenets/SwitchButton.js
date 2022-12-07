import React from "react";

export default class SwitchBtn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            clicked: false
        }
    }



    render(){
        return(
            <div
            onClick={()=>{
                this.setState({ clicked: ! this.state.clicked  })
            }}
            className={   this.state.clicked === false ? "switch": "switch active"  }  >
                <div></div>
            </div>
        );
    }
}