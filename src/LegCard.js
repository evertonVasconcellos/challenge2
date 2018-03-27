import React from 'react'

import ICON_AIRCRAFT from './img/icons/GLEX-cutout.png'
import ICON_MOUNTAIN_BACKGROUND from './img/icons/mountain-background-gradient.png'
import ICON_PLANE_HOVER from './img/icons/stepOne_plane_hover.svg'
import ICON_VJ_LOGO from './img/icons/vistaLogo.png'
import ICON_CALENDAR from './img/icons/ic_date_range_black_24px.svg'
import ICON_CLOCK from './img/icons/ic_query_builder_black_24px.svg'
import ICON_PEOPLE from './img/icons/ic_people_black_24px.svg'
import ICON_SUNNY from './img/icons/ic_wb_sunny_black_24px.svg'

export class LegCard extends React.Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className="plane-picture">
                    <img src={ICON_MOUNTAIN_BACKGROUND} id="mtn-background"/>
                    <img src={ICON_AIRCRAFT} id="aircraft"/>
                </div>
                <div className="flight-data">
                    <div className="date-time">
                        <div className="date">
                        <img src={ICON_CALENDAR} />{this.props.day}
                        </div>
                        <div className="time">
                           <img src={ICON_CLOCK} />{this.props.hour}
                        </div>
                        <div className="passengers">
                            <img src={ICON_PEOPLE} />Passengers: {this.props.passengers}
                        </div>
                    </div>
                    <div className="origin-dest">
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
                                <div>20.6 C</div>
                            </div>
                        </div>
                        <div id="plane-icon">
                            <img src={ICON_PLANE_HOVER} />
                        </div>
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
                                <div>19.5 C</div>
                            </div>
                        </div>
                    </div>
                    <div className="etd-eta">
                        <div id="etd">ETD: 09:20 loc</div>
                        <div id="eta">ETA: 12:20 loc</div>
                    </div>
                </div>
                <div className="flight-cost">
                    <div className="top-vj-icon">
                        <img src={ICON_VJ_LOGO} id="vj-logo" />
                    </div>
                    <div className="cost">
                        <div>BRL 200,000</div>
                    </div>
                </div>
            </div>
        );
    }
}