
import { Load_data } from '../actions/constants';


export default function TweetReducer(initalState={},action){
    const {type,payload}=action;
    switch(type){
        case Load_data:
            return [...state,payload];
            case Load_data:
                return [...state,payload];
                
    
    }



}