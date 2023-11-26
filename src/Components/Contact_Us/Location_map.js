import React, { useEffect, useState, useRef } from 'react'
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';



const Location_map = () => {

    const mapContainerRef = useRef(null);
    const lahoreCoordinates = [74.3587, 31.5204];

    useEffect(() => {
        // Initialize the map when the component mounts
        const map = new Map({
            target: mapContainerRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat(lahoreCoordinates),
                zoom: 11,
            }),
        });

        // Clean up the map when the component unmounts
        return () => {
            map.setTarget(null);
        };
    }, []); // Empty dependency array ensures that this effect runs only once


    return (
        <div className='col-md-12'>
            <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }}>
                {/* The map will be rendered inside this div */}
            </div>
        </div>
    )
}

export default Location_map
