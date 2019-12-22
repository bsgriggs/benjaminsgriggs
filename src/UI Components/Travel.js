import React from 'react'
import {ImageSlides} from './ImageSlides'
import './Travel.css'

const Travel = () => {

    const TurkeySquare = [
        {img: "Alacati.jpg",caption: "Alaçatı"},
        {img: "Cesme.jpg",caption: "Çeşme"},
        {img: "GalataTower.jpg",caption: "Galata Tower"},
        {img: "GulhanePark.jpg",caption: "Gülhane Parkı"},
        {img: "IstiklalCaddesi.jpg",caption: "Istiklal Caddesi"},
        {img: "TopkapiPalace.jpg",caption: "Topkapı Palace"},
        {img: "YerebatanSarnici.jpg",caption: "Yerebatan Sarnıcı"},
    ]

    const TurkeyRect = [
        {img: "Bozcada.jpg",caption: "Bozcada"},
        {img: "Canakkale.jpg",caption: "Çanakkale"},        
        {img: "KapadokyaHouse.jpg",caption: "Kapadokya House"},
        {img: "KapadokyaRange.jpg",caption: "Kapadokya Range"},
        {img: "KazDaglariCliff.jpg",caption: "Kaz Dağları Cliff"},
        {img: "KazDaglariRiver.jpg",caption: "Kaz Dağları River"},
        {img: "KazDaglariStream.jpg",caption: "Kaz Dağları Stream"},
        {img: "NearKusadasi.jpg",caption: "Near Kuşadası"},
        {img: "Pamukkale.jpg",caption: "Pamukkale"},
        {img: "Theater.jpg",caption: "Theater"},
    ]

    const nycSquare = [
        {img: "bryantPark.jpg",caption: "Bryant Park"},
        {img: "vessel.jpg",caption: "Vessel"},
        {img: "centralPark.jpg",caption: "Central Park"},
        {img: "stonewall.jpg",caption: "Stonewall"},
    ]

    const nycRect = [
        {img: "columbia.jpg",caption: "Columbia University"},
        {img: "nightSky.jpg",caption: "NYC at Night"},
    ]

    const chicagoSquare = [
        {img: "jellyfish.jpg",caption: "Jellyfish / Shedd Aquarium"},
        {img: "fish.jpg",caption: "Habitat / Shedd Aquarium"},
    ]

    const chicagoRect = [
        {img: "shore.jpg",caption: "Lake Michigan Shore"},
        {img: "window.jpg",caption: "Shore / Shedd Aquarium"},
    ]

    return(
        <div className="Travel">
            <span className="Padding"></span>
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