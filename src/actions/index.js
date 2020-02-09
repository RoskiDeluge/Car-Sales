export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";
export const RESET_PRICE = "RESET_PRICE";


export const removeFeature = feature => {
    console.log("rd: actions removeFeature: payload", feature.id);
    return {
        type: REMOVE_FEATURE,
        payload: feature.id
    }
}

export const buyItem = feature => {
    console.log("rd: actions buyItme: payload", feature);
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const udpateTotalPrice = feature => {
    console.log("rd: actions updateTotalPrice: payload", feature.price);
    return {
        type: RESET_PRICE,
        payload: feature.price
    }
}