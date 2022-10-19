import React from "react";
import {MenuList} from '../helpers/MenuList';
import MenuItem from "../components/MenuItem";
import pic from "../assets/OfficialGuideGre.pdf";
import pic1 from "../assets/GREPrep.pdf";
import pic2 from "../assets/GRE Free Prep Resources.pdf";
import '../styling/Menu.css';
function Gre() {
  return (
    <div className='menu'>
        <h1 className="menuTitle">GRE Prep Sources</h1>
        <div className="menuList">
            {
                MenuList.map((menuItem,key) => {
                    return (
                    <MenuItem 
                    key={key}
                    image={menuItem.image} 
                    name={menuItem.name} 
                    price={menuItem.price}
                    />
                
                ) 
            })}

        </div>
            <div className="container">
                <h1 className="menuTitle" >Downloadable Materials</h1>
                <ul className="list-container">
                    <li className="list-val"><a className="resourcelink" href={pic} download>Official Gudie</a></li>
                    <li className="list-val"><a className="resourcelink" href={pic1} download>GRE Prep</a></li>
                    <li className="list-val"><a className="resourcelink" href={pic2} download>Prep Resource</a></li>
                </ul>
                <br/>
            </div>
    </div>
  )
}

export default Gre