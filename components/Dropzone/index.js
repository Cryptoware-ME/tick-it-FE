import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import styles from "./Dropzone.module.scss";
import { uploadImage } from "../../axios/media.axios";

function MyDropzone({ filePreview, setFilePreview, setImage, text }) {
  

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: "image/*",
    

    onDropAccepted: async (acceptedFiles) => {
      let formData = new FormData();
     
      formData.append('image', acceptedFiles[0]);

      let url = await uploadImage(formData);

      setFilePreview(url);
      setImage(url);

      console.log(url);
    },
  });

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className={styles.uploadEvent} {...getInputProps()} />
      <div className={styles.uploadEvent}>
        {filePreview ? (
          <Image
            width={320}
            height={320}
            className={styles.eventImage}
            alt="image"
            src={filePreview}
            onClick={open}
          />
        ) : (
          <Image
            width={50}
            height={50}
            alt="image"
            src="/images/upload.png"
            onClick={open}
          />
        )}
      </div>
      <div>
        {filePreview ? (
          <p className={styles.imageName}> {acceptedFiles[0]?.path}</p>
        ) : (
          <p className={styles.banner}> {text}</p>
        )}
      </div>
    </div>
  );
}

export default MyDropzone;
