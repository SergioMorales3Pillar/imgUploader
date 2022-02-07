import React, { useState } from "react";
import "./Uploader.css";
function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);

    fetch("https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div class="upload">
      <p class="paragraph">Test</p>
      <form action="/">
        <div class="avatar-zone"></div>

        <input type="file" class="upload_btn" />
        <div class="overlay-layer">Upload photo</div>
      </form>
    </div>
  );
}
export default FileUploadPage;
