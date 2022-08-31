import { UP_ACTION, DOWN_ACTION, REST_ACTION } from "../counter-action/counder-action";

export function CounterReducer(state, action) {

    switch (action.type) {
        case UP_ACTION.type:

            return state + 1;
        case DOWN_ACTION.type:

            return state - 1;
        case REST_ACTION.type:

            return 0;

        default:
            return state;
    }
}