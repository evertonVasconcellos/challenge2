import React from 'react'

import ICON_CALENDAR from './img/icons/ic_date_range_black_24px.svg'
import ICON_CLOCK from './img/icons/ic_query_builder_black_24px.svg'
import ICON_PEOPLE from './img/icons/ic_people_black_24px.svg'

export default class CardHeaderInfo extends React.Component {
    render() {
        return (
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
        );
    }
}