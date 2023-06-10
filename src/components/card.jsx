import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import Box from '@mui/material/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';


class CardComponent extends Component {

  render() {
    const { title, totalCount, increment, days, icon } = this.props;
    return (
      <>
        <CardContent className='card' style={{ backgroundColor: '#e3e3e3', borderRadius: '1em'}}>
            <Box className="card-box">
                <div>
                  <h3 style={{color: 'gray'}}>{title}</h3>
                  <h2>{totalCount}</h2>
                  <span style={{ backgroundColor: 'green', padding: '5px', color: 'white' }}>
                    {increment}% 
                  </span>
                  <span>Last {days} days</span>
                </div>
                <div>
                  <Icon icon={icon} />
                </div>
            </Box>
        </CardContent>
      </>
    );
  }
}

export default CardComponent;

// WOrking COde
// class Card extends Component {

//   render() {
//     const { title, totalCount, increment, days } = this.props;

//     return <div className="card">
//       <div className="column">
//         <h3 style={{color: 'gray'}}>{title}</h3>
//         <h2>{totalCount}</h2>
//         <span style={{ backgroundColor: 'green', padding: '5px', color: 'white' }}>
//           {increment}% 
//         </span>
//           <span>Last {days} days</span>
//       </div>
//       <div className="column">
        
//       </div>
//     </div>
//   }
// }

// export default Card;

// --------------------------------------------------------------