import { useState } from "react";

import Box from "@mui/material/Box";

import ReactCrop from "react-image-crop";

import "react-image-crop/dist/ReactCrop.css";

export default function ImageSelector(props) {
  const [crop, setCrop] = useState();

  return (
    <Box padding={1} borderRadius={2} sx={{ backgroundColor: "white" }}>
      {props.correction === true ? (
        <ReactCrop
          crop={crop}
          onChange={(c) => {
            setCrop(c);
            console.log(crop);
          }}
        >
          <img
            className="img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/SinusRhythmLabels-it.svg/1200px-SinusRhythmLabels-it.svg.png"
            alt=""
          />
        </ReactCrop>
      ) : (
        <img
          className="img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/SinusRhythmLabels-it.svg/1200px-SinusRhythmLabels-it.svg.png"
          alt=""
        />
      )}
    </Box>
  );
}
