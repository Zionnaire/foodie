import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Brand from '../images/Brand.png'
import Girl from '../images/Girl.png'
import React from 'react';
export default function SideBar(){
    return(
      <>
      <section className='section-1'>
      <div className='section-2'>
        <div className='section-3'>
          <img src={Brand} alt='' className='brand-img'/>
          <div className='client'>
          
             <img className='client-img' src={Girl} alt=""/>
          
            <h1>John Doe</h1>
            <h6>johndoe@gmail.com</h6>
          </div>
          <div className='dash'>
            <button id='dash-btn'>Dashboard</button>
            <h5>Transaction History</h5>
            <h5>Settings</h5>
            <h6>Log out</h6>
          </div>
        </div>
      </div>

      </section>
      </>
    )
}