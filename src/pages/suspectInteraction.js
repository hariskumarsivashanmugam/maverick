import React from 'react';
import './suspectInteraction.scss';
import { Button } from 'semantic-ui-react'
import DropdownComponent from '../components/dropdown';
import PaginationComponent from '../components/pagination';

export default function SuspectInteraction(){
    
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
  <div class="active section">Suspect's Interaction</div>
</div>
        </div>
</div>

<div class="ui bottom attached segment pushable">
  <div class="ui visible left vertical sidebar menu">
    <div class="upload-title">
        Face Selected to Search
    </div>
    <div class="upload-container">
    <div class="ui card">
  <div class="image-search">
    <img  src={require('../assets/profileImage.jpg')} class="ui image"/>
  </div>
</div>
<h4>Maximum Association: 47</h4>
<h4>Location Suspect Appeared:</h4>
<div class="location-container">
    <div class="location-icon">
        <i aria-hidden="true" class="small map marker alternate icon"></i>
    </div>
    <div class="location-text">
        298 Sycamore Lake Road
    </div>
</div>
</div>
  </div>
  <div class="pusher">
        <div class=" ui basic segment">
        <div>
            <h3>Interaction with People</h3>
        </div>
        <div class="filter">
            Use filters to customise your search
        </div>
        <div class="custom-filters">
            <div class="group-by-location">
                <div class="filter-heading">Group by location</div>
                <div class="filter-component">
                    <DropdownComponent></DropdownComponent>
                </div>
            </div>
            <div class="start-date">
                 <div class="filter-heading">StartDate</div>
                 <div class="ui calendar" id="example2">
    <div class="ui input right icon">
      <i class="calendar icon"></i>
      <input type="text" placeholder="Date"/>
    </div>
  </div>
            </div>
            <div class="end-date">
                <div class="filter-heading">End Date</div>
            
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
            <h3>Listing all associates to the Suspect</h3>
        </div>
        <div class="uploaded-detail image-uploaded">
        <div class="ui card">
  <div class="ui image">
    <img  src={require('../assets/profileImage.jpg')} class="custom-size"/>
  </div>
  <div class="name">
      <h3>John Doe</h3>
  </div>
  <div class="appearance">
      Appearance : 14
  </div>
  <div class="view-relation">
         <Button basic color='#02A8DE' class="apply-filter">
                    VIEW RELATION
        </Button>
  </div>
</div>

        </div>
        </div>

  </div>
</div>  
    </div>

)
            
}