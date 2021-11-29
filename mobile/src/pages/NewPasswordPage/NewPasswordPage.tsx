import * as React from "react";
import {
  Box,
  FormControl,
  Heading,
  Input,
  VStack,
  Text,
  Button,
} from "native-base";
import { Styles } from "./styles";
import { passwordsValidationSchema } from "../../validators";
import { useCallback } from "react";
import { Formik } from "formik";
import { PASSWORD_FIELD, PASSWORD_CONFIRMATION_FIELD } from "../../fieldConsts";

export default function NewPasswordPage({ navigation }) {
  const style = Styles;
  const navigateToLogin = useCallback(
    () => navigation.navigate("LoginPage"),
    []
  );

  return (
    <Formik
      initialValues={{
        [PASSWORD_FIELD]: "",
        [PASSWORD_CONFIRMATION_FIELD]: "",
      }}
      onSubmit={() => {}} //TODO
      validateOnMount
      validationSchema={passwordsValidationSchema}
    >
      {({ handleChange, handleBlur, values, touched, errors, isValid }) => (
        <Box safeArea flex={1} p="2" w="90%" mx="auto" py="5">
          <Heading style={style.heading}>Create new password</Heading>
          <VStack space={3} alignItems="center" mt={3}>
            <FormControl>
              <Input
                onChangeText={handleChange(PASSWORD_FIELD)}
                onBlur={handleBlur(PASSWORD_FIELD)}
                placeholder="New password"
                secureTextEntry
                value={values.password}
              />
            </FormControl>
            {errors.password && touched.password && (
              <Text style={style.errors}>{errors.password}</Text>
            )}

            <FormControl>
              <Input
                onChangeText={handleChange(PASSWORD_CONFIRMATION_FIELD)}
                onBlur={handleBlur(PASSWORD_CONFIRMATION_FIELD)}
                placeholder="Repeat password"
                secureTextEntry
                value={values.passwordConfirmation}
              />
            </FormControl>
            {errors.passwordConfirmation && touched.passwordConfirmation && (
              <Text style={style.errors}>{errors.passwordConfirmation}</Text>
            )}
            <Button
              disabled={!isValid}
              onPress={navigateToLogin}
              style={style.button}
            >
              Confirm
            </Button>
          </VStack>
        </Box>
      )}
    </Formik>
  );
}
