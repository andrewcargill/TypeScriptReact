import React from 'react';
import { useAppContext } from '../../../AppState';

function DisplayRiders() {
  const { storedNames, nextRider } = useAppContext();

  const unfinishedRiders = storedNames.filter((rider) => !rider.finished);

  return (
    <div className='start-list-container'>
      <div>Riders List</div>
      <table className='start-list-table'>
        <tbody className='start-list-tbody'>
          {storedNames.map((rider, index) => (
            <div

              key={index}
              style={{
                fontWeight: index === nextRider ? 'bold' : 'normal',
                color: rider.finished ? 'pink' : 'inherit',
              }}
            >
              <tr key={index}>
                <td>{index + 1}:</td>
                <td>{rider.name}</td>
              </tr>
            </div>
          ))}
        </tbody>
      </table>


    </div>
  );
}
export default DisplayRiders;
