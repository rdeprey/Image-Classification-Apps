import React, { useState, useEffect } from 'react';
import Button from './Button';
import Predictions from './Predictions';
import './Camera.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

export default function Camera(props) {
    const {
        cameraView,
        canvasRef,
        cameraIsActive,
        setCameraIsActive,
    } = props;

    const getRenderSize = () => {
        // Get the viewport size
        const { innerWidth: width } = window;

        // Adjust values so that the video/canvas only use part of the available viewport
        return {
            width: width * 0.7,
        };
    };

    const [windowDimensions, setWindowDimensions] = useState(getRenderSize());
    const [requestPrediction, setRequestPrediction] = useState(false);
    let context;

    useEffect(() => {
        setWindowDimensions(getRenderSize());
    }, []);

    useEffect(() => {
        if (cameraIsActive) {
            setRequestPrediction(false);
        }
    }, [cameraIsActive]);

    const takeSnapshot = () => {
        context = canvasRef.current.getContext('2d');

        // Make sure there's an image to draw before trying to draw it
        if (cameraView) {
            const cameraHeight = cameraView.current.clientHeight;
            canvasRef.current.height = cameraHeight;

            // Draw the video frame to the canvas.
            context.drawImage(cameraView.current, 0, 0, windowDimensions.width, cameraHeight);
        }

        // Stop all video streams and stop the camera
        cameraView.current.srcObject.getVideoTracks().forEach(track => track.stop());
        setCameraIsActive(false);
        setRequestPrediction(true);
    };

    const cameraClasses = classNames(
        'camera__wrapper',
        { 'camera__wrapper--hidden': !cameraIsActive },
    );

    const canvasClasses = classNames(
        'camera__canvas',
        { 'camera__canvas--hidden': cameraIsActive },
    );

    return (
        <div className="camera">
          {cameraIsActive &&
            <div className={cameraClasses}>
                <video className="camera__view-finder" ref={cameraView} autoPlay width={windowDimensions.width}></video>
                <Button classes="camera__take-snapshot-button" onClick={takeSnapshot}><FontAwesomeIcon icon={faDotCircle} className="icon" /></Button>
            </div>
          }
          
          <div className="camera__canvas-wrapper">
            <canvas className={canvasClasses} ref={canvasRef} width={windowDimensions.width}></canvas>
          </div>

          <Predictions requestPrediction={requestPrediction} canvas={canvasRef}></Predictions>
        </div>
    );
}