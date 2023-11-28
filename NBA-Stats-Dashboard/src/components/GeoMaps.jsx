import USMap from './USMap';
import WorldMap from './WorldMap';

function GeoMaps() {
  return (
    <div>
      <h1>Geo-Demographics - Birthplaces</h1>
      <h1>Where are the NBA Players from?</h1>

      <USMap />
      <WorldMap />
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
