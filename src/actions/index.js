export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";
export const RESET_PRICE = "RESET_PRICE";


export const removeFeature = feature => {
    console.log("rd: actions index.js: removeFeature", removeFeature);
    return {
        type: REMOVE_FEATURE,
        payload: { id: feature.id }
    }
}

export const buyItem = feature => {
    return {
        type: ADD_FEATURE,
        payload: { id: feature.id, name: feature.name, price: feature.price }
    }
}

export const udpateTotalPrice = feature => {
    return {
        type: RESET_PRICE,
        payload: { price: feature.price }
    }
}