import { instance } from "./ApiAxios";

export const uploadImage = async (image) => {
    console.log("upload Image : ", image)
  const data = await instance.post("/uploader/image", image, {
    headers: {
        "Content-Type" : "multipart/form-data"
    }
  });
  return data.data;
};

