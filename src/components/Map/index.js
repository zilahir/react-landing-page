/* eslint-disable no-console */

import React from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import CityPin from './CityPin'
import styles from './Map.module.scss'
import { allRestaurants } from './restaurants'

/**
* @author zilahir
* @function Map
* */

const Maps = () => {
	function handleViewportChange(v) {
		console.debug('v', v)
	}

	function renderCityMarker(restaurant, index) {
		console.debug('city', restaurant)
		return (
			<Marker key={`marker-${index}`} longitude={restaurant.longitude} latitude={restaurant.latitude}>
				<CityPin size={20} onClick={() => console.debug('city city')} />
			</Marker>
		)
	}
	console.debug('allRest', allRestaurants.partners)
	return (
		<div className={styles.mapWrapper}>
			<ReactMapGL
				width="100%"
				height={400}
				latitude={61.49911}
				longitude={23.78712}
				zoom={12}
				onViewportChange={v => handleViewportChange({ v })}
			>
				{
					allRestaurants.partners.map(((rest, i) => (
						renderCityMarker(rest, i)
					)))
				}

			</ReactMapGL>
		</div>
	)
}

export default Maps
