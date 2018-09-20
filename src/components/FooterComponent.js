import React from 'react'
import Link from 'gatsby-link'

import twitter from '../img/icon-twitter.svg'
import logo from '../img/parlobslogwhite.svg'


export default class FooterComponent extends React.Component {

  render() {
    return (
      <footer 
      style={{
        height: '400px', 
        width: '100%', 
        background: '#232323',
        padding: '30px 6% 20px 6%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 33.33%)',
        gridTemplateRows: '76% 24%',
        zIndex: '1'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: '30px auto' }}>
          <Link to="#" style={{ fontWeight: "bold", fontSize: '1.4em' }}>Observer</Link>
          <Link to="#">AFD</Link>
          <Link to="#">FDP</Link>
          <Link to="#">CSU</Link>
          <Link to="#">CDU</Link>
          <Link to="#">Die Grünen</Link>
          <Link to="#">SPD</Link>
          <Link to="#">Die Linke</Link>
        </div>
        <Link to="/" style={{ width: '300px', height: '111px', padding: '0', margin: '30px auto' }}>
          <img src={logo} alt="logo" style={{ width: 'auto', height: 'auto' }} />
        </Link>
        <div>
          <form action="">
            <p style={{ fontSize: '2em' }}>
              Newsletter
            </p>
            <input style={{ padding: '7px', width: '270px', border: '1px solid #444', borderRight: '0' }} type="text"/>
            <button type="submit" style={{ height: '33px', background: 'orange', border: '1px solid #444', borderLeft: '0' }}>Abonnieren</button>
          </form>
          <a
            href="https://twitter.com/parlobserv"
            target="_blank"
            rel="noopener noreferrer"
            style={{  }}
          >
            <span className="icon">
              <img src={twitter} alt="Github" />
            </span>
          </a>
        </div>
        <div style={{ borderTop: '1px solid #555', gridColumn: '1/4', width: '90%', margin: '0 auto', paddingTop: '10px' }}>
          <div style={{ width: '531px', margin: '0 auto' }}>  
            <Link to="#">Politik & Gesellschaft</Link>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Link to="#">Über uns</Link> 
            <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Link to="#">Impressum</Link>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Link to="#">Datenschutz</Link>
          </div>
        </div>
      </footer>
    )
  }
}