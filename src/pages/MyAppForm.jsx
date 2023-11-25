import BasicFormOne from "../components/BasicFormOne";
import BasicFormTwo from "../components/BasicFormTwo";
import SignInForm from "../components/SignInForm";

export const dropDownOptions = [
  { value: "option1", label: "Mazerati" },
  { value: "option2", label: "BMW Ventura" },
  { value: "option3", label: "Porcha" },
];
const MyAppForm = () => {
  return (
    <>
      <hr />
      <BasicFormOne />
      <hr />
      <BasicFormTwo dropDownOptions={dropDownOptions} />
      <hr />
      <SignInForm />
      <hr />
    </>
  );
};

export default MyAppForm;
