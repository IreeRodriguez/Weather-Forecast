import React from 'react';
import PropTypes from 'prop-types';

// const Location = () => (
//   <div>
//     <h1>Santiago</h1>
//   </div>
// ) 

// y esto se transforma en lo siguiente............

// const Location = (props) => {
//   const city = props.city;
//   return (
//     <div>
//       <h1>{city}</h1>
//     </div>
//   )
// }

// y luego en...........

const Location = ({city}) => (
    <div className='locationCont'>
      <h1>{city}</h1>
    </div>
  );

Location.propTypes = {
  city: PropTypes.string.isRequired,
}  

// class Location extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     );
//   }
// }

export default Location;