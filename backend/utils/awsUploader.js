import aws from "aws-sdk";
import { config } from "dotenv";

config({ path: "./config/.env" });
///configuration
const awsConfig = {
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_KEY_ID,
  region: process.env.AWS_REGION,
};

const S3 = new aws.S3(awsConfig);

const uploadToS3 = (file) => {
  return new Promise((resolve, reject) => {
    console.log(file);
    const params = {
      Bucket: "mytesttranscode",
      Key: `${Date.now().toString()}.jpg`,
      Body: file,
    };
    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(data);
      return resolve(data);
    });
  });
};

export default uploadToS3;
