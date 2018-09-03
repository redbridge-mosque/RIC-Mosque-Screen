import React, { Component } from 'react';
import './RicView.css';
import Logo from '../_components/logo/logo';
import Clock from '../_components/clock/clock';
import PrayerTimes from '../_components/prayer-times/prayer-times';
import Date from '../_components/date/date';
import BuildNumber from '../_components/build-number/build-number';
import SunriseAndZawwal from '../_components/sunrise-and-zawwal/sunrise-and-zawwal';
import JummahTimes from '../_components/jummah-times/jummah-times';
import AdditionalMessage from '../_components/additional-message/additional-message';

class RicView extends Component {
  render() {
    return (
      <div className="RicView">
        <div className="row">
          <Logo />
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="row">
              <Clock />
            </div>
            <div className="row">
              <Date />
            </div>
            <div className="row">
              <AdditionalMessage
                message="
                <i><p class='top'>Please keep all</p>
                <p class=''>mobile devices</p>
                <p class='bottom'>turned off or on silent</p></i>
              "
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              <PrayerTimes />
            </div>
            <div className="row">
              <SunriseAndZawwal />
            </div>
            <div className="row">
              <JummahTimes />
            </div>
          </div>
        </div>
        <BuildNumber />
      </div>
    );
  }
}

export default RicView;
