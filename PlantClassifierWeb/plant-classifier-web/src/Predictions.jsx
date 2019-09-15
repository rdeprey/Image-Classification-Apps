import React, { useState, useEffect } from 'react';
import loadMobileNet from './mobileNet';
import isEmpty from 'lodash/isEmpty';
import kebabCase from 'lodash/kebabCase';

export default function Predictions() {
    const [predictions, setPredictions] = useState({});

    useEffect(() => {
        if (isEmpty(predictions)) {
            async function getMobileNet() {
                setPredictions(await loadMobileNet());
            };

            getMobileNet();
        }
    }, [predictions]);

    const createKey = (keyVal) => {
        return kebabCase(keyVal);
    }

    return (
        <div>
            <h2>Predictions:</h2>
            <ul>
            {predictions.result && predictions.result.map(res => {
                return <li key={createKey(res.className)}>Breed: {res.className}, Probability: {Math.round(res.probability * 100)}%</li>
            })}
            </ul>
        </div>
    );
};