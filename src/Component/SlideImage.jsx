import React from "react";
import "./Cardsss.css";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function SlideImage() {
  return (
    <div className="thayott">
      <MDBCarousel showControls touch={false}>
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={1}
          src="https://cdn.fcglcdn.com/brainbees/banners/mama_earth_entire_ranfe_coco_range_march_mob_Cat-Banner_1280X400.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={2}
          src="https://cdn.fcglcdn.com/brainbees/banners/Momsco_aug_new_aug-new_withbaby_new_aug_mob.jpg_Cat-Banner_.jpg"
          alt="..."
        />
        <MDBCarouselItem
          className="w-100 d-block"
          itemId={3}
          src="https://cdn.fcglcdn.com/brainbees/banners/Himalaya_with_baby_aug_new_aug_new_mob_new_mob_Cat-Banner_1280X400.jpg"
          alt="..."
        />
      </MDBCarousel>
    </div>
  );
}
