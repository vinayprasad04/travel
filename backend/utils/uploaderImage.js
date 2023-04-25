import cloudinary from "cloudinary";
import streamifier from "streamifier";
export const UploadFile = (pic) => {
  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.v2.uploader.upload_stream(
      { folder: "NEOM" },
      (err, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
    streamifier.createReadStream(pic.data).pipe(cld_upload_stream);
  });
};
