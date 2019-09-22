import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import './FileUploader.scss';
import Predictions from './Predictions';

export default function FileUploader(props) {
    const uploaderRef = useRef();
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const {
        classes,
        ...rest
    } = props;

    const uploaderClasses = classnames([
        'file-uploader',
        classes,
    ]);

    const handleFiles = (e) => {
      const files = e.target.files;

      if (files.length === 1) {
        setUploadedFiles(files);
      }
    };

    return (
        <div>
            {uploadedFiles.length === 0 &&
                <input 
                    ref={uploaderRef}
                    onChange={(e) => handleFiles(e)}
                    type="file"
                    accept="image/*"
                    className={uploaderClasses}
                    {...rest}
                />
            }

            {uploadedFiles.length > 0 &&
                <Predictions requestPrediction={true} />
            }
        </div>
    );
}