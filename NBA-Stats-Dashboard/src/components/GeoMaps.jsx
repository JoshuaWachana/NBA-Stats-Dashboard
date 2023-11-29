import USMap from './USMap';
import WorldMap from './WorldMap';
import { useState } from 'react';

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
    <div>
      <h1>Geo-Demographics - Birthplaces</h1>
      <h1>Where are the NBA Players from?</h1>

      <fieldset>
        <legend>MAP Selection</legend>
        <label>
          US Map
          <input
            id='us-map'
            type='radio'
            name='map'
            value='us'
            checked={mapSelected.us}
            onChange={mapSelection}
          />
        </label>
        <label>
          {' '}
          World Map
          <input
            id='world-map'
            type='radio'
            name='map'
            value='world'
            checked={mapSelected.world}
            onChange={mapSelection}
          />
        </label>
      </fieldset>

      {mapSelected.us === true ? <USMap /> : <WorldMap />}

      <p>
        This is data on where NBA players were born. This data is comprehensive
        of NBA players past and present.{' '}
      </p>
      <p>
        Reference:{' '}
        <a href='https://www.basketball-reference.com/friv/birthplaces.fcgi'>
          basketball-reference
        </a>
      </p>
    </div>
  );
}

export default GeoMaps;
