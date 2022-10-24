import React, { Component } from 'react';
import "./style.css";
import { FiMoreHorizontal } from 'react-icons/fi'
import { FiSend } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat } from 'react-icons/bs'
import { BsBookmark } from 'react-icons/bs' 
import { IconContext } from 'react-icons';

export default class index extends Component {
  render() {
    return (
      <article>
        <header>
          <div className="infos-post">
            <img src="https://github.com/AntonioWingert.png" alt="post" />
            <p>Antonio Bruno Wingert</p>
          </div>
          <FiMoreHorizontal />
        </header>
        <main className="img-post">
          <img src="https://scontent.figu2-1.fna.fbcdn.net/v/t39.30808-6/293069546_776109880087662_4390003879748048600_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JVaXRiXGSHAAX8uG6su&_nc_ht=scontent.figu2-1.fna&oh=00_AT8hLiSnACTfUPvUdRNh_D11AZotHIOXXHC9SCxjhGoOaQ&oe=635ADF14" alt="post" />
        </main>
        <footer className="footer-post">
          <IconContext.Provider value={{size: "25px"}}>
            <section className="engagement-post">
              <div className="icons-one">
                <div className="icon"><IoMdHeartEmpty /></div>
                <div className="icon"><BsChat /></div>
                <div className="icon"><FiSend /></div>
              </div>
              <div className="icon"><BsBookmark /></div>
            </section>
          </IconContext.Provider>

          <section className="like">
            <span>80 curtidas</span>
          </section>
        </footer>
      </article>
    )
  }
}
