import { SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT, swapCurrency, changeCurrencyAmount } from '../actions/currencies';

const initialState = {
    baseCurrency: 'SGD',
    quoteCurrency: 'INR',
    amount: 100,
    conversions: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY_AMOUNT:
            return {
                ...state,
                amount: action.amount || 0,
            };
        case SWAP_CURRENCY:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency
            }
        default:
            return state;
    }
};

console.log('Initial State', initialState);
console.log('Swap currency', reducer(initialState, swapCurrency()));
export default reducer;