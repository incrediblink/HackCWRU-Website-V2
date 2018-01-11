import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import '../Assets/whatHackCWRU.css';

class WhathackCWRU extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    	return (
      	<div className="App">
					<section className="whatHackCWRU">
						<Row>
							<Col md="2"><img className="thing" src={require('../Assets/thing.png')}></img></Col>
							<Col md="8"><h2 className="whatHeader">What IS HackCWRU 5?</h2></Col>
							<Col md="2"></Col>
						</Row>
						<Row>
							<Col md="2"></Col>
							<Col md="8">
								<p className="whatText">
									hackCWRU brings together the brightest and most creative students to promote unrestricted technological innovation.

								 <br></br><br></br>Hosted at Case Western Reserve University, over 350 students will spend 36 hours bringing their imagination into the real world. Attendees will work with peers and mentors to create projects in one of four project tracks.
									<br></br><br></br>Don't be intimidated, however. You don't have to know what you're doing to attend. If you are new to hackathons, we look forward to introducing you to a world of creation. Lastly, at hackCWRU we abide by and enforce MLH's Code of Conduct.
								</p>
							</Col>
							<Col md="2"></Col>
						</Row>
					</section>
      	</div>
    	);
  	}

}

export default WhathackCWRU;
