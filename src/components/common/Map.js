import React, { useEffect, useState } from 'react';
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';
import dotenv from 'dotenv';
import './map.scss';
dotenv.config();

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 37.497536340141046,
    lng: 127.02763080131218,
};

const divStyle = {
    background: `white`,
    width: '60px',
    height: '30px',
    fontSize: '0.6rem',
};

const Map = ({ location }) => {
    const [visible, setVisible] = useState(false);
    const onMap = () => setVisible(!visible);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
    });
    return isLoaded && visible ? (
        <div className="map-container">
            <button className="close-map" onClick={onMap}>
                <img src="./images/map/close-btn.png" />
            </button>
            <GoogleMap
                id="circle-example"
                mapContainerStyle={containerStyle}
                zoom={15}
                center={location.length !== 0 ? location[0] : center}
                fullscreenControl={false}
            >
                {location &&
                    location.map((loc, idx) => (
                        <Marker position={loc} key={`marker${idx}`} />
                    ))}
            </GoogleMap>
        </div>
    ) : (
        <div className="map-arrow" onClick={onMap}>
            <img src="./images/map/arrow.png" />
        </div>
    );
};

export default Map;
