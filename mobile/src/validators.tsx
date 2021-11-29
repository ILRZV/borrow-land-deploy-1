import * as yup from "yup";
import {
  EMAIL_FIELD,
  PASSWORD_CONFIRMATION_FIELD,
  PASSWORD_FIELD,
  PHONE_FIELD,
  NAME_FIELD,
} from "./fieldConsts";

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const validationFields = {
  EMAIL: yup
    .string()
    .email("Please enter valid email")
    .required("Email address is required"),
  NAME: yup
    .string()
    .min(3, ({ min }) => `Name must be at least ${min} characters`)
    .required("Name is required"),
  PASSWORD: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .matches(
      PASSWORD_REGEX,
      "Password must be minimum eight characters, at least one letter and one number"
    ),
  PASSWORD_CONFIRMATION: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match"),
  PHONE_NUMBER: yup
    .string()
    .required("Phone number is required")
    .matches(
      PHONE_REGEX,
      "Enter valid phone number"
    ),
};

export const emailValidationSchema = yup.object().shape({
  [EMAIL_FIELD]: validationFields.EMAIL,
});

export const registerValidationSchema = yup.object().shape({
  [EMAIL_FIELD]: validationFields.EMAIL,
  [NAME_FIELD]: validationFields.NAME,
  [PASSWORD_FIELD]: validationFields.PASSWORD,
  [PASSWORD_CONFIRMATION_FIELD]: validationFields.PASSWORD_CONFIRMATION,
  [PHONE_FIELD]: validationFields.PHONE_NUMBER,
});

export const passwordsValidationSchema = yup.object().shape({
  [PASSWORD_FIELD]: validationFields.PASSWORD,
  [PASSWORD_CONFIRMATION_FIELD]: validationFields.PASSWORD_CONFIRMATION,
});

export const loginValidationSchema = yup.object().shape({
  [EMAIL_FIELD]: validationFields.EMAIL,
  [PASSWORD_FIELD]: validationFields.PASSWORD,
});
