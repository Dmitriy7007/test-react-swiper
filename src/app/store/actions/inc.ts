import { IStore } from '../store'

export const inc = (state: IStore) => {
  if (state.datePeriod < state.countPoints) {
    state.datePeriod = state.datePeriod + 1
  }
  return {
    datePeriod: state.datePeriod,
  }
}
