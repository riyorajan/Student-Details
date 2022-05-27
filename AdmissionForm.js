import React, { Component } from "react";    
import './AdmissionForm.css'    
    
class AdmissionForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',    
            
            dob: '',    
            gender: '',    
            
            
            classes: 'select',
            division: 'select',
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { studName, dob, gender, classes, division } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
    
        







        //DOB    
        if (dob) {    
            formIsValid = false;    
            //formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
        
        //Gender    
        if (gender === '') {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        } else{
            formErrors["genderErr"] = ""; 
        }   
    




        if (classes === '' || classes === "select") {    
            formIsValid = false;    
            formErrors["classErr"] = "Select a class";    
        }    

        if (division === '' ) {    
            formIsValid = false;    
            formErrors["divisionErr"] = "Select a division";    
        }    
        
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
   
      
    handleSubmit = (e) => {    
        e.preventDefault();  
        if(this.state.studName !=='' && this.state.dob !== '' && this.state.classes !=='')  {
            alert("name :" 
                + this.state.studName + ", DOB: " 
                + this.state.dob + ", Gender:"
                + this.state.gender + ", Class:"
                + this.state.classes + ",Division:"
                + this.state.division
            )
        }
        
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studNameErr, dobErr, genderErr, classErr,divisionErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h2 style={{ textAlign: "center" }} >Student Information </h2>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>    
                        
                        <br></br><br></br>
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="date" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>  
                        <br></br>  <br></br>
                        <div>    
                        
                            <label htmlFor="gender">Gender</label> <br></br><br></br>
                            <input type="radio"  onChange={this.handleChange} name="gender" value="Male" />Male<br></br><br></br>
                            <input type="radio" onChange={this.handleChange} name="gender" value="Female" />Female
                            
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    <br></br><br></br>




                        <div>    
                            <label htmlFor="gender">Class</label>    
                            <select name="classes" onChange={this.handleChange}    
                                className={classErr ? ' showError' : ''}    
                                value={this.state.class} >    
                                <option value="select">--Select--</option>    
                                <option value="I">I</option>    
                                <option value="II">II</option>    
                                <option value="III">III</option>  
                                <option value="IV">IV</option>    
                                <option value="V">V</option>    
                                <option value="VI">VI</option>
                                <option value="VII">VII</option>    
                                <option value="VIII">VIII</option>    
                                <option value="IX">IX</option>
                                <option value="X">X</option>    
                                <option value="XI">XI</option>    
                                <option value="XII">XII</option>  
                            </select>    
                            {classErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{classErr}</div>    
                            }    
                        </div>    
                        
                        
                        <div>    
                            <label htmlFor="gender">Division</label>    
                            <select name="division" onChange={this.handleChange}    
                                className={classErr ? ' showError' : ''}    
                                value={this.state.division} >    
                                <option value="" selected>--Select--</option>    
                                <option value="A">A</option>    
                                <option value="B">B</option>    
                                <option value="C">C</option> 
                            </select>   
                            {/* {divisionErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{divisionErr}</div>    
                            }     */}
                            {classErr &&     
                             <div style={{ color: "red", paddingBottom: 10 }}>{classErr}</div>    
                            }    
                        </div>    


                        
                        <input type="submit" value="Submit" />  
                          
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default AdmissionForm;