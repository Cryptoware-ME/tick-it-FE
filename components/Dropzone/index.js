import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import styles from "./Dropzone.module.scss";
function MyDropzone({ filePreview, setFilePreview, setImage, text }) {
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: "image/*",
    

    onDropAccepted: async (acceptedFiles) => {
      const tempProfilePicture = await toBase64(acceptedFiles[0]);
      setFilePreview(URL.createObjectURL(acceptedFiles[0]));
      setImage(tempProfilePicture);
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
