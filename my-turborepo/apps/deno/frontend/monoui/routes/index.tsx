import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div className="px-4 py-8 mx-auto bg-[#86efac]">
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          className="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="Freshly"
        />
        <h1 className="text-4xl font-bold">Freshly</h1>
        <p className="my-4">Your interface, as you wish!</p>
        <Counter count={count} />
      </div>
    </div>
  );
}
