import React, { useState, useRef } from 'react';
import './App.scss';
import './Icon.scss';
import FileUploader from './FileUploader';
import Camera from './Camera';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faImage } from '@fortawesome/free-solid-svg-icons';

function App() {
  // Check to see if camera access is supported in the browser
  const supported = 'mediaDevices' in navigator;
  const [cameraIsActive, setCameraIsActive] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  const cameraView = useRef();
  const canvasRef = useRef();

  const getCameraStream = () => {
    const constraints = {
      video: {
        facingMode: { 
          exact: 'environment'
        },
      },
    };

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      // Update the UI when accessing the camera
      setCameraIsActive(true);

      // Stream the content to the screen
      cameraView.current.srcObject = stream;
    }).catch(err => {
      console.log('There was an error using the camera: ', err);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Classifier</h1>
      </header>

      <article className="button-group">
        {supported &&
          <Button classes="button--primary button--stack" onClick={getCameraStream}><FontAwesomeIcon icon={faCameraRetro} className="icon" /> Take a Photo</Button>
        }
        {/* <Button classes="button--primary button--stack" onClick={() => setUploadingFile(true)}><FontAwesomeIcon icon={faImage} className="icon" /> Select a Photo from Camera Roll</Button> */}
      </article>

      <Camera
        cameraView={cameraView}
        canvasRef={canvasRef}
        cameraIsActive={cameraIsActive}
        setCameraIsActive={setCameraIsActive}
      />
  
      {uploadingFile &&
        <form id="image-selector">
          <FileUploader></FileUploader>
        </form>
      }
    </div>
  );
}

export default App;
