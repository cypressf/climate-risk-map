import React from 'react';
import { useSelector } from 'react-redux';
import { getSelections, toggleDataDescription } from './appSlice';
import dataDefinitions from './DataDefinitions';
import { useThunkDispatch } from './Home';
import { RootState } from './store';

const DataDescription = () => {
    const dispatch = useThunkDispatch();
    const {selections, showDataDescription} = useSelector((state: RootState) => ({
        ...state.app,
        selections: getSelections(state.app),
    }));
    if (selections.length !== 1) {
        return null;
    }
    const dataDefinition = dataDefinitions.get(selections[0].dataGroup);
    const description = dataDefinition!.description(selections[0].normalization);
    const name = dataDefinition!.name(selections[0].normalization);

    if (!description) {
        return null;
    }

    return <div id="description">
    <button
        onClick={() => dispatch(toggleDataDescription())}
        className={showDataDescription ? "shown" : undefined}>
        About the {name} data
    </button>
    {showDataDescription && <p>{description}</p>}
    </div>
}

export default DataDescription;