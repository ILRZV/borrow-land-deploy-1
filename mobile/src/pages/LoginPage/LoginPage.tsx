import * as React from "react";
import { useCallback, useState, useContext } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  ScrollView,
  Input,
  Button,
  theme,
} from "native-base";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "../../components/CredentialsContext";
import PrimaryButton from "../../components/PrimaryButton";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { Styles } from "./styles";
import { FormControl } from "native-base";
import { loginValidationSchema } from "../../validators";
import { EMAIL_FIELD, PASSWORD_FIELD } from "../../fieldConsts";
import { BORROWLAND_CREDENTIALS } from "../store/credentialConst";
import { logIn } from "../../api/loginRequest";

const ERROR = "An error occured";
const PERSIST_LOGIN_FAILED = "Persist login failed";
const GOOGLE_LOGIN = "Login with your Google account";
const GOOGLE_BTN = "Goggle login button";
const FORGET_PASSWORD = "Forget Passowrd?";
const LOGIN = "Login";

export default function LoginPage({ navigation }) {
  const style = Styles;
  const navigateToMain = useCallback(() => navigation.navigate("Main"), []);
  const navigateToReceiveCode = useCallback(
    () => navigation.navigate("ReceiveCode"),
    []
  );
  const navigateToRegistration = useCallback(
    () => navigation.navigate("RegistrationPage"),
    []
  );
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
  const onSubmit = useCallback((values, { setSubmitting }) => {
    if (values[EMAIL_FIELD] && values[PASSWORD_FIELD]) {
      logIn(values)
        .then((response) => {
          const { message } = response.data;
          persistLogin(BORROWLAND_CREDENTIALS, message);
        })
        .catch(() => {
          setMessage(ERROR);
        });
    }
    setSubmitting(false);
  }, []);

  return (
    <Formik
      initialValues={{ [EMAIL_FIELD]: "", [PASSWORD_FIELD]: "" }}
      onSubmit={onSubmit}
      validateOnMount
      validationSchema={loginValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        isValid,
        handleSubmit,
        isSubmitting,
      }) => (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box safeArea flex={1} p="2" py="3" w="90%" mx="auto">
            <Heading style={style.welcomeHeading}>BorrowLand</Heading>

            <Heading mt="1" style={style.smallHeading}>
              {LOGIN}
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <Input
                  onChangeText={handleChange(EMAIL_FIELD)}
                  onBlur={handleBlur(EMAIL_FIELD)}
                  placeholder="E-mail"
                  secureTextEntry={false}
                  value={values.email}
                />
              </FormControl>
              {errors.email && touched.email && (
                <Text style={style.errors}>{errors.email}</Text>
              )}

              <FormControl>
                <Input
                  onChangeText={handleChange(PASSWORD_FIELD)}
                  onBlur={handleBlur(PASSWORD_FIELD)}
                  placeholder="Password"
                  secureTextEntry
                  value={values.password}
                />
              </FormControl>
              {errors.password && touched.password && (
                <Text style={style.errors}>{errors.password}</Text>
              )}
              <Text style={style.errors}>{message}</Text>
              <TouchableOpacity onPress={navigateToReceiveCode}>
                <Text style={style.forgetPassword} alignSelf="flex-end">
                  {FORGET_PASSWORD}
                </Text>
              </TouchableOpacity>

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
                  {LOGIN}
                </Button>
              )}

              <HStack mt="6" justifyContent="center">
                <Text>New user? </Text>
                <TouchableOpacity onPress={navigateToRegistration}>
                  <Text color="purple.500">Let's create an account!</Text>
                </TouchableOpacity>
              </HStack>

              <VStack space={3} alignItems="center">
                <Text fontWeight={700}>or</Text>
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
