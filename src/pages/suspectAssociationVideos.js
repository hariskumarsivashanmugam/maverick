import React from 'react';
import './suspectAssociationVideos.scss';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import DropdownComponent from '../components/dropdown';
import $ from 'jquery'; 

export default function SuspectAssociationVideos(){
    $(document).ready(function(){
    $('#btnModal').click(function() {
        $('.ui.modal').modal('show');
      })
    });
    return (

    <div class="total-container">
        <div class="ui massive menu menu-container attached borderless">
        <div class="title">
            <div class="logo">Maverick.io</div>
            <div class="page-title">Dashboard</div>
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
<div class="ui small menu menu-container-down attached borderless">
        <div class="title">
        <div class="ui small breadcrumb">
  <a class="section">Upload Image</a>
  <i class="right chevron icon divider"></i>
  <a class="section">Suspect's Interaction</a>
  <i class="right chevron icon divider"></i>
  <div class="active section">Suspect and Association Videos</div>
</div>
        </div>
</div>

<div class="ui bottom attached segment pushable">
  <div class="ui visible left vertical sidebar menu">
    <div class="upload-title">
        Suspect
    </div>
    <div class="upload-container">
    <div class="ui card">
  <div class="image-search">
    <img  src={require('../assets/profileImage.jpg')} class="ui image"/>
  </div>
</div>
</div>
<div class="upload-title-down">
        Associate
    </div>
    <div class="upload-container">
    <div class="ui card">
  <div class="image-search">
    <img  src={require('../assets/profileImage.jpg')} class="ui image"/>
  </div>
</div>
</div>
  </div>
  <div class="pusher">
        <div class=" ui basic segment">
        <div>
            <h3>Suspect and Associate Videos</h3>
        </div>
        <div class="filter">
            Use filters to customise your search
        </div>
        <div class="custom-filters">
            <div class="group-by-location">
                <div class="filter-heading">Sort By</div>
                <div class="filter-component">
                    <DropdownComponent></DropdownComponent>
                </div>
            </div>
            <div class="filter-btn">
                <div class="filter-buttons">
                    <button class="ui primary button apply-filter">APPLY</button>
                </div>
                <div class="filter-buttons">
                    <Button basic color='#02A8DE' class="apply-filter">
                    CLEAR
                    </Button>
                </div>

            </div>
        </div>
        <div class="section-heading">
            <h3>Video from 15:23, 12, April, 2019</h3>
        </div>
        <div class="uploaded-detail image-uploaded">
        <div class="video-container">
        <button id="btnModal" class="ui button">Show Modal</button>
        <div class="ui modal test">
  <div class="header">Select a Photo</div>
  <div class="content">
    <div class="description">
      <div class="ui header">Default Profile Image</div>
      <p>We've found the following gravatar image associated with your e-mail address.</p>
      <p>Is it okay to use this photo?</p>
    </div>
  </div>
</div>
        </div>

        </div>
        </div>

  </div>
</div>  

    </div>
    
    
)
            
}