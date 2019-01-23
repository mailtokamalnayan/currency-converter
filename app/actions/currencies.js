export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANCE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT'

export const swapCurrency = () => ({
    type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
    type: CHANCE_CURRENCY_AMOUNT,
    amount: parseFloat(amount),
})