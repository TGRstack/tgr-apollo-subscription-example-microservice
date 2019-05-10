import { IFluxAction, Iobj } from '_modules/types/common'

export default function passiveReducer(state: Iobj, action: IFluxAction) {
  return {
    ...state,
    ...action.payload,
  }
}

// export default function passiveReducer(state: Iobj, action: IFluxAction) {
//   switch (action.type) {
//     case 'misc':
//       break

//     default:
//       return {
//         ...state,
//         ...action.payload,
//       }
//   }
// }
