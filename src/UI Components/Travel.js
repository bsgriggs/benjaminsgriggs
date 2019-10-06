import React from 'react'
import {ImageSlides} from './ImageSlides'
import Alaçatı from '../imgs/Travel/Turk/Alaçatı.jpg'
import Bozcada from '../imgs/Travel/Turk/Bozcada.jpg'
import Çanakkale from '../imgs/Travel/Turk/Çanakkale.jpg'
import Çeşme from '../imgs/Travel/Turk/Çeşme.jpg'
import GalataTower from '../imgs/Travel/Turk/GalataTower.jpg'
import GülhanePark from '../imgs/Travel/Turk/GülhanePark.jpg'
import IstiklalCaddesi from '../imgs/Travel/Turk/IstiklalCaddesi.jpg'
import KapadokyaHouse from '../imgs/Travel/Turk/KapadokyaHouse.jpg'
import KapadokyaRange from '../imgs/Travel/Turk/KapadokyaRange.jpg'
import KazDağlarıCliff from '../imgs/Travel/Turk/KazDağlarıCliff.jpg'
import KazDağlarıRiver from '../imgs/Travel/Turk/KazDağlarıRiver.jpg'
import KazDağlarıStream from '../imgs/Travel/Turk/KazDağlarıStream.jpg'
import NearKuşadası from '../imgs/Travel/Turk/NearKuşadası.jpg'
import Pamukkale from '../imgs/Travel/Turk/Pamukkale.jpg'
import Theater from '../imgs/Travel/Turk/Theater.jpg'
import TopkapıPalace from '../imgs/Travel/Turk/TopkapıPalace.jpg'
import YerebatanSarnıcı from '../imgs/Travel/Turk/YerebatanSarnıcı.jpg'

import './Travel.css'

const Travel = () => {

    const Turkey1 = [
        {img: Alaçatı,caption: "Alaçatı"},
        {img: Çeşme,caption: "Çeşme"},
        {img: GalataTower,caption: "Galata Tower"},
        {img: GülhanePark,caption: "Gülhane Parkı"},
        {img: IstiklalCaddesi,caption: "Istiklal Caddesi"},
        {img: TopkapıPalace,caption: "Topkapı Palace"},
        {img: YerebatanSarnıcı,caption: "Yerebatan Sarnıcı"},
    ]

    const Turkey2 = [
        {img: Bozcada,caption: "Bozcada"},
        {img: Çanakkale,caption: "Çanakkale"},        
        {img: KapadokyaHouse,caption: "Kapadokya House"},
        {img: KapadokyaRange,caption: "Kapadokya Range"},
        {img: KazDağlarıCliff,caption: "Kaz Dağları Cliff"},
        {img: KazDağlarıRiver,caption: "Kaz Dağları River"},
        {img: KazDağlarıStream,caption: "Kaz Dağları Stream"},
        {img: NearKuşadası,caption: "Near Kuşadası"},
        {img: Pamukkale,caption: "Pamukkale"},
        {img: Theater,caption: "Theater"},
    ]

    return(
        <div className="Travel">
            <h3>Turkey 2019</h3>
            <hr></hr>
            <div className="TravelRow">
                <div className="Travel1x1"> 
                    <ImageSlides contentArray={Turkey1}/> 
                </div>
                <div className="Travel4x3">
                    <ImageSlides contentArray={Turkey2}/>
                </div>
            </div>
        </div>
    );
}

export default Travel