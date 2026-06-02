import { IStore } from '../store'

export const inc = (state: IStore) => {
  if (state.datePeriod >= state.countPoints) {
    return {
      datePeriod: state.datePeriod,
    }
  }

  return {
    datePeriod: state.datePeriod + 1,
  }
}
