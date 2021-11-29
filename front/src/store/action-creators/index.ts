import * as mapActionCreators from './map'
import * as requestsActionCreators from './requests'

export default {
  ...mapActionCreators,
  ...requestsActionCreators,
}
