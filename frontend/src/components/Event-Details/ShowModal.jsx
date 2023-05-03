import React from "react";
import * as ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../assets/scss/_modal-owl.scss";
import Modal from "@mui/material/Modal";

const ShowModal = ({ event, open, handleClose }) => {
  return ReactDOM.createPortal(
    <>
      {" "}
      <Modal open={open} onClose={handleClose} className="modal-Container">
        <>
          {" "}
          <OwlCarousel
            className="owl-theme owl-set"
            margin={15}
            nav={true}
            navText={[
              "<i  class='fa fa-chevron-left fa-lg'></i>",
              "<i class='fa fa-chevron-right fa-lg'></i>",
            ]}
          >
            {event?.map((d) => (
              <div className="grid__box--sm">
                <img
                  src={`https://cdn.firsttry.live/${d.url}`}
                  alt=""
                  className="grid__image "
                />
              </div>
            ))}
          </OwlCarousel>
        </>
      </Modal>
    </>,
    document.getElementById("modal-root")
  );
};

export default ShowModal;
