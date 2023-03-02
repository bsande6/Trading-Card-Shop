import React, { useState, useEffect } from "react";

const UploadAndDisplayImage = (props) => {

    let [selectedImage, setSelectedImage] = useState("");
   

    useEffect(() => {
      if (props.onChange) {
        props.onChange({
          selectedImage
        });
      }
    }, [selectedImage]);

    return (
      <div>
        <p style={{color: 'black'}}> Select an Image </p>
        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
  
        <br />
        <br />
        
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]) 
          }}
        />
        
      </div>
    );
  };
  
  export default UploadAndDisplayImage;
 