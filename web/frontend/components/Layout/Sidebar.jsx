import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoHome, IoSettingsSharp } from 'react-icons/io5';
import { FaBullhorn } from 'react-icons/fa';
import './Sidebar.css';
import '../../assets/index.css';
import CustomerSupport from '../../assets/CustomerSupport.png';
import Omnichannel from '../../assets/Omnichannel.png';
import Webhook from '../../assets/Webhook.png';

export default function Sidebar() {
  return (
    <div className='sidebar-nav'>
      <button className='sidebar-button button-primary'>New Campaign</button>
      <IconContext.Provider
        value={{
          //color: var(--main-color);
          size: '25px',
        }}
      >
        <div>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'active sidebar-nav-link' : 'sidebar-nav-link'
            }
          >
            <span className='icon-image'>
              <IoHome />
            </span>
            <span className='icon-text'>Home</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/campaigns'
            className={({ isActive }) =>
              isActive ? 'active sidebar-nav-link' : 'sidebar-nav-link'
            }
          >
            <span className='icon-image'>
              <FaBullhorn />
            </span>
            <span className='icon-text'>Campaigns</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/referrals'
            className={({ isActive }) =>
              isActive ? 'active sidebar-nav-link' : 'sidebar-nav-link'
            }
          >
            <img src={Omnichannel} alt='Referrals' className='icon-image' />

            <span className='icon-text'>Referrals</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/settings'
            className={({ isActive }) =>
              isActive ? 'active sidebar-nav-link' : 'sidebar-nav-link'
            }
          >
            <span className='icon-image'>
              <IoSettingsSharp />
            </span>
            <span className='icon-text'>Settings</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/integrations'
            className={({ isActive }) =>
              isActive ? 'active sidebar-nav-link' : 'sidebar-nav-link'
            }
          >
            <img src={Webhook} alt='Integrations' className='icon-image' />

            <span className='icon-text'>Integrations</span>
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/support'
            className={({ isActive }) =>
              isActive ? 'active sidebar-nav-link' : 'sidebar-nav-link'
            }
          >
            <img
              src={CustomerSupport}
              alt='Customer Support'
              className='icon-image'
            />

            <span className='icon-text'>Support</span>
          </NavLink>
        </div>
      </IconContext.Provider>
    </div>
  );
}
