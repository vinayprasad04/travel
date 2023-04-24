import React from "react";
import * as ReactDOM from "react-dom";
import eventImage from "../../assets/img/Image118.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../assets/scss/_modal-owl.scss";
import Modal from "@mui/material/Modal";

const ShowModal = (props) => {
  return ReactDOM.createPortal(
    <>
      {" "}
      <Modal open={props.open} onClose={props.handleClose}>
        <>
          {" "}
          <OwlCarousel
            items={1}
            className="owl-theme modal-container"
            margin={15}
            nav={true}
            navText={[
              "<i  class='fa fa-chevron-left fa-lg manageIcon manageIcon-left'></i>",
              "<i class='fa fa-chevron-right fa-lg manageIcon manageIcon-right'></i>",
            ]}
          >
            <div className="grid__box--sm">
              <img
                src={eventImage}
                alt=""
                className="grid__image border__rounded--topLeft"
              />
            </div>
            <div className="grid__box--sm">
              <img src={eventImage} alt="" className="grid__image" />
            </div>
            <div className="grid__box--sm">
              <img
                src={eventImage}
                alt=""
                className="grid__image border__rounded--bottomLeft"
              />
            </div>
            <div className="grid__box--sm">
              <img src={eventImage} alt="" className="grid__image" />
            </div>
          </OwlCarousel>
        </>
      </Modal>
    </>,
    document.getElementById("modal-root")
  );
};

export default ShowModal;
