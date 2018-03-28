import React from 'react'
import CardHeaderInfo from './CardHeaderInfo'
import Origin from './Origin'
import Destination from './Destination'
import ArrivalDepartureTime from './ArrivalDepartureTime'

import ICON_AIRCRAFT from './img/icons/GLEX-cutout.png'
import ICON_MOUNTAIN_BACKGROUND from './img/icons/mountain-background-gradient.png'
import ICON_PLANE_HOVER from './img/icons/stepOne_plane_hover.svg'
import ICON_VJ_LOGO from './img/icons/vistaLogo.png'

export default class LegCard extends React.Component {
    render() {
        return (
            <div className="card-wrapper">
                <div className="plane-picture">
                    <img src={ICON_MOUNTAIN_BACKGROUND} id="mtn-background"/>
                    <img src={ICON_AIRCRAFT} id="aircraft"/>
                </div>
                <div className="flight-data">
                    <CardHeaderInfo
                        day={this.props.day}
                        hour={this.props.hour}
                        passengers={this.props.passengers} 
                    />
                    <div className="origin-dest">
                        <Origin
                            cityOrigin={this.props.cityOrigin}
                            flagOrigin={this.props.flagOrigin}
                            countryOrigin={this.props.countryOrigin}
                            temperatureOrigin={this.props.temperatureOrigin}
                        />
                        <div id="plane-icon">
                            <img src={ICON_PLANE_HOVER} />
                        </div>
                        <Destination
                            cityDest={this.props.cityDest}
                            flagDest={this.props.flagDest}
                            countryDest={this.props.countryDest}
                            temperatureDest={this.props.temperatureDest}
                        />
                    </div>
                    <ArrivalDepartureTime />
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