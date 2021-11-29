import * as React from "react";
import { useCallback } from "react";
import {
  Box,
  Heading,
  VStack,
  Button,
  FormControl,
  Input,
  Text,
} from "native-base";
import PrimaryButton from "../../components/PrimaryButton";
import FormControlLabel from "../../components/FormControlLabel";
import { emailValidationSchema } from "../../validators";
import { Styles } from "../ReceiveCode/styles";
import { Formik } from "formik";
import { EMAIL_FIELD } from "../../fieldConsts";

export default function ReceiveCode({ navigation }) {
  const style = Styles;
  const navigateToNewPassword = useCallback(
    () => navigation.navigate("NewPasswordPage"),
    []
  );
  const navigateToMain = useCallback(() => navigation.navigate("Main"), []);

  return (
    <Formik
      initialValues={{ [EMAIL_FIELD]: "" }}
      onSubmit={() => {}} //TODO
      validateOnMount
      validationSchema={emailValidationSchema}
    >
      {({ handleChange, handleBlur, values, touched, errors, isValid }) => (
        <Box safeArea flex={1} p="2" w="90%" mx="auto" py="5">
          <Heading style={style.heading}>
            Please, enter your email address and we will send you a secret code
            to reset your password
          </Heading>
          <VStack space={3} alignItems="center" mt={3}>
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
            <Button
              disabled={!isValid}
              onPress={navigateToMain}
              style={style.button}
            >
              Send code
            </Button>
            <FormControlLabel
              placeholder="Enter secret code "
              secureTextEntry
            />
            <PrimaryButton text="Confirm" onPress={navigateToNewPassword} />
          </VStack>
        </Box>
      )}
    </Formik>
  );
}
