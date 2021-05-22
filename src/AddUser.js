import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "./context";
var uniqid = require('uniqid');
const Animation = posed.div({
    visible:  {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
});
 class AddUser extends Component {
    
    state  = {
        visible: false,
        name: "",
        department:"",
        salary: "" 
    }
    changeVisibility = (e) => {
            this.setState({
                visible: !this.state.visible
            })
    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    changeDepartment = (e) => {
        this.setState({
            department: e.target.value
        })
    }
    changeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    } 
    addUser = (dispatch,e) => { 
        e.preventDEfault();
        const {name,department,salary} = this.state;
        
        const newUser = {
            id: uniqid(),
            name: name,
            salary: salary,
            department: department 
        }
        dispatch({type : "ADD_USER",payload: newUser});
    }
    render() {
       const {visible,name,department,salary} = this.state;
        
       return <UserConsumer>
           {
               value =>  {
                   const {dispatch} = value;
                return (
                    <div className = "col-md-8 mb-4" >
                        <button onClick= {this.changeVisibility} class = "btn btn-dark btn-block mb-2">{visible ? "Formu Gizle" : "Formu Göster"}</button>
                        <Animation pose =  {visible ? "visible" : "hidden"}>
                        <div className ="card" >
                                <div className="card-header">
                                        <h4>Personel Ekle</h4>
                                </div>
        
                                <div className="card-body">
                                        <form onSubmit = {this.addUser.bind(this,dispatch)}>
                                            <div className="form-group">
                                            <label htmlFor="name">İsim</label>
                                            <input
                                            type = "text"
                                            name = "name"
                                            id = "id"
                                            placeholder = "İsim Giriniz"
                                            class = "form-control"
                                            value = {name}
                                            onChange = {this.changeName}
                                            />
                                            </div>
        
                                            <div className="form-group">
                                            <label htmlFor="department">Departman</label>
                                            <input
                                            type = "text"
                                            name = "department"
                                            id = "department"
                                            placeholder = "Departman Giriniz"
                                            class = "form-control"
                                            value = {department}
                                            onChange = {this.changeDepartment}
                                            />
                                            </div>
        
                                            <div className="form-group">
                                            <label htmlFor="salary">Maaş</label>
                                            <input
                                            type = "text"
                                            name = "salary"
                                            id = "salary"
                                            placeholder = "Maaş Giriniz"
                                            class = "form-control"
                                            value = {salary}
                                            onChange = {this.changeSalary}
                                            />
                                            </div>
        
                                            <button class = "btn btn-danger btn-block" type = "submit" >Personel Ekle</button>
                                        </form>
                                </div>
                        </div>
                        </Animation>
                    </div>
                )
               }
           }
       </UserConsumer>
       
       
    }
}
export default AddUser;