// const fs = require("fs");
// // router will be used to handle the request.
// const AWS = require("aws-sdk"); // aws-sdk library will used to upload image to s3 bucket.
// require("dotenv/config"); // for using the environment variables that stores the confedential information.
// require("aws-sdk/lib/maintenance_mode_message").suppress = true;
// // require("aws-sdk/lib/maintenance_mode_message").suppress = true;

// AWS.config.update({
//   accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
//   secretAccessKey: `${process.env.AWS_ACCESS_KEY_SECRET}`,
//   region: `${process.env.AWS_BUCKET_REGION}`,
// });

// const s3 = new AWS.S3({
//   params: { Bucket: process.env.AWS_BUCKET_NAME },
// });

// console.log("gggfgfgdddddddddddddddd", process.env.AWS_BUCKET_REGION);

// const BUCKET = `${process.env.AWS_BUCKET_NAME}`;

// // Uploading the files
// const uploadFile = (filePath, keyName) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const file = fs.readFileSync(filePath);

//       const uploadParams = {
//         Bucket: BUCKET,
//         Key: keyName,
//         Body: file,
//       };

//       // S3 ManagedUpload with callbacks are not supported in AWS SDK for JavaScript (v3).
//       // Please convert to `await client.upload(params, options).promise()`, and re-run aws-sdk-js-codemod.
//       s3.upload(uploadParams, function (err, data) {
//         if (err) {
//           return reject(err);
//         }
//         if (data) {
//           console.log("File uploaded Successfully", data);
//           return resolve(data);
//         }
//       });
//     } catch (err) {
//       return reject(err);
//     }
//   });
// };

// uploadFile("./images/Image118.jpg", "Golf.png");

// const getSignUrlForFile = (key) => {
//   console.log(key);
//   return new Promise((resolve, reject) => {
//     try {
//       const path = require("path");
//       const fileName = path.basename(key);

//       var params = {
//         Bucket: BUCKET,
//         Key: key,
//       };

//       const signedUrl = s3.getSignedUrl("getObject", params);

//       if (signedUrl) {
//         console.log(signedUrl, fileName);
//         return resolve({
//           signedUrl,
//           fileName,
//         });
//       } else {
//         return reject("Cannot create signed URL");
//       }
//     } catch (err) {
//       return reject("Cannot create signed URL!");
//     }
//   });
// };

// getSignUrlForFile("Golf.png");
