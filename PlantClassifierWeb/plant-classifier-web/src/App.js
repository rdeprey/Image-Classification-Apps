import React, { useState, useRef } from 'react';
import './App.scss';
import './Icon.scss';
import Camera from './Camera';
import Button from './Button';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

function App() {
  // Check to see if camera access is supported in the browser
  const supported = 'mediaDevices' in navigator;
  const [cameraIsActive, setCameraIsActive] = useState(false);
  const [hasTakenPhoto, setHasTakenPhoto] = useState(false);
  const [requestPrediction, setRequestPrediction] = useState(false);
  const cameraView = useRef();
  const canvasRef = useRef();

  const getCameraStream = () => {
    const constraints = {
      video: {
        facingMode: 'environment' 
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

  const mainContentClasses = classNames(
    'main-content',
    { 'main-content__camera-supported': supported && (cameraIsActive || requestPrediction) },
  )

  const textClasses = classNames(
    'main-content__text',
    { 'main-content__text--hidden': cameraIsActive || hasTakenPhoto },
  );

  const buttonGroupClasses = classNames(
    'main-content__button-group',
    { 'main-content__button-group--hidden': supported && cameraIsActive }
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1><a href="/">Image Classifier</a></h1>
      </header>

      {supported &&
        <div className={mainContentClasses}>
          <p className={textClasses}>Take a photo to get predictions of what the computer thinks the main subject is! <em>You must enable camera permissions for this website in order for it to work.</em></p>
          <div className={buttonGroupClasses}>
              <Button classes="button--primary button--stack" onClick={getCameraStream}><FontAwesomeIcon icon={faCameraRetro} className="icon" /> Take {!hasTakenPhoto ? 'a' : 'another'} Photo</Button>
          </div>
          <Camera
            cameraView={cameraView}
            canvasRef={canvasRef}
            cameraIsActive={cameraIsActive}
            setCameraIsActive={setCameraIsActive}
            setHasTakenPhoto={setHasTakenPhoto}
            requestPrediction={requestPrediction}
            setRequestPrediction={setRequestPrediction}
          />
        </div>
      }

      {!supported &&
        <p>Your browser doesn't support the MediaDevices API. Please consider switching to Google Chrome or updating your browser.</p>
      }
    </div>
  );
}

export default App;
