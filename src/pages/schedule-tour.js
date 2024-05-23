import { fromNode } from 'bluebird';
import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';


const ScheduleTour = ({location:{pathname}}) =>{

    return(
        <Layout>
          <Hero title='Schedule A Tour' page={pathname.split('/')[1]}/>
            <div className='schedule-container'>
            <form
            id="schedule-a-tour" 
              className='form-input-container blue-form'
              action="https://formspree.io/f/mqknajkr"
              method="post"
            >
                <h2 >Fill out your information below to reserve your plant tour today!</h2>
        <input
          type="text"
          name="FirstName"
          id="FirstName"
          placeholder="First Name"
          aria-label="text"
          className="half"
          required
        />
        <input
          type="text"
          name="LastName"
          id="LastName"
          placeholder="Last Name"
          aria-label="text"
          className="half"
          required
        />
        <input
          type="email"
          name="Email"
          id="email"
          placeholder="Email"
          aria-label="email"
          className="half"
          required
        />

        <input
          type="text"
          name="Company"
          id="Company"
          placeholder="Company"
          aria-label="text"
          className="half"
        />
        <input
          type="text"
          name="Phone"
          id="phone"
          placeholder="(___)"
          aria-label="text"
          className="half"
          required
        />
        <input
          type="text"
          name="role"
          id="role"
          placeholder="Role"
          aria-label="text"
          className="half"
        />
        <input
            type="text"
            name="BusinessHeadquarters"
            id="bh"
            placeholder="Where is Your Business Headquartered"
            aria-label="text"
            className="one"
          />
        <input
            type="text"
            name="AnnualRevenue"
            id="revenue"
            placeholder="Annual Revenue"
            aria-label="text"
            className="one"
          />
          <input
            type="text"
            name="CurrentlyOutsourcing"
            id="out"
            placeholder="Are You Currently Outsourcing Your Metal Fabrication?"
            aria-label="text"
            className="one"
          />
        <input
          type="text"
          name="Industry"
          id="industry"
          placeholder="Industry"
          aria-label="text"
          className="one"
        />
         <input
            type="text"
            name="timeframe"
            id="timeframe"
            placeholder="What is your timeframe for your project?"
            aria-label="text"
            className="one"
          />
        {/* <input
          type="scroll"
          name="Interest"
          id="interest"
          placeholder="What's Your Interest In"
          aria-label="text"
          className="one"
        /> */}
        <div className="checkbox-container">
            <h3 >What services are you most interested in?</h3>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Turn Key Manufacturing</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Cutting: Plasma/Laser</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Tube Cutting/Forming</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Welding & Robotic Welding</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Machining</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Forming</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Assembly</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Coatings</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Stamping</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Punching</span>
            </div>
            <div className='check-row'>
                <input type="checkbox" name="subscribe" value="yes" />
                <span>Design Support</span>
            </div>
        </div>
        <textarea
          type="textbox"
          name="Comments"
          id="comments"
          placeholder="What parts do you need manufactured?"
          aria-label="text"
          className="one"
        />

        
          <div className="checkbox-container">
            <input type="checkbox" name="subscribe" value="yes" />

            <span>Subscribe to Anchor Fabrication Blog</span>
          </div>


        <button className="cta-button"   form="schedule-a-tour"  value="Submit">
          Request Your Plant Tour
        </button>
        </form>
            </div>
        
        </Layout>
    )
}

export default ScheduleTour;