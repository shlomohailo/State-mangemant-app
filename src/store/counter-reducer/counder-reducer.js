import { UP_ACTION, DOWN_ACTION, REST_ACTION ,UP_DATE_COUNTER} from "../counter-action/counter-types";

export function CounterReducer(state, action) {

    switch (action.type) {
        case UP_ACTION:

            return state + 1;
        case DOWN_ACTION:

            return state - 1;
        case REST_ACTION:

            return 0;
        case UP_DATE_COUNTER:

            return action.payload;

        default:
            return state;
    }
}