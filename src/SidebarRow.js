/* eslint react/prop-types: 0 */
import React from 'react';
import './SidebarRow.css';
import HomeIcon from '@material-ui/icons/Home';

const SidebarRow = ({ title }) => (
  <div className="sidebarRow">
    <HomeIcon />
    <h2>{title}</h2>
  </div>
);

export default SidebarRow;
