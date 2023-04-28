import pool from "../config/database";


export const createEvent =async(req,res)=>{

    try {
        const {
            title,
            desc,
            people,
            eventStartDate,
         } =req.body;
        
        }

}
        const eventExist = await pool.query("SELECT * from events where title=$1", [
            title,
          ]);
          if (eventExist.rows.length > 0) {
            return res.status(400).json({ msg: "Event Already Exist" });
          }
      
          /// upload images
          const images = req.files.image;
          const imageArray = [];
          console.log(req.files);
      
          for (var i = 0; i < images.length; i++) {
            const avatarData = await uploadToS3(images[i].data)
              .then((result) => {
                return result;
              })
              .catch((err) => {
                console.log(err);
              });
            imageArray.push({
              url: avatarData.key,
              id: avatarData.ETag.toString(),
            });
          }