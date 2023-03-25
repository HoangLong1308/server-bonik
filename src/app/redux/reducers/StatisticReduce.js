import {
    STATISTIC_SPECICALLY,
    STATISTIC_PRODUCT_SELLING_TOP,
    STATISTIC_REVENUEBYWEEK
} from '../actions/StatisticAction';

const initalState = {
    statisticSpecially: {},
    topSelling:[],
    revenue: {}
};

const StatisticReduce = (state = initalState, action) => {
    switch (action.type) {
        case STATISTIC_SPECICALLY:
            console.log(state)
            return {
                ...state,
                statisticSpecially: action.payload
            };
        case STATISTIC_PRODUCT_SELLING_TOP:
            console.log(state)
            return {
                    ...state,
                    topSelling: action.payload
                };
        case STATISTIC_REVENUEBYWEEK:
                console.log(state)
            return {
                    ...state,
                    revenue: action.payload
            };
        default:
            return state;
    }
};
export default StatisticReduce;