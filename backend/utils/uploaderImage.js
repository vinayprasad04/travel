import cloudinary from "cloudinary";
import streamifier from "streamifier";

////Upload file to Cloudinary
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

///Remove file to cloudinary

export const RemoveFile = async (public_id) => {
  try {
    console.log(public_id);
    return await cloudinary.v2.uploader.destroy(public_id, { folder: "NEOM" });
  } catch (error) {
    console.log(error);
  }
};
