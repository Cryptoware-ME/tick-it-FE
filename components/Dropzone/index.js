import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import styles from "./Dropzone.module.scss";
function MyDropzone({filePreview, setFilePreview}) {
  
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFilePreview(URL.createObjectURL(acceptedFiles[0]));
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
          <p className={styles.imageName}> {acceptedFiles[0].path}</p>
        ) : (
          <p className={styles.banner}> Upload event banner</p>
        )}
      </div>
    </div>
  );
}

export default MyDropzone;
