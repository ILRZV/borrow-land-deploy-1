import {
  maxLengthRule,
  minLengthRule,
  requiredRule,
} from '../../utils/validatorPage'

export const RequestFormValidationScheme = {
  title: {
    minLength: minLengthRule(3),
    maxLength: maxLengthRule(30),
    required: requiredRule().message,
  },
  address: {
    minLength: minLengthRule(3),
    maxLength: maxLengthRule(30),
    required: requiredRule().message,
  },
}
