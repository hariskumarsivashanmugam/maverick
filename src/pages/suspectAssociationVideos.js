import React from 'react';
import './suspectAssociationVideos.scss';
import { Button, Header, Image, Modal, Embed, Grid } from 'semantic-ui-react'
import DropdownComponent from '../components/dropdown';
import $ from 'jquery'; 
import { Link } from 'react-router-dom';
import ModalComponent from '../components/modal';

export default function SuspectAssociationVideos(){
    return (
      <html>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js"></script>
            <script>
    $('.ui.modal')
      .modal('show')
    ;
    </script>
        <body>
        <div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    Modal Title
  </div>
  <div class="image content">
    <div class="image">
      An image can appear on left or an icon
    </div>
    <div class="description">
      A description can appear on the right
    </div>
  </div>
  <div class="actions">
    <div class="ui button">Cancel</div>
    <div class="ui button">OK</div>
  </div>
</div>

      
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
        <Link to='/dashboard'><a class="section">Upload Image</a></Link>
  <i class="right chevron icon divider"></i>
  <Link to='/suspectInteraction'><a class="section">Suspect's Interaction</a></Link>
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

        <Grid doubling >
      <Grid.Column tablet={7} computer={5} largeScreen={4} widescreen={3}>
        <Modal trigger={
        <div class="ui card">
        <div class="ui image">
            <img  src={require('../assets/video.jpg')}/>
            <div class="play-button">
            <i class="play inverted icon"></i>
            </div>
        </div>
        </div>
        }>
    <Modal.Content>
      <Embed
      autoplay={true}
      brandedUI
      color='white'
      hd={false}
      id='D0WnZyxp_Wo'
      placeholder='/static/media/video.764962ea.jpg'
      source='youtube'
    />
    </Modal.Content>
  </Modal>
  </Grid.Column>





</Grid>
        

        </div>
        </div>
        </div>
  


  </div>

  
  </div>
  </body>


</html>

    
)
            
}