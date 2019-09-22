import React, { useState, useEffect } from 'react';
import './Predictions.scss';
import loadMobileNet from './mobileNet';
import kebabCase from 'lodash/kebabCase';
import classNames from 'classnames';

export default function Predictions(props) {
    const {
        requestPrediction,
        canvas,
    } = props;

    const [predictions, setPredictions] = useState([]);

    useEffect(() => {
        if (requestPrediction) {
            setPredictions(0);
            
            async function getMobileNet() {
                const context = canvas.current.getContext('2d');
                const data = context.getImageData(0, 0, canvas.current.width, canvas.current.height);
                setPredictions(await loadMobileNet(data));
            };

            getMobileNet();
        }
    }, [requestPrediction, canvas]);

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
            <table className="predictions__table">
                <thead>
                    <tr>
                        <th>It might be a...</th>
                        <th>Probability</th>
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