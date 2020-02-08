export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_FEATURE = "ADD_FEATURE";


export const removeFeature = index => {
    return {
        type: REMOVE_FEATURE,
        payload: index
    }
}

export const buyItem = feature => {
    return {
        type: ADD_FEATURE,
        payload: { id: feature.id, name: feature.name, price: feature.price }
    }
}