export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const BUY_ITEM = 'BUY_ITEM';



// write an action creator for update title
export const buyItem = feature => {
    return {
        type: BUY_ITEM,
        payload: feature
    };
};

export const removeFeature = id => {
    return {
        type: REMOVE_FEATURE,
        payload: id
    };
};