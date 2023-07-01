import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamejsx = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    })
    return (
        <div className='results-container'>
            {suggestedNamejsx}
        </div>
    );
};

export default ResultsContainer;