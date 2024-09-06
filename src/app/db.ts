const R = 265
const POINT = 28

export const timeSegments = [
  {
    id: 1,
    countPoints: 6,
    points: [
      { id: 1, x: -POINT, y: R - POINT },
      { id: 2, x: 0.5 * R - POINT, y: R * (1 - Math.sqrt(3) / 2) - POINT },
      { id: 3, x: 1.5 * R - POINT, y: R * (1 - Math.sqrt(3) / 2) - POINT },
      { id: 4, x: 2 * R - POINT, y: R - POINT },
      {
        id: 5,
        x: 1.5 * R - POINT,
        y: 2 * R - R * (1 - Math.sqrt(3) / 2) - POINT,
      },
      {
        id: 6,
        x: 0.5 * R - POINT,
        y: 2 * R - R * (1 - Math.sqrt(3) / 2) - POINT,
      },
    ],
  },
  {
    id: 2,
    countPoints: 5,
    points: [
      {
        id: 1,
        x: -22,
        y: 1.5388 * 1.1755 * R - R - POINT,
      },
      { id: 2, x: R - POINT, y: -POINT },
      {
        id: 3,
        x: 496,
        y: 1.5388 * 1.1755 * R - R - POINT,
      },
      {
        id: 4,
        x: 83,
        y: 1.5388 * 1.1755 * R - POINT,
      },
      {
        id: 5,
        x: 390,
        y: 1.5388 * 1.1755 * R - POINT,
      },
    ],
  },
  {
    id: 3,
    countPoints: 4,
    points: [
      {
        id: 1,
        x: R * (1 - 1 / Math.sqrt(2)) - POINT,
        y: R * (1 - 1 / Math.sqrt(2)) - POINT,
      },
      {
        id: 2,
        x: R * (1 + 1 / Math.sqrt(2)) - POINT,
        y: R * (1 - 1 / Math.sqrt(2)) - POINT,
      },
      {
        id: 3,
        x: R * (1 + 1 / Math.sqrt(2)) - POINT,
        y: R * (1 + 1 / Math.sqrt(2)) - POINT,
      },
      {
        id: 4,
        x: R * (1 - 1 / Math.sqrt(2)) - POINT,
        y: R * (1 + 1 / Math.sqrt(2)) - POINT,
      },
    ],
  },
  {
    id: 4,
    countPoints: 3,
    points: [
      { id: 1, x: -POINT, y: R - POINT },
      { id: 2, x: 1.5 * R - POINT, y: R * (1 - 1.5 / Math.sqrt(3)) - POINT },
      {
        id: 3,
        x: 1.5 * R - POINT,
        y: 2 * R - R * (1 - 1.5 / Math.sqrt(3)) - POINT,
      },
    ],
  },
  {
    id: 5,
    countPoints: 2,
    points: [
      { id: 1, x: -POINT, y: R - POINT },
      { id: 4, x: 2 * R - POINT, y: R - POINT },
    ],
  },
]

export const slides = [
  {
    id: 1,
    desc: 'Наука',
    slidesNews: [
      {
        id: 1,
        title: '2015',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 2,
        title: '2016',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 3,
        title: '2017',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        id: 4,
        title: '2018',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 5,
        title: '2019',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 6,
        title: '2020',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
    ],
  },
  {
    id: 2,
    desc: 'Литература',
    slidesNews: [
      {
        id: 1,
        title: '1915',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 2,
        title: '1916',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 3,
        title: '1917',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        id: 4,
        title: '1918',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 5,
        title: '1919',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 6,
        title: '1920',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
    ],
  },
  {
    id: 1,
    desc: 'Кино',
    slidesNews: [
      {
        id: 1,
        title: '1815',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 2,
        title: '1816',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 3,
        title: '1817',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        id: 4,
        title: '1818',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 5,
        title: '1819',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 6,
        title: '1820',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
    ],
  },
  {
    id: 1,
    desc: 'Театр',
    slidesNews: [
      {
        id: 1,
        title: '1715',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 2,
        title: '1716',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 3,
        title: '1717',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        id: 4,
        title: '1718',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 5,
        title: '1719',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 6,
        title: '1720',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
    ],
  },
  {
    id: 1,
    desc: 'Живопись',
    slidesNews: [
      {
        id: 1,
        title: '1615',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 2,
        title: '1616',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 3,
        title: '1617',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        id: 4,
        title: '1618',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 5,
        title: '1619',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 6,
        title: '1620',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
    ],
  },
  {
    id: 1,
    desc: 'Архитектура',
    slidesNews: [
      {
        id: 1,
        title: '1515',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 2,
        title: '1516',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 3,
        title: '1517',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        id: 4,
        title: '1518',
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 5,
        title: '1519',
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 6,
        title: '1520',
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
    ],
  },
]
