import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Brand from '../images/Brand.png'
import Girl from '../images/Girl.png'
import React from 'react';
import {AiTwotoneSetting} from 'react-icons/ai'
import {SlLogout} from 'react-icons/sl'
import {RiFileHistoryLine} from 'react-icons/ri'
import {MdDashboard} from 'react-icons/md'
export default function SideBar(){
    return(
      <>
      <section className='section-1'>
      <div className='section-2'>
        <div className='section-3'>
          
        <nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
    <img src={Brand} alt='' className='brand-img'/>
          <div className='client'>
          
             <img className='client-img' src={Girl} alt=""/>
          
            <h1>John Doe</h1>
            <h6>johndoe@gmail.com</h6>
          </div>
          <div className='dash'>
            <button id='dash-btn'><MdDashboard/> Dashboard</button>
            <h5><RiFileHistoryLine/> Transaction History</h5>
            <h5><AiTwotoneSetting/> Settings</h5>
            <h6><SlLogout/> Log out</h6>
          </div>
    </ul>
  </div>
</nav>

          <div className='yes'>
          <img src={Brand} alt='' className='brand-img'/>
          <div className='client'>
          
             <img className='client-img' src={Girl} alt=""/>
          
            <h1>John Doe</h1>
            <h6>johndoe@gmail.com</h6>
          </div>
          <div className='dash'>
          <button id='dash-btn'><MdDashboard/> Dashboard</button>
            <h5><RiFileHistoryLine/> Transaction History</h5>
            <h5><AiTwotoneSetting/> Settings</h5>
            <h6><SlLogout/> Log out</h6>
          </div>
          </div>
        </div>
      </div>

      </section>

      
      </>
    )
}