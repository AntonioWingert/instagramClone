import React, { Component } from 'react';
import { AiOutlineSearch, AiFillHome } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { BsPlusSquare } from 'react-icons/bs';
import { MdOutlineExplore } from 'react-icons/md';
import { FiHeart } from 'react-icons/fi';
import "./style.css";
import { IconContext } from 'react-icons';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
         <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo-instagram" />
         <div className="input-fake">
          <IconContext.Provider value={{ color: '#8e8e8e' }}>
            <AiOutlineSearch />
          </IconContext.Provider>
          <input placeholder='pesquisar' />
         </div>
         <div className="menu-icons">
          <IconContext.Provider value={{ size: '26px' }}>
            <AiFillHome />
            <RiMessengerLine />
            <BsPlusSquare />
            <MdOutlineExplore />
            <FiHeart />
          </IconContext.Provider>
          <img src="https://scontent.figu2-1.fna.fbcdn.net/v/t39.30808-6/281614199_736829414015709_960379493275792156_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=EdCQMm4igDIAX-wYTzQ&_nc_ht=scontent.figu2-1.fna&oh=00_AT8kx4sompAZif6VMF8OGp8oEv6CuaqlQQug6BQTtNRhXA&oe=635AA4D9" alt="imagem-usuario" className="img-user" />
         </div>
        </div>
      </header>
    )
  }
}
