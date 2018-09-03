import React, { Component } from 'react';
import moment from 'moment';
import './prayer-times.css';
import data from '../../_assets/data/elm-prayer-times-2018.json';
import NextJamahTime from '../next-jamah-time/next-jamah-time';

class PrayerTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prayerTimes: this.getPrayerTimes(),
      tomorrowsPrayerTimes: this.getTomorrowsPrayerTimes(),
      nextJamah: this.getNextJammah()
    };
  }

  getPrayerTimes() {
    var date = moment().format('DD/MM/YYYY');
    return data[date];
  }

  getTomorrowsPrayerTimes() {
    var date = moment()
      .add(1, 'days')
      .format('DD/MM/YYYY');
    return data[date];
  }

  getNextJammah() {
    var nextJamah = new NextJamahTime();
    return nextJamah.getNextJamahTime();
  }

  render() {
    return (
      <div className="PrayerTimesWrapper">
        <table className="PrayerTimes">
          <thead>
            <tr>
              <th />
              <th>Begins</th>
              <th>Jama'ah</th>
              <th>Tomorrow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Fajr</th>
              <td>{this.state.prayerTimes['Fajr Begins']}</td>
              <td
                className={
                  this.state.nextJamah.name === 'Fajr'
                    ? 'nextJamahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Fajr Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Fajr Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Zuhr</th>
              <td>{this.state.prayerTimes['Zuhr Begins']}</td>
              <td
                className={
                  this.state.nextJamah.name === 'Zuhr'
                    ? 'nextJamahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Zuhr Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Zuhr Jama‘ah']}</td>
            </tr>
            <tr>
              <th>'Asr</th>
              <td>{this.state.prayerTimes['Asr Mithl 2']}</td>
              <td
                className={
                  this.state.nextJamah.name === 'Asr'
                    ? 'nextJamahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Asr Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Asr Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Maghrib</th>
              <td>{this.state.prayerTimes['Maghrib Begins']}</td>
              <td
                className={
                  this.state.nextJamah.name === 'Maghrib'
                    ? 'nextJamahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Maghrib Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Maghrib Jama‘ah']}</td>
            </tr>
            <tr>
              <th>Isha</th>
              <td>{this.state.prayerTimes['Isha Begins']}</td>
              <td
                className={
                  this.state.nextJamah.name === 'Isha'
                    ? 'nextJamahHighlight'
                    : null
                }
              >
                {this.state.prayerTimes['Isha Jama‘ah']}
              </td>
              <td>{this.state.tomorrowsPrayerTimes['Isha Jama‘ah']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrayerTimes;
