import React from 'react'

import ICON_SUNNY from './img/icons/ic_wb_sunny_black_24px.svg'

export default class Origin extends React.Component {
    render() {
        return (
            <div id="origin">
                <div id="city-origin">
                    <div>{this.props.cityOrigin}</div> 
                </div>
                <div className="flag">
                    <img id="flag-origin" src={this.props.flagOrigin}/>
                </div>
                <div id="port-origin">{this.props.countryOrigin}</div>
                <div id="temperature-origin">
                    <img src={ICON_SUNNY} id="temp-origin" />
                    <div>{this.props.temperatureOrigin}</div>
                </div>
            </div>  
        );
    }
}