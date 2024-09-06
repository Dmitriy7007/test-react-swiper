import { create } from 'zustand'
import { inc } from './actions/inc'
import { dec } from './actions/dec'

export interface IStore {
  datePeriod: number
  countPoints: number
  isAnimate: boolean
  inc: () => void
  dec: () => void
  updateCountPoints: (newPeriod: number) => void
}

export const useAppStore = create<IStore>(set => ({
  datePeriod: 3,
  countPoints: 6,
  isAnimate: false,
  inc: () => set(state => inc(state)),
  dec: () => set(state => dec(state)),
  updateCountPoints: newPeriod => {
    set(() => ({ datePeriod: newPeriod }))
  },
}))
