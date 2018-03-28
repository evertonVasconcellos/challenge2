import React from 'react'

import ICON_SUNNY from './img/icons/ic_wb_sunny_black_24px.svg'

export default class Destination extends React.Component {
    render() {
        return (
            <div id="destination">
                <div id="city-dest">
                    <div>{this.props.cityDest}</div> 
                </div>
                <div id="port-dest">{this.props.countryDest}</div>
                <div className="flag">
                    <img id="flag-dest" src={this.props.flagDest} />
                </div>
                <div id="temperature-dest">
                    <img src={ICON_SUNNY} id="temp-dest" />
                    <div>{this.props.temperatureDest}</div>
                </div>
            </div>
        );
    }
}