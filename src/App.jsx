import { ExampleOne } from "./components/use-effect/apiwithuseEffect";
import MyAppForm from "./pages/MyAppForm";
 const App = () => {
  return (
    <div className="bg-newlightBlue">
      <h1 className="text-3xl font-bold underline p-10">Hello Primathon!</h1>
      <MyAppForm />
      <ExampleOne />
    </div>
  );
};

export default App;
