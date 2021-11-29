import * as React from "react";
import { useCallback, useContext, useState } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  ScrollView,
  FormControl,
  Input,
  Button,
  theme,
} from "native-base";
import { ActivityIndicator } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import FormControlLabel from "../../components/FormControlLabel";
import { registerValidationSchema } from "../../validators";
import { Styles } from "./styles";
import { Formik } from "formik";
import {
  EMAIL_FIELD,
  PASSWORD_FIELD,
  PASSWORD_CONFIRMATION_FIELD,
  NAME_FIELD,
  PHONE_FIELD,
} from "../../fieldConsts";
import { registration } from "../../api/registrationRequest";
import { CredentialsContext } from "../../components/CredentialsContext";
import { BORROWLAND_CREDENTIALS } from "../store/credentialConst";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SIGHUP = "Sign up to continue!";
const ERROR = "An error occured";
const PERSIST_LOGIN_FAILED = "Persist login failed";
const PHONE_NUMBER = "Phone number";
const CONFIRM_PASSWORD = "Confirm password";
const GOOGLE_LOGIN = "Login with your Google account";
const GOOGLE_BTN = "Google login button";
const HOME_ADDRESS = "Home address";
const CREATE_PROFILE = "Create profile";

export default function RegistrationPage({ navigation }) {
  const style = Styles;
  const navigateToMain = useCallback(() => navigation.navigate("Main"), []);
  const { setStoredCredentials } = useContext(CredentialsContext);
  const [message, setMessage] = useState<string>();

  const persistLogin = (credentials, message) => {
    AsyncStorage.setItem(BORROWLAND_CREDENTIALS, JSON.stringify(credentials))
      .then(() => {
        setMessage(message);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        setMessage(PERSIST_LOGIN_FAILED);
        return error.data;
      });
  };
  const onSubmit = useCallback(
    ({ passwordConfirmation, ...values }, { setSubmitting }) => {
      if (
        values[EMAIL_FIELD] &&
        values[PASSWORD_FIELD] &&
        values[NAME_FIELD] &&
        values[PHONE_FIELD]
      ) {
        registration(values)
          .then((response) => {
            const { message } = response.data;
            persistLogin(BORROWLAND_CREDENTIALS, message);
          })
          .catch((error) => {
            setMessage(ERROR);
            console.log(error.response);
          });
      }
      setSubmitting(false);
    },
    []
  );

  return (
    <Formik
      initialValues={{
        [NAME_FIELD]: "",
        [EMAIL_FIELD]: "",
        [PASSWORD_FIELD]: "",
        [PASSWORD_CONFIRMATION_FIELD]: "",
        [PHONE_FIELD]: "",
      }}
      onSubmit={onSubmit}
      validateOnMount
      validationSchema={registerValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        isValid,
        isSubmitting,
        handleSubmit,
      }) => (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box safeArea flex={1} p="2" w="90%" mx="auto" py="3">
            <Heading style={style.welcomeHeading}>Welcome</Heading>
            <Heading style={style.smallHeading} mt="1">
              {SIGHUP}
            </Heading>

            <VStack space={3} mt="3">
              <FormControl>
                <Text style={style.buttonHeading}>Name</Text>
                <Input
                  onChangeText={handleChange(NAME_FIELD)}
                  onBlur={handleBlur(NAME_FIELD)}
                  secureTextEntry={false}
                  value={values.name}
                />
              </FormControl>
              {errors.name && touched.name && (
                <Text style={style.errors}>{errors.name}</Text>
              )}
              <FormControlLabel text="Surname" secureTextEntry={false} />

              <FormControl>
                <Text style={style.buttonHeading}>Email</Text>
                <Input
                  onChangeText={handleChange(EMAIL_FIELD)}
                  onBlur={handleBlur(EMAIL_FIELD)}
                  secureTextEntry={false}
                  value={values.email}
                />
              </FormControl>
              {errors.email && touched.email && (
                <Text style={style.errors}>{errors.email}</Text>
              )}

              <FormControl>
                <Text style={style.buttonHeading}>{PHONE_NUMBER}</Text>
                <Input
                  onChangeText={handleChange(PHONE_FIELD)}
                  onBlur={handleBlur(PHONE_FIELD)}
                  secureTextEntry={false}
                  value={values.phone}
                />
              </FormControl>
              {errors.phone && touched.phone && (
                <Text style={style.errors}>{errors.phone}</Text>
              )}

              <FormControlLabel text={HOME_ADDRESS} secureTextEntry={false} />

              <FormControl>
                <Text style={style.buttonHeading}>Password</Text>
                <Input
                  onChangeText={handleChange(PASSWORD_FIELD)}
                  onBlur={handleBlur(PASSWORD_FIELD)}
                  secureTextEntry
                  value={values.password}
                />
              </FormControl>
              {errors.password && touched.password && (
                <Text style={style.errors}>{errors.password}</Text>
              )}

              <FormControl>
                <Text style={style.buttonHeading}>{CONFIRM_PASSWORD}</Text>
                <Input
                  onChangeText={handleChange(PASSWORD_CONFIRMATION_FIELD)}
                  onBlur={handleBlur(PASSWORD_CONFIRMATION_FIELD)}
                  secureTextEntry
                  value={values.passwordConfirmation}
                />
              </FormControl>
              {errors[PASSWORD_CONFIRMATION_FIELD] &&
                touched.passwordConfirmation && (
                  <Text style={style.errors}>
                    {errors.passwordConfirmation}
                  </Text>
                )}

              <Text style={style.errors}>{message}</Text>

              {isSubmitting ? (
                <Button style={style.button} disabled>
                  <ActivityIndicator size="small" color={theme.colors.white} />
                </Button>
              ) : (
                <Button
                  disabled={!isValid}
                  onPress={handleSubmit as any}
                  style={style.button}
                >
                  {CREATE_PROFILE}
                </Button>
              )}

              <VStack space={3} alignItems="center" mt={3}>
                <Text fontWeight="700">or</Text>
                <Text>{GOOGLE_LOGIN}</Text>
                <PrimaryButton text={GOOGLE_BTN} onPress={navigateToMain} />
              </VStack>
            </VStack>
          </Box>
        </ScrollView>
      )}
    </Formik>
  );
}
