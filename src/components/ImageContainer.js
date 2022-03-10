import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import dragNdrop from '../images/drgndrop.png';
import { useDropzone } from 'react-dropzone';
import Button from '../components/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ReactLoading from "react-loading";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import Dropdown from "./Dropdown";
import { padding } from "@mui/system";
import { saveAs } from 'file-saver';
import TextContainer from "./TextContainer";
import Backdrop from '@mui/material/Backdrop';
import Video from '../Video/backVideo.mp4';
import LoadingScreen from 'react-loading-screen';
const ImageNText = styled.div`


text-align: center;
justify-content: center;

`;

const VideoBg = styled.video`
width:100%;
height:100%;
object-fit:cover;
-o-object-fit:cover;
`;

const DragNdropContainer = {
  border: "1px dashed grey",
  padding: "25vh 0",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#d3d3d3"
};

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};


const thumb = {
  display: 'inline-flex',
  marginBottom: 8,
  marginRight: 8,
  justifyContent: "center",
  width: '100%',
  height: '100%',
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: "flex"

};

const img = {
  minWidth: "60vw",
  minheight: "60vh",
  width: "60vw",
  height: "60vh",
  objectFit: "scale-down"
};
let downloadLink='';


const ImageContainer = () => {

  const [dropdownValue, setdropdownValue] = React.useState('');
  const [images, setImages] = useState([]);
  const [newImages, setnewImages] = useState();
  const [newImageArrived, setnewImageArrived] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [fetchingImage, setFetchingImage] = useState(true);
  var intervalID = 0

  const handleChange = (event) => {
    setdropdownValue(event.target.value);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setImagePreview(true);
      setImages(acceptedFiles.map(image => Object.assign(image, {
        preview: URL.createObjectURL(image)
      })));

    }


  });

  const thumbs = images.map(image => (
    <div style={thumb} key={image.name}>
      <div style={thumbInner}>
        <img
          src={image.preview}
          style={img}
          alt="oldImages"
        />
      </div>
    </div>
  ));


  useEffect(() => {
    images.forEach(image => URL.revokeObjectURL(image.preview));
  }, [images]);

  const getOutput = async () => {

    try {
      await axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/api/',
      }).then((response) => {
        const data = response.data;
        // if (data.length === 0 || data === undefined) {
        //     return
        // }
        // if(data[0].n_image.includes('Default.jpg')) {
        //     return
        // } 
        console.log(data);
        setFetchingImage(false);
        setnewImages("http://127.0.0.1:8000" + data.outputImage);
        const downloadLink="http://127.0.0.1:8000" + data.outputImage;
        setnewImageArrived(true);
        setisLoading(false);
        console.log("new image arrived");
        clearInterval(intervalID)
      });
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setImagePreview(false);
    setisLoading(true);
    // handleToggle();
    let form_data = new FormData();
    if (images !== null) {
      // console.log(images);
      form_data.append('inputImage', images[0])
    }
    let url = 'http://localhost:8000/api/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      const data = res.data;
      const resultImage = data.outputImage;
      setnewImages("http://127.0.0.1:8000" + resultImage);
      downloadLink="http://127.0.0.1:8000" + resultImage;
      setnewImageArrived(true);
      setisLoading(false);
      console.log("new image arrived");
    })

    // intervalID = setInterval(getOutput, 1000)

    // if(!fetchingImage) {
    //   clearInterval(intervalID)

    //   intervalID = null
    // }
  };


  const throwError = () => {
    alert("Please select the image first !!!")
  }

  const downloadImage = () => {
    saveAs(downloadLink, 'segmentedImage.jpg');
  }
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: 'http://127.0.0.1:8000/api/old_image',
  //   })
  //     .then((response) => {
  //       const data = response.data;
  //       console.log(data);
  //       // setnewImages(data[0].n_image);
  //       // setnewImageArrived(true);
  //     });

  // }, [images]);

  if (imagePreview) {
    return (
      <>
        <TextContainer message={"Select the method and Press Segment"} />
        <div className="container" style={thumbsContainer}>
          {thumbs}
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 20px" }}>
          <Button name='Segment' task={handleSubmit} arrow='false' />
          {/* <button type="button" className="btn btn-dark" onClick={handleSubmit}>Convert</button> */}
          {/* <Button name="Convert" task={handleSubmit}></Button> */}
        </div>
      </>
    );
  }
  else if (isLoading) {
    return (
      <>
        {/* <VideoBg autoPlay muted loop src={Video} type='video/mp4' /> */}
        {/* <LoadingScreen
    loading={true}
    bgColor='#f1f1f1'
    spinnerColor='#9ee5f8'
    textColor='#676767'
    logoSrc='/{img}'
    text='Here an introduction sentence (Optional)' */}
            {/* <div className='container' style={{position: 'absolute', left:'50%', top:'50%', transform:'translate(-50%, -50%)', padding:'10px'}}>  */}
      
      <div style={{height:'500px', width:'120px', marginLeft:'auto', marginRight:'auto', paddingTop:'10%'}}><ReactLoading
        type="spin"
        color="#6C63FF"
        height={400}
        width={150}
      />
      </div>

      {/* </div> */}
      </>
    );
  }
  else if (newImageArrived) {
    return (
      <>
        <TextContainer message={"Segmented Image from the model"} />
        <div className="container" style={thumbsContainer}>
          <div style={thumb}>
            <div style={thumbInner}>
              <img
                src={newImages}
                style={img}
                alt="New Image"
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 20px" }}>
          <Button name='Download' task={downloadImage} />

        </div>
      </>)

  }

  else {
    return (
      <>
        <TextContainer message={"Drag and Drop or Click on the area below to upload the file"} />
        <div className="container">
          <div {...getRootProps({ className: 'dropzone' })} style={DragNdropContainer}>
            <form>
              <input {...getInputProps()} type="file"
                id="inputImage" accept="image/png, image/jpeg" name="image" />
              <ImageNText>
                <img src={dragNdrop} alt="dragndrop" height="120px"
                  width="160px" />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </ImageNText>
            </form>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 20px" }}>
        {/* <Button name="Select Image" task={throwError} /> */}

        </div>
      </>

    );

  }


};

export default ImageContainer;
