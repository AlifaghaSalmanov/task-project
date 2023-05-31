import * as yup from 'yup';

export const formSchema = yup.object().shape({
  name: yup.string().required("adınızı qeyd edin"),

  surname: yup.string().required("soyadınızı qeyd edin"),
  email: yup.string().required("email ünvanınızı qeyd edin"),
  message: yup.string().required("göndərəcəyiniz mətni qeyd edin"),
});