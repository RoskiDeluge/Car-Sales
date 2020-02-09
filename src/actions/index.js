export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";
export const RESET_PRICE = "RESET_PRICE";


export const removeFeature = feature => {
    // console.log("rd: actions index.js: removeFeature", removeFeature);
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export const buyItem = feature => {
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const udpateTotalPrice = feature => {
    return {
        type: RESET_PRICE,
        payload: feature
    }
}