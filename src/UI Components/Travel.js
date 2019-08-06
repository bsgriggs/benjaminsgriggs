import React from 'react'
import {ImageSlides} from './ImageSlides'
import Alaçatı from '../imgs/Turk/Alaçatı.png'
import Bozcada from '../imgs/Turk/Bozcada.png'
import Çanakkale from '../imgs/Turk/Çanakkale.png'
import Çeşme from '../imgs/Turk/Çeşme.png'
import GalataTower from '../imgs/Turk/GalataTower.png'
import Gelibolu from '../imgs/Turk/Gelibolu.png'
import GülhanePark from '../imgs/Turk/GülhanePark.png'
import IstiklalCaddesi from '../imgs/Turk/IstiklalCaddesi.png'
import KapadokyaHouse from '../imgs/Turk/KapadokyaHouse.png'
import KapadokyaRange from '../imgs/Turk/KapadokyaRange.png'
import KazDağlarıCliff from '../imgs/Turk/KazDağlarıCliff.png'
import KazDağlarıRiver from '../imgs/Turk/KazDağlarıRiver.png'
import KazDağlarıStream from '../imgs/Turk/KazDağlarıStream.png'
import NearKuşadası from '../imgs/Turk/NearKuşadası.png'
import Pamukkale from '../imgs/Turk/Pamukkale.png'
import Theater from '../imgs/Turk/Theater.png'
import TopkapıPalace from '../imgs/Turk/TopkapıPalace.png'
import TuzGölü from '../imgs/Turk/TuzGölü.png'
import YerebatanSarnıcı from '../imgs/Turk/YerebatanSarnıcı.png'

import './Travel.css'

const Travel = () => {

    const Turkey = [
        {img: Alaçatı,caption: "Alaçatı",description:"Coming Soon"},
        {img: Bozcada,caption: "Bozcada",description:"Coming Soon"},
        {img: Çanakkale,caption: "Çanakkale",description:"Coming Soon"},
        {img: Çeşme,caption: "Çeşme",description:"Coming Soon"},
        {img: GalataTower,caption: "GalataTower",description:"Coming Soon"},
        {img: Gelibolu,caption: "Gelibolu",description:"Coming Soon"},
        {img: GülhanePark,caption: "GülhanePark",description:"Coming Soon"},
        {img: IstiklalCaddesi,caption: "IstiklalCaddesi",description:"Coming Soon"},
        {img: KapadokyaHouse,caption: "KapadokyaHouse",description:"Coming Soon"},
        {img: KapadokyaRange,caption: "KapadokyaRange",description:"Coming Soon"},
        {img: KazDağlarıCliff,caption: "KazDağlarıCliff",description:"Coming Soon"},
        {img: KazDağlarıRiver,caption: "KazDağlarıRiver",description:"Coming Soon"},
        {img: KazDağlarıStream,caption: "KazDağlarıStream",description:"Coming Soon"},
        {img: NearKuşadası,caption: "NearKuşadası",description:"Coming Soon"},
        {img: Pamukkale,caption: "Pamukkale",description:"Coming Soon"},
        {img: Theater,caption: "Theater",description:"Coming Soon"},
        {img: TopkapıPalace,caption: "TopkapıPalace",description:"Coming Soon"},
        {img: TuzGölü,caption: "TuzGölü",description:"Coming Soon"},
        {img: YerebatanSarnıcı,caption: "YerebatanSarnıcı",description:"Coming Soon"},
    ]

    return(
        <div className="Travel">
            <h3>Turkey 2019</h3>
            <ImageSlides contentArray={Turkey}/>
        </div>
    );
}

export default Travel