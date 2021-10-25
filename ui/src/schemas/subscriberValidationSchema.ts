import * as yup from 'yup';

export const subscriberValidationSchema = yup.object().shape({
  name: yup.string().required('Imię i nazwisko jest wymagane'),
  email: yup
    .string()
    .email('Niepoprawny adres Email')
    .required('Email jest wymagany'),
});
