import React from "react";

export default class Forms extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username:"",
            password: ""
        }
    } 
    validateForm(){
        console.log(this.state);
    }
 
    render(){
        return(
            <div>
                <form onSubmit={ (event)=>{
                     
                    event.preventDefault(); 
                    this.validateForm(); 
                } }>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" 
                        
                        className={ this.state.username ==="" ? "form-control is-invalid" : "form-control is-valid" }


                        onChange={ (event)=>{
                            const value = event.target.value;

                            this.setState({ username :  value })


                        } }
                        value={ this.state.username } />
                    </div>


                    <div className="form-group">
                        <label>password</label>

                        <input type="password" 
                        
                        className= { this.state.password==="" ? "form-control is-invalid": "form-control is-valid" } 
                        
                        

                        value={ this.state.password } 
                        onChange={ (event)=>{
                            this.setState({ password : event.target.value })
                        } }  />
                         
                    </div>






                    <div className="form-group">
                        <button disabled={  this.state.username==="" || this.state.password===""    } type="submit" className="btn btn-primary">Validate </button>
                    </div>

                </form>
            </div>
        );
    }
}