import {getIncrementalIdFn} from '../utils'
const getId = getIncrementalIdFn(1)

export const DemoList = [
  { id: getId(), name: 'NavHeader', component: 'NavHeader'},
  { id: getId(), name: 'Switch', component: 'Switcher'},
  { id: getId(), name: 'Link', component: 'Link'},
  { id: getId(), name: 'Tree', component: 'Tree'},
  { id: getId(), name: 'TreeTable', component: 'TreeTable'}
]
