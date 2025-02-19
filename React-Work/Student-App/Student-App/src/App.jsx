import { Component } from "react";
import Header from "./component/Header";
import Data from "./component/Data.js"
export default class  App extends Component{

  constructor(){
    super();
    this.state = {
      studentList : Data,
      branchList : ["IT","CS","CV","Mech"],
      defaultBranch : "All",
      btnDecoration : {
        width : "100px"
      }

    }

  }

render(){
  return <>
  <Header/>
  <div className="container  mt-3">
    <div className="row">
      <div className="col-md-6 ">
        <input className="form-control" type="text" placeholder="Enter your rollno" />
      </div>
      <div className="col-md-6 ">
        <input className="form-control" type="text" placeholder="Enter your Name"/>
     </div>
     </div>

     <div className="row mt-2">
      <div className="col-md-6">
        <select className="form-control">
          <option value="0">Gender</option>
          <option value="male">male</option>
          <option value="felame">felame</option>
        </select>
      </div>
      <div className="col-md-6">
        <select className="form-control">
          <option value="0">Select Branch</option>
          {this.state.branchList.map((branch,index)=>{return <option value={branch} key={index}>{branch}</option>})}
        </select>
      </div>
     </div>

     <div className="row mt-2">
      <div className="col-md-6 ">
        <button className="btn btn-primary"  > Add Student</button>
      </div>
      <div className="col-md-6 " >
        <button className="btn btn-success  " on style={this.state.btnDecoration} >CS ({this.state.studentList.filter((student)=>{ return student.branch == "CS"}).length})</button>
        <button className="btn btn-warning ms-2"   style={this.state.btnDecoration}>IT ({})</button>
        <button className="btn btn-primary ms-2"  style={this.state.btnDecoration}>CV </button>
        <button className="btn btn-secondary ms-2" style={this.state.btnDecoration}>Mech</button>
        <button className="btn btn-dark ms-2 "  style={this.state.btnDecoration}>Total ({})</button>
      </div>
     </div>

   
  </div>
  </>
}


} 