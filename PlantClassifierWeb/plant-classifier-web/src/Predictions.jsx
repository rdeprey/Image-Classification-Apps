import React, { useState, useEffect } from 'react';
import './Predictions.scss';
import { newModel, predictWithNewModel } from './ModelTrainer';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';

export default function Predictions(props) {
    const {
        requestPrediction,
        canvas,
    } = props;

    const [model, setModel] = useState();
    const [predictions, setPredictions] = useState({});

    useEffect(() => {
        if (requestPrediction) {
            setPredictions(0);
            
            async function getPredictions() {
                if (!model) {
                    setModel(await newModel());
                } else {
                    setPredictions(await predictWithNewModel(model, canvas.current));
                }
            };

            getPredictions();
        }
    }, [requestPrediction, canvas, model]);

    const predictionClasses = classNames(
        'predictions',
        { 'predictions--hidden': !requestPrediction || isEmpty(predictions) },
    );

    return (
        <div className={predictionClasses}>
            <h2>Predictions</h2>
            <h3>It's an... {predictions.predictionLabel}</h3>
        </div>
    );
};