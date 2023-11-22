import BasicFormOne from "../components/BasicFormOne";
import BasicFormTwo from "../components/BasicFormTwo";

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
    </>
  );
};

export default MyAppForm;
