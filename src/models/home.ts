import { Model } from "dva-core-ts";
import { Reducer } from "redux";

export interface HomeState {
    num: number;
}



interface HomeModel extends Model {
    namespace: 'home';
    state: {
        num: number
    };
    reducers: {
        add: Reducer<HomeState>,
    };
    effects: {
        asyncAdd: Effect;
    }
}

const initialState = {
    num: 1,
}

function delay(timeout: number) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

const homeModel: HomeModel = {
    namespace: 'home',
    state: initialState,
    reducers: {
        add(state = initialState, { payload }) {
            return {
                ...state,
                num: state.num + payload.num,
            }
        },
    },
    effects: {
        *asyncAdd({ payload }, { call, put }) {
            yield call(delay, 1000)
            yield put({
                type: 'add',
                payload,

            })
            
        }
    }

}

export default homeModel;