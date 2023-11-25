import { Formik, Form, Field, ErrorMessage } from "formik";

const SignInForm = ({}) => {
  const initialValues = { email: "", password: "" };

  const validator = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Please enter valid email";
    }

    if (!values.password) {
      errors.password = "Please enter your password";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="bg-white border rounded-2xl px-12 py-5 m-8 mx-auto my-10 max-w-sm">
      <h1 className="text-2xl font-bold text-center mb-4 mt-2">Sign In</h1>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
        // onForgotPasswordClick={handleForgotPasswordClick}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3 flex flex-col gap-0.25">
              <label className="pb-2 text-sm font-bold">Email address</label>
              <Field
                type="email"
                name="email."
                placeholder="&nbsp;Enter email"
                className="border rounded p-1 block w-full  placeholder-gray-500 border-gray-300"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className="mb-3 flex flex-col gap-0.25">
              <label className="pb-2 text-sm font-bold">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="&nbsp;Enter password"
                className="border rounded p-1 block w-full placeholder-gray-500 border-gray-300"
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <div className="mb-3 flex items-center text-gray-700">
              <Field type="checkbox" name="rememberme" className="mr-2" />
              <label className="tracking-tight ...">Remember me</label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block p-1.5 mb-2 w-full rounded bg-blue-500 text-white hover:bg-blue-700 text-sm"
            >
              Submit
            </button>
            <div className="mb-4 flex flex-row justify-end gap-1">
              <p className="text-gray-500 text-xs">Forgot</p><b className="text-lightBlue text-xs">password?</b>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
