import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashBoardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashBoardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer
})

export default rootReducer