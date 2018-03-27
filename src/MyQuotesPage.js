import React from 'react'
import ReactDOM from 'react-dom'
import { LegCard } from './LegCard.js'

import VISTAJET_LOGO from './img/icons/vistajet-logo.svg'
import ICON_HOME from './img/icons/ic_home_black_24px.svg'
import FLAG_ES from './img/flags/es_flag.svg'
import FLAG_BR from './img/flags/brasil.jpg'
import FLAG_EUA from './img/flags/eua.png'
import FLAG_DK from './img/flags/dk_flag.svg'
import FLAG_PAK from './img/flags/paquistao.jpg'
import FLAG_UK from './img/flags/uk.jpg'

export class MyQuotesPage extends React.Component {
    render() {
        return(
            <div className="page">
                <div className="top-logo">
                    <img src={VISTAJET_LOGO} />
                </div>
                <div className="page-title">
                    <img src={ICON_HOME} id="home-icon" />
                    <div id="page-title-text">My Quotes</div>
                </div>
                <div className="card-display">
                    <p id="display-title">My Quotes</p>
                    <p><LegCard 
                        day="Mar 27, 2018"
                        hour="3:00"
                        passengers="1"
                        cityOrigin="A CORUNA"
                        flagOrigin={FLAG_ES}
                        countryOrigin="SPA"
                        cityDest="AALBORG"
                        countryDest="DEN"
                        flagDest={FLAG_DK}/></p>
                    <p><LegCard 
                        day="Sep 15, 2016"
                        hour="10:50"
                        passengers="10"
                        cityOrigin="S PAULO"
                        flagOrigin={FLAG_BR}
                        countryOrigin="BRA"
                        cityDest="ISLBMAD"
                        countryDest="PAK"
                        flagDest={FLAG_PAK}/></p>
                    <p><LegCard 
                        day="Sep 28, 2016"
                        hour="3:15"
                        passengers="50"
                        cityOrigin="CLFRNA"
                        flagOrigin={FLAG_EUA}
                        countryOrigin="EUA"
                        cityDest="LNDN"
                        countryDest="UK"
                        flagDest={FLAG_UK}/></p>
                </div>
            </div>
        );
    }
}