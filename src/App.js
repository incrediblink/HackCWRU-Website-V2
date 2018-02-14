import React, { Component } from 'react';

import Hackry from 'hackry';

import Intro_Section from './Components/intro_section';
import About from './Components/About';
import Tracks from './Components/tracks';
import FAQs from './Components/FAQs';
import CarouselComponent from './Components/carouselcomponent';
import Sponsors from './Components/sponsors';
import Schedule from './Components/Schedule';

import ScrollableAnchor from 'react-scrollable-anchor';
import {goToAnchor} from 'react-scrollable-anchor';
import { Button, Row, Col, Panel, Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

import './Assets/menuBar.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.hackry = new Hackry('NQZBtoIMDJ');

    this.state = {
        faqs: [],
        events: []
    };

    this.goToAbout = this.goToAbout.bind(this);
    this.goToTrack = this.goToTrack.bind(this);
    this.goToFAQ = this.goToFAQ.bind(this);
    this.goToSponsor = this.goToSponsor.bind(this);
  }

  goToAbout() {
    goToAnchor('about');
  }

  goToTrack() {
    goToAnchor('track');
  }

  goToFAQ() {
    goToAnchor('faq');
  }

  goToSchedule() {
    goToAnchor('schedule')
  }

  goToSponsor() {
    goToAnchor('sponsors');
  }

  componentWillMount() {
    this.hackry.faqs((faqs) => {
      this.setState({
        faqs: faqs
      });
    });

    this.hackry.events({
      timeZone: 'America/New_York',
      startDateFormat: 'DD h:mm a',
      endDateFormat: 'DD h:mm a'
    }, (events) => {
      this.setState({
        events: events
      });
    });
  }


  render() {
    const mlh = {
      display:'block',
      maxWidth:'100px',
      minWidth:'60px',
      position:'absolute',
      right:'50px',
      top:'0',
      width:'10%',
      zIndex:'10000'
    };
    const mlhLogo = {
      width:'100%',
    }

    const imgLink = "https://s3.amazonaws.com/logged-assets/trust-badge/2018/gray.svg";
    const link = "https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=gray";

    return (
      <div className="Appp">
        <Navbar className="menuBar" collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home"><span className="menuBarText">hackCWRU</span></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}>
                <a className="menuBarText" href="#about" onClick={this.goToAbout}>ABOUT</a>
              </NavItem>
              {this.state.events.length > 0 &&
                <NavItem eventKey={4}>
                  <a className="menuBarText" href="#schedule" onClick={this.goToSchedule}>SCHEDULE</a>
                </NavItem>}
              <NavItem eventKey={2}>
                <a className="menuBarText" href="#track" onClick={this.goToTrack}>TRACKS</a>
              </NavItem>
              <NavItem eventKey={3}>
                <a className="menuBarText" href="#faq" onClick={this.goToFAQ}>FAQS</a>
              </NavItem>
              <NavItem eventKey={5}>
                <a className="menuBarText" href="#sponsors" onClick={this.goToSponsor}>SPONSORS</a>
              </NavItem>
            </Nav>
            <Nav className="dissapear" pullRight>
                    <a Id="mlh-trust-badge" style={mlh} href={link} target="_blank"><img src={imgLink} alt="Major League Hacking 2017 Hackathon Season" style={mlhLogo} /></a>
  			   </Nav>
        </Navbar.Collapse>
        </Navbar>


        <Intro_Section />

        <ScrollableAnchor id={'about'}>
          <div><About /></div>
        </ScrollableAnchor>

        {this.state.events.length > 0 &&
          <ScrollableAnchor id={'schedule'}>
            <div><Schedule events={this.state.events} /></div>
          </ScrollableAnchor>}

        <ScrollableAnchor id={'track'}>
          <div><Tracks /></div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'faq'}>
          <div><FAQs faqs={this.state.faqs}/></div>
        </ScrollableAnchor>

        <CarouselComponent />

        <ScrollableAnchor id={'sponsors'}>
          <div><Sponsors /></div>
        </ScrollableAnchor>


      </div>
    );
  }
}

export default App;
