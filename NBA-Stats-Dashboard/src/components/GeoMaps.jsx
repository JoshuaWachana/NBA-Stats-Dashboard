import USMap from './USMap';
import WorldMap from './WorldMap';
import { useState } from 'react';
import '../styles/GeoMaps.css';

function GeoMaps() {
  const [mapSelected, setMapSelected] = useState({ us: true, world: false });
  function mapSelection() {
    setMapSelected((prevMapSelection) => {
      return {
        ...prevMapSelection,
        us: !mapSelected.us,
        world: !mapSelected.world,
      };
    });
  }
  return (
    <div className='geoMapsSectionContainer'>
      <div className='mapSection mapSection1'>
        <h1>
          Geo-Demographics - Where are the NBA Players from? (Birthplaces)
        </h1>
      </div>
      <div className='mapSection mapSection2'>
        <p>
          This is data on where NBA players were born. This data is
          comprehensive of NBA players past and present up to the 2023 NBA
          season.{' '}
        </p>
        <p>
          Reference: The raw data was collected from{' '}
          <a href='https://www.basketball-reference.com/friv/birthplaces.fcgi'>
            basketball-reference
          </a>
        </p>
      </div>
      <div className='mapSection mapSection3'>
        <fieldset className='mapSelectionField'>
          <legend>MAP Selection</legend>
          <input
            id='us-map'
            type='radio'
            name='map'
            value='us'
            checked={mapSelected.us}
            onChange={mapSelection}
          />
          <label htmlFor='us-map'>US Map</label>
          <input
            id='world-map'
            type='radio'
            name='map'
            value='world'
            checked={mapSelected.world}
            onChange={mapSelection}
          />
          <label htmlFor='world-map'>World Map</label>
        </fieldset>
      </div>

      <div className='mapSection mapSection4'>
        {mapSelected.us === true ? <USMap /> : <WorldMap />}
      </div>
    </div>
  );
}

export default GeoMaps;
