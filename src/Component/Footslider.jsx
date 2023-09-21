import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Footslider() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/catalog/brandstore/mothercare/MCBeddingRangeBanner920x650.jpg'
        alt='...'
      >
        
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/333_202206061058_MC_Banner_1920x650_BathTimeEssentials@2x.png'
        alt='...'
      >
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://cdn.pixelbin.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/333_202206030532_MC_Banner_1920x650_Feeding_Essentials.png'
        alt='...'
      >
    
      </MDBCarouselItem>
    </MDBCarousel>
  );
}