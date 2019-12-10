import React from 'react'
import {ImageSlides} from './ImageSlides'
import Alaçatı from '../imgs/Travel/Turk/Alacati.jpg'
import Bozcada from '../imgs/Travel/Turk/Bozcada.jpg'
import Çanakkale from '../imgs/Travel/Turk/Canakkale.jpg'
import Çeşme from '../imgs/Travel/Turk/Cesme.jpg'
import GalataTower from '../imgs/Travel/Turk/GalataTower.jpg'
import GülhanePark from '../imgs/Travel/Turk/GulhanePark.jpg'
import IstiklalCaddesi from '../imgs/Travel/Turk/IstiklalCaddesi.jpg'
import KapadokyaHouse from '../imgs/Travel/Turk/KapadokyaHouse.jpg'
import KapadokyaRange from '../imgs/Travel/Turk/KapadokyaRange.jpg'
import KazDağlarıCliff from '../imgs/Travel/Turk/KazDaglariCliff.jpg'
import KazDağlarıRiver from '../imgs/Travel/Turk/KazDaglariRiver.jpg'
import KazDağlarıStream from '../imgs/Travel/Turk/KazDaglariStream.jpg'
import NearKuşadası from '../imgs/Travel/Turk/NearKusadasi.jpg'
import Pamukkale from '../imgs/Travel/Turk/Pamukkale.jpg'
import Theater from '../imgs/Travel/Turk/Theater.jpg'
import TopkapıPalace from '../imgs/Travel/Turk/TopkapiPalace.jpg'
import YerebatanSarnıcı from '../imgs/Travel/Turk/YerebatanSarnici.jpg'

import columbia from '../imgs/Travel/NYC/columbia.jpg'
import nightSky from '../imgs/Travel/NYC/nightSky.jpg'
import centralPark from '../imgs/Travel/NYC/centralPark.jpg'
import stonewall from '../imgs/Travel/NYC/stonewall.jpg'
import bryantPark from '../imgs/Travel/NYC/bryantPark.jpg'
import vessel from '../imgs/Travel/NYC/vessel.jpg'

import shore from '../imgs/Travel/Chicago/shore.jpg'
import window from '../imgs/Travel/Chicago/window.jpg'
import fish from '../imgs/Travel/Chicago/fish.jpg'
import jellyfish from '../imgs/Travel/Chicago/jellyfish.jpg'

import './Travel.css'

const Travel = () => {

    const TurkeySquare = [
        {img: Alaçatı,caption: "Alaçatı"},
        {img: Çeşme,caption: "Çeşme"},
        {img: GalataTower,caption: "Galata Tower"},
        {img: GülhanePark,caption: "Gülhane Parkı"},
        {img: IstiklalCaddesi,caption: "Istiklal Caddesi"},
        {img: TopkapıPalace,caption: "Topkapı Palace"},
        {img: YerebatanSarnıcı,caption: "Yerebatan Sarnıcı"},
    ]

    const TurkeyRect = [
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

    const nycSquare = [
        {img: bryantPark,caption: "Bryant Park"},
        {img: vessel,caption: "Vessel"},
        {img: centralPark,caption: "Central Park"},
        {img: stonewall,caption: "Stonewall"},
    ]

    const nycRect = [
        {img: columbia,caption: "Columbia University"},
        {img: nightSky,caption: "NYC at Night"},
    ]

    const chicagoSquare = [
        {img: jellyfish,caption: "Jellyfish / Shedd Aquarium"},
        {img: fish,caption: "Habitat / Shedd Aquarium"},
    ]

    const chicagoRect = [
        {img: shore,caption: "Lake Michigan Shore"},
        {img: window,caption: "Shore / Shedd Aquarium"},
    ]

    return(
        <div className="Travel">
            <h3>Turkey 2019</h3>
            <hr></hr>
            <div className="TravelRow">
                <div className="Travel1x1"> 
                    <ImageSlides contentArray={TurkeySquare}/> 
                </div>
                <div className="Travel4x3">
                    <ImageSlides contentArray={TurkeyRect}/>
                </div>
            </div>
            <h3>New York City 2019</h3>
            <hr></hr>
            <div className="TravelRow">
                <div className="Travel4x3">
                    <ImageSlides contentArray={nycRect}/>
                </div>
                <div className="Travel1x1"> 
                    <ImageSlides contentArray={nycSquare}/> 
                </div>

            </div>
            <h3>Chicago 2018</h3>
            <hr></hr>
            <div className="TravelRow">
                <div className="Travel1x1"> 
                    <ImageSlides contentArray={chicagoSquare}/> 
                </div>
                <div className="Travel4x3">
                    <ImageSlides contentArray={chicagoRect}/>
                </div>
            </div>
        </div>
    );
}

export default Travel