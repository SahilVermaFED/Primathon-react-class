import { Formik, Form, Field, ErrorMessage } from "formik";
import { dropDownOptions } from "../pages/MyAppForm";

const BasicFormTwo = () => {
  const initialValues = { email: "", password: "", tel: "" };

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

    if (!values.tel) {
      errors.tel = "Please enter your mobile number";
    } else if ((values.tel < 1000000000)) {
      errors.tel = "Mobile number must be 10 digits";
    }

    // if (!values.file && values.file.size <= 2048000) {
    //   errors.file = "Please upload file with maximum size '2 MB'";
    // } else "";

    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 3));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="bg-orange-700 p-5 m-5 mx-auto max-w-sm">
      <h1 className="text-3xl text-center mb-6">Basic Form Two</h1>
      <Formik
        initialValues={initialValues}
        validate={validator}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <Field
                type="email"
                name="email."
                placeholder="Enter your email"
                className="border rounded p-1 block w-full"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className="mb-4">
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="border rounded p-1 block w-full"
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <div className="mb-4">
              <Field
                type="tel"
                name="tel"
                placeholder="Enter you mobile number"
                className="border rounded block w-full p-1"
              />
              <ErrorMessage name="tel" component="div" />
            </div>

            <div className="flex gap-2 justify-between px-1 mb-4">
              <label>
                Personal Account &nbsp;&nbsp;
                <Field
                  type="radio"
                  name="accounttype"
                  value="personal-account"
                />
              </label>
              <label>
                Business Account &nbsp;&nbsp;
                <Field
                  type="radio"
                  name="accounttype"
                  value="business-account"
                />
              </label>
            </div>

            <div className="flex items-center justify-center border rounded p-1 w-full mb-4">
              <label className="pr-2 font-bold text-gray-300">File:</label>
              <Field type="file" name="file" />
              <ErrorMessage name="file" component="div" />
            </div>

            <div className="flex items-center justify-center border rounded p-1 w-full mb-4">
              <label className="">Select from DropDown:</label>
              <select type="" name="selectOption" className="border p-2">
                <option value="" disabled>
                  Select One
                </option>
                {dropDownOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center border rounded p-1 block w-full mb-4">
              <label>
                D.O.B: &nbsp;
                <Field type="date" name="dateofbirth" />
                <ErrorMessage name="dateofbirth" component="div" />
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block p-1 w-full rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicFormTwo;
