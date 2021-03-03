import {getIncrementalIdFn} from '../utils'
const getId = getIncrementalIdFn(1)

export const DemoList = [
  { id: getId(), name: 'Link', component: 'Link'},
  { id: getId(), name: 'Tree', component: 'Tree'}
]
