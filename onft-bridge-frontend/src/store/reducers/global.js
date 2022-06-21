import { getType } from "typesafe-actions";
import { ALERT_EMPTY } from "../../utils/constants";
import * as actions from "../actions"

export const initialState = {
};

const states = (state = initialState, action) => {
    switch(action.type) {
        case getType(actions.Wallet):
            return {...state, wallet: action.payload};
        case getType(actions.Collection):
            return {...state, collection: action.payload};
        case getType(actions.SrcChain):
            return {...state, srcchain: action.payload};
        case getType(actions.DstChain):
            return {...state, dstchain: action.payload};
        default:
            return state;
    }
}

export default states;