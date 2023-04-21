import React from "react";

const ModalFooter = () => {
  //   const reviewSubmitHandler = () => {
  //     setNextPage(true);
  //   };
  return (
    <div class="modal-footer">
      <div class="form__group">
        <textarea
          name=""
          id=""
          rows="5"
          placeholder="Share your feedback and suggestions about this event..."
        ></textarea>
      </div>
      <button class="btn btn__black" id="submitBtn">
        Submit
      </button>
    </div>
  );
};

export default ModalFooter;
