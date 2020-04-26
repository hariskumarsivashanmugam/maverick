import React , { Component } from 'react';
import './dashboard.scss';
import {
  Link
} from "react-router-dom";
import SuspectInteraction from './suspectInteraction';

export default class UploadComponent extends Component {
  constructor(props){
    super();
  }
componentDidMount(){
}
  render(){
    return (
    <div class="total-container">
        <div class="ui massive menu menu-container attached borderless">
        <div class="title">
            <div class="logo">
            <img
            src={require('../assets/logo_maverickio.png')} 
            class="ui small image"
        />
            </div>
            <div class="page-title">Home</div>
        </div>
         <div class="right menu">
         <div class="profile-container">
        <img
            src={require('../assets/user.png')} 
            class="ui avatar image"
        />
          <div role="listbox" aria-expanded="false" class="ui simple item dropdown" tabindex="0">
      <i aria-hidden="true" class="small inverted chevron down icon"></i>
      <div class="menu transition">
        <div role="option" class="item">Settings</div>
        <div role="option" class="item">Logout</div>
      </div>
    </div>
          </div>
  </div>
</div>

<div class="ui bottom attached segment pushable">
  <div class="ui visible left vertical sidebar menu">
    <div class="upload-title">
        Upload an Image
    </div>
    <div class="upload-container">
        <div class="upload">+</div>
        <Link to='/dashboard'><button class="ui primary button">UPLOAD AND DETECT FACE</button></Link>
    </div>
  </div>
  <div class="pusher">
    <div>
    <div class="ui basic segment">
      <h3 class="ui header">Maverick Smart Video Processing</h3>
      <h3>Cohort Detection</h3>
    </div>
    <div class="detail-container">
        <h3>Upload an Image First!</h3>
        <h4>Please upload an image to detect faces</h4>
        <img
            src={require('../assets/upload.png')} 
            class="ui small large"
        />
    </div>
    </div>
   
        {/* <div class="image-uploaded ui basic segment">
        <div>
            <h3>Image Uploaded</h3>
        </div>
        <div class="uploaded-detail">
        <div class="ui card">
  <div class="image-search">
    <img  src={require('../assets/profileImage.jpg')} class="ui image"/>
  </div>
</div>
<div>
    Get associated results based on this image uploaded
</div>
<div class="btn-container">
<Link to='/suspectInteraction'><button class="ui primary button" >SEARCH INTERACTION</button></Link>
</div>
        </div>
        </div>*/}

  </div>
</div>   

    </div>
);
  }       

}
