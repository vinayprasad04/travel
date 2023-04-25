import aws from "aws-sdk";

///configuration
const awsConfig = {
  secretAccessKey:
    process.env.AWS_SECRET_KEY || "3ZJZ3QA1Ltwg6u1rwBo58mtx2L80CDjhpAwrk94H",
  accessKeyId: process.env.AWS_KEY_ID || "AKIAXSEW3VQCFFQJ5J5D",
  region: process.env.AWS_REGION || "us-east-1",
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
