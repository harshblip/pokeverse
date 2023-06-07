import React, { useEffect } from 'react'
import pokeballicon from '../assets/pokeball-icon.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

  const location = useLocation();

  const navigationRoutes = [
    {
      name: "Search",
      route: "/search",
    },
    {
      name: "Compare",
      route: "/compare",
    },
    {
      name: "Pokemon",
      route: "/pokemon",
    },
    {
      name: "My List",
      route: "/list",
    },
    {
      name: "About",
      route: "/about",
    },
  ];

  useEffect (() => {
    const index = navigationRoutes.findIndex(({route}) => location.pathname.includes(route) );
    ul(index);

  })

  function ul(index: number) {
    const underlines = document.querySelectorAll<HTMLElement>(".underline")
    for(let i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index *100+"%,0,0)";
    }
  } 

  return (
    <nav>
      <div className = "block">
        <img src = {pokeballicon} alt = "pokeball icon" />
      </div>
      <div className = "data">
        <ul>

            <div className = "underline"></div>
            <div className = "underline"></div>
            <div className = "underline"></div>

           {
             navigationRoutes.map(({name, route}, index ) => {
              return <Link to = {route} key={index}> </Link>
             })
           }
        </ul>
      </div>
      <div className = "block">
        <GiHamburgerMenu />
      </div>
    </nav>
  )
}
