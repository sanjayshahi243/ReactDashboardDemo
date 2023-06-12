import React, { Component } from 'react';

import CardContent from '@mui/material/Card';
import Box from '@mui/material/Box';

import { Icon } from '@iconify/react';


class CardComponent extends Component {

  render() {
    const { title, totalCount, increment, days, icon } = this.props;
    return (
      <>
        <CardContent className='card' style={{ backgroundColor: 'rgb(236 236 236)', borderRadius: '1em'}}>
            <Box className="card-box">
                <div>
                  <h3 style={{color: 'gray'}}>{title}</h3>
                  <h2>{totalCount}</h2>
                  <div style={{ fontSize:'0.75em' }}>
                    <span className='card-span'>
                      {increment} % 
                    </span>
                    <span>Last {days} days</span>
                  </div>
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

// --------------------------------------------------------------