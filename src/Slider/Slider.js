import React, { Component } from 'react';
import './Slider.css';
import RicView from '../RIC View/RicView';
import GoogleSlides from '../GoogleSlides/GoogleSlides';
import config from '../config.json';
import BlackoutPeriods from '../_components/blackout-periods/blackout-periods';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: this.getInitialSlide(),
      slides: this.getSlides(),
      currentPosition: 0,
      sliderMode: config.sliderMode || 'slider',
      slideTimeout: config.slideTimeout,
      googleSlides: {
        slide: <GoogleSlides />,
        totalCount:
          config.googleSlides && config.googleSlides.numberOfSlides
            ? config.googleSlides.numberOfSlides
            : 0
      }
    };
  }

  getInitialSlide() {
    return <RicView />;
  }

  getSlides() {
    return [<RicView />];
  }

  next() {
    var blackoutPeriods = new BlackoutPeriods();
    if (blackoutPeriods.checkIfBlackoutPeriod()) {
      this.setState(() => ({
        currentSlide: blackoutPeriods.state.blackOutSlide,
        currentPosition: 0
      }));
    } else {
      this.nextSlide();
    }
  }

  nextSlide() {
    var newSlidePosition = this.state.currentPosition + 1;
    var isLastSlide = newSlidePosition >= this.state.slides.length;

    if (isLastSlide) {
      this.setState(() => ({
        currentPosition: 0
      }));
      this.showGoogleSlides();
    } else {
      this.setState(() => ({
        currentSlide: this.state.slides[newSlidePosition],
        currentPosition: newSlidePosition
      }));
    }
  }

  showGoogleSlides() {
    this.setState(() => ({
      currentSlide: this.state.googleSlides.slide
    }));
    this.stopInterval();
    var slideCount = 0;
    var _gSlideInterval = setInterval(() => {
      slideCount++;
      if (slideCount >= this.state.googleSlides.totalCount - 1) {
        clearInterval(_gSlideInterval);
        this.startInterval();
      }
    }, this.state.slideTimeout);
  }

  startInterval() {
    this.interval = setInterval(() => this.next(), this.state.slideTimeout);
  }

  stopInterval() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    if (this.state.sliderMode === 'slider') {
      this.startInterval();
    }
  }

  componentWillUnmount() {
    this.stopInterval();
  }

  render() {
    return this.state.currentSlide;
  }
}

export default Slider;
