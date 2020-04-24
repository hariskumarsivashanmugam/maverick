
import React, { Component, useState } from 'react';
import './suspectInteraction.scss';
import { Button, Grid } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import DropdownComponent from '../components/dropdown';
import PaginationComponent from '../components/pagination';
import { Link } from 'react-router-dom';
import association from '../json/association_details.json';

export default function SuspectInteraction(){
    const [date, setDate] = useState(null);
  const [dates, setDates] = useState([]);
  const handleDateChange = (event, data) => setDate(data.value);
  const handleDatesChange = (event, data) => setDates(data.value);
    return (
    <div class="total-container">
        
        <div class="ui massive menu menu-container attached borderless">
        <div class="title">
            <div class="logo"> <img
            src={require('../assets/logo_maverickio.png')} 
            class="ui small image"
        /></div>
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
  <Link to='/dashboard'><a class="section">Upload Image</a></Link>
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
        
        <div class="section-heading">
            <h3>Listing all associates to the Suspect</h3>
        </div>
        <div class="uploaded-detail image-uploaded">
        <Grid doubling class="doubling-grid">
      <Grid.Column tablet={7} computer={5} largeScreen={4} widescreen={3}>
      <div class="group-by-location">
                <div class="filter-heading">Group by location</div>
                <div class="filter-component">
                    <DropdownComponent></DropdownComponent>
                </div>
        </div>
      </Grid.Column>
      <Grid.Column tablet={7} computer={5} largeScreen={4} widescreen={3}>
      <div class="start-date">
                <div class="filter-heading">Start Date</div>
                <div class="filter-component">
               
  <SemanticDatepicker onChange={handleDateChange} />

                </div>
            </div>
      </Grid.Column>
      <Grid.Column tablet={7} computer={5} largeScreen={4} widescreen={3}>
      <div class="end-date">
                <div class="filter-heading">End Date</div>
                <div class="filter-component">
                <SemanticDatepicker onChange={handleDateChange} />
                </div>
            </div>
      </Grid.Column>
      <Grid.Column tablet={7} computer={5} largeScreen={4} widescreen={3}>
      <div class="filter-btn h-100">
                <div class="filter-buttons">
                <Link to='/suspectInteraction/groupbylocation'><button class="ui primary button apply-filter">APPLY</button></Link>
                </div>
                <div class="filter-buttons">
                <Link to='/suspectInteraction'><button class="ui basic button">CLEAR</button></Link>
                </div>

            </div>
      </Grid.Column>
    </Grid>
        <Grid doubling >
        {association.map(el => {
                  return (
      <Grid.Column tablet={7} computer={5} largeScreen={4} widescreen={3}>
        <div class="ui card">
            <div class="ui image">
                <img  src={require('../assets/profileImage.jpg')}/>
            </div>
            <div class="name">
                <h3>John Doe</h3>
            </div>
            <div class="appearance">
                  Appearance : {el.appearances}
            </div>
            <div class="view-relation">
            <Link to='/suspectAssociationVideos'><Button basic color='#02A8DE' class="apply-filter">
                                VIEW RELATION
                    </Button></Link>
            </div>
            </div>
      </Grid.Column>
      );
    })}


      
    </Grid>

  
    <div class="pagination">
            <PaginationComponent></PaginationComponent>
        </div>
        </div>
        </div>

  </div>
</div>  

        </div> 

)
            
}