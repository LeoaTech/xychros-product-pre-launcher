import '../../assets/index.css';
import './MainPage.css';
import React from 'react';

export default function MainPage(props) {
  return <div className='main-div'>{props.children}</div>;
}
