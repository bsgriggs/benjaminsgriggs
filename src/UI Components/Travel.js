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
        {img: Alaçatı,caption: "Alaçatı",description:""},
        {img: Bozcada,caption: "Bozcada",description:""},
        {img: Çanakkale,caption: "Çanakkale",description:""},
        {img: Çeşme,caption: "Çeşme",description:""},
        {img: GalataTower,caption: "GalataTower",description:""},
        {img: Gelibolu,caption: "Gelibolu",description:""},
        {img: GülhanePark,caption: "GülhanePark",description:""},
        {img: IstiklalCaddesi,caption: "IstiklalCaddesi",description:""},
        {img: KapadokyaHouse,caption: "KapadokyaHouse",description:""},
        {img: KapadokyaRange,caption: "KapadokyaRange",description:""},
        {img: KazDağlarıCliff,caption: "KazDağlarıCliff",description:""},
        {img: KazDağlarıRiver,caption: "KazDağlarıRiver",description:""},
        {img: KazDağlarıStream,caption: "KazDağlarıStream",description:""},
        {img: NearKuşadası,caption: "NearKuşadası",description:""},
        {img: Pamukkale,caption: "Pamukkale",description:""},
        {img: Theater,caption: "Theater",description:""},
        {img: TopkapıPalace,caption: "TopkapıPalace",description:""},
        {img: TuzGölü,caption: "TuzGölü",description:""},
        {img: YerebatanSarnıcı,caption: "YerebatanSarnıcı",description:""},
    ]

    return(
        <div>
            <h3>Turkey 2019</h3>
            <ImageSlides contentArray={Turkey}/>
        </div>
    );
}

export default Travel