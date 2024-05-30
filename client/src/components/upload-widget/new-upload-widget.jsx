import React, { useEffect, useRef } from "react";
import {ArrowUpFromLine} from 'lucide-react'
export default function NewUploadWidget({ setAssets, uwConfig }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      uwConfig,
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log(result.info);
          if (uwConfig.multiple) {
            setAssets((prev) => [...prev, result.info.secure_url]);
          } else {
            setAssets(result.info.secure_url);
          }
        }
      }
    );
  }, []);
  return (
    <>
      <button
        type="button"
        className="ui inverted upload_btn fluid blue small"
        onClick={() => widgetRef.current.open()}
      >
        <ArrowUpFromLine />
        upload
      </button>
      <style jsx>
        {`
          .upload_btn {
            font-size: 20px;
            padding:10px 20px;
            background:rgb(48, 124, 124);
            color: #fff;
            border: none;
            border-radius: 5px;
            display: flex;
            gap: 10px;
            align-items: center;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
