import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from "redux-form";
import  SelectorComponent from "./selector.component"

export class LoginForm extends Component{

  state = {
    groupUrl: "",
    emailUser: "",
    name: "",
    specialtyId: 0,
    groupId: 0,
    destinationPlace:"",
    studentTypeId: 0
  };

  groups = (specialtyId) => {
    this.setState({
      groupUrl: "http://www.dovidkaei.hneu.edu.ua/api/StudentAPI/Groups?specialtyId=" + specialtyId 
    })
  }

  componentWillReceiveProps(nextProps){
    console.log("hihuiii")
    console.log(this.props.revision != nextProps.revision)
    if(this.props.revision != nextProps.revision){
      this.setState({groupUrl: "",
      emailUser: "",
      name: "",
      specialtyId: 0,
      groupId: 0,
      destinationPlace:"",
      studentTypeId: 0});
    }
  }

  render() {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="text">Ваша електронна адреса</label>
        <input type="email" value={this.state.emailUser} className="form-control field" onChange={
          (e)=> {
            this.setState({
              emailUser: e.target.value
            })
          }
        } 
        placeholder="Електронна адреса" id="studentEmail" name="studentEmail" component="input" />
      </div>
      <div className="form-group">
        <label htmlFor="text">П.I.Б. у давальному вiдминку</label>
        <input value={this.state.name} type="text" className="form-control" onChange={(e) => {
          this.setState({
            name: e.target.value
          })
        }
        } placeholder="П.I.Б." id="studentName" name="studentName" component="input" />
      </div>
      <div className="form-group">
        <label htmlFor="text">Спецiальнiсть</label>
        <SelectorComponent className="form-control" onChange={(e) => {
          this.setState({
            specialtyId: e
          })
        }} groups={this.groups} url="http://www.dovidkaei.hneu.edu.ua/api/StudentAPI/Specialties" ></SelectorComponent>
      </div>
      <div className="form-group">
        <label htmlFor="text">Група</label>
        <SelectorComponent className="form-control" onChange={(e)=> {
          this.setState({
            groupId: e
          })
        }} url={this.state.groupUrl} ></SelectorComponent>
      </div>
      <div className="form-group">
        <label htmlFor="text">Мiсце призначення</label>
        <input value={this.state.destinationPlace} type="text" className="form-control" onChange={(e)=> {
          this.setState({
            destinationPlace: e.target.value
          })
        }} placeholder="Мiсце призначення" id="destinationPlace" name="destinationPlace" component="input" />
      </div>
      <div className="form-group">
        <label htmlFor="text">Тип навчання</label>
        <SelectorComponent className="form-control" onChange={(e) => {
          this.setState({
            studentTypeId: e
          })
        }} url="http://www.dovidkaei.hneu.edu.ua/api/StudentAPI/StudentTypes" ></SelectorComponent>
      </div>
      <button onClick={()=>{
        console.log(this.state.emailUser, this.state.name, this.state.specialtyId, this.state.groupId, this.state.destinationPlace, this.state.studentTypeId)
        this.props.onSubmit(this.state.emailUser, this.state.name, this.state.specialtyId, this.state.groupId, this.state.destinationPlace, this.state.studentTypeId)}} className="btn btn-success btn-login">Вiдправити</button>
    </div>
  )
  }

}

LoginForm = reduxForm({
  form: "loginForm"
})(LoginForm);

export default LoginForm;
