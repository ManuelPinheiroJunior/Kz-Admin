import multer from "multer";
import multerS3 from "multer-s3";
import { v4 as uuid } from "uuid";
import path from "path";
import aws from "aws-sdk";

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-2",
  });
  
  const s3 = new aws.S3();
  
  const upload = multer({
    storage: multerS3({
      s3,
      bucket: "images-pinheiro",
      acl: "public-read",
      key: function (req, file, cb) {
        cb(null, uuid()  + path.extname(file.originalname));
      },
    }),
  });

export default upload;