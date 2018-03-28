import React from 'react'

export default class ArrivalDepartureTime extends React.Component {
    render() {
        return (
            <div className="etd-eta">
                <div id="etd">ETD: 09:20 loc</div>
                <div id="eta">ETA: 12:20 loc</div>
            </div>
        );
    }
}