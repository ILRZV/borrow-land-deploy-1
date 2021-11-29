import {
  maxLengthRule,
  minLengthRule,
  requiredRule,
} from '../../utils/validatorPage'

export const RepliesFormValidationScheme = {
  description: {
    minLength: minLengthRule(3),
    maxLength: maxLengthRule(500),
    required: requiredRule().message,
  },
  link: {
    minLength: minLengthRule(0),
    maxLength: maxLengthRule(50),
  },
}
