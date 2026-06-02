import { IStore } from '../store'

export const dec = (state: IStore) => {
  if (state.datePeriod <= 1) {
    return {
      datePeriod: state.datePeriod,
    }
  }

  return {
    datePeriod: state.datePeriod - 1,
  }
}
