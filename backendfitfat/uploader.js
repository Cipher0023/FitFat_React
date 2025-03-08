import cloudnaryPackage from 'cloudinary'
import 'dotenv/config'

const cloudinary = cloudnaryPackage.v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

const image ='../../testassets/1.png';

cloudinary.uploader.upload(image)
  .then(result => console.log(result))
  .catch(error => console.error(error));