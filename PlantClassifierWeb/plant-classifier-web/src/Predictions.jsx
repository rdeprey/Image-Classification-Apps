import React, { useState, useEffect } from 'react';
import './Predictions.scss';
// import { loadMobileNet, classifyImage } from './mobileNet';
import { newModel, predictWithNewModel } from './ModelTrainer';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

export default function Predictions(props) {
    const {
        requestPrediction,
        canvas,
    } = props;

    const [model, setModel] = useState();
    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        if (requestPrediction) {
            setPredictions(0);
            
            async function getPredictions() {
                const context = canvas.current.getContext('2d');
                // const data = context.getImageData(0, 0, canvas.current.width, canvas.current.height);

                if (!model) {
                    // setModel(await loadMobileNet());
                    setModel(await newModel());
                } else {
                    // setPredictions(await classifyImage(model, data));
                    setPredictions(await predictWithNewModel(model, canvas.current));
                }
            };

            getPredictions();
        }
    }, [requestPrediction, canvas, model]);

    const createKey = (keyVal) => {
        return kebabCase(keyVal);
    }

    const predictionClasses = classNames(
        'predictions',
        { 'predictions--hidden': !requestPrediction || predictions.length === 0 },
    );

    return (
        <div className={predictionClasses}>
            <h2>Predictions</h2>

            {canvas.current &&
                <a style={{ color: "#000000" }} download="test.png" href={canvas.current.toDataURL('image/png').replace('image/png', 'image/octet-stream')}>test</a>
            }

            <table className="predictions__table">
                <thead>
                    <tr>
                        <th>It might be a...</th>
                        <th>Computer's Confidence Level</th>
                    </tr>
                </thead>
                <tbody>
                {predictions.length > 0 && predictions.map(res => {
                    return (
                        <tr key={createKey(res.className)}>
                            <td>{res.className}</td>
                            <td>{Math.round(res.probability * 100)}%</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};