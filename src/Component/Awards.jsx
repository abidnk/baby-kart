import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Award() {
  return (
    <MDBCarousel showControls touch={false}>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://files.themomsco.com/site-images/original/Brand-Promise-2240X614.jpg"
        alt="..."
      />
    </MDBCarousel>
  );
}
