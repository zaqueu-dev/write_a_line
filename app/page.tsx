import Quote from "./components/Quote";
import Input from "./components/Input";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-around">
      <Quote />
      <Input />
    </div>
  );
}
