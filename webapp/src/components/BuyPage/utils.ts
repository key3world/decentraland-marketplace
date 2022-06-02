import { BigNumber } from 'ethers'

/**
 * Checks against the min value of costless sales
 */
export function isPriceTooLow(price: string) {
  const minSaleValue = getMinSaleValueInWei()
  if (!isNaN(parseInt(price, 10)) && minSaleValue) {
    return BigNumber.from(price).lt(minSaleValue)
  }
  return false
}

/**
 * It returns the minimum sale value allowed for costless sales.
 * The price is expected to be used as an inclusive cap, meaning that prices that equal the value SHOULD be filtered
 */
export function getMinSaleValueInWei(): string | undefined {
  return process.env.REACT_APP_MIN_SALE_VALUE_IN_WEI
}
