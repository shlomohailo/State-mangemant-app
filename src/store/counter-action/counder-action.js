import { UP_ACTION, DOWN_ACTION, REST_ACTION ,UP_DATE_COUNTER} from "./counter-types";

export const upAction = () => {
   return { type: UP_ACTION };
}

export const downAction = () => {
   return { type: DOWN_ACTION };
}


export const reset = () => {
   return { type: REST_ACTION};
}

export const upDateCouter = (num) => {
   return { type: UP_DATE_COUNTER, payload: num };
}