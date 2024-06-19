import { FlipWords } from "../components/ui/flip-words";
import { ButtonsCard} from "../components/ui/tailwindcss-buttons"

export default function Home() {

  const words = ["Cargas positivas", "Codigo Penal"];

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="h-[40rem] w-full flex flex-col justify-center items-center px-4">
        <div className="text-4xl font-bold mx-auto text-black ">
          Amantes de
          <FlipWords words={words} /> <br />
          dedicado para los CP enjoyers
        </div>
        <div className="my-14">
          <ButtonsCard/>
        </div>
      </div>
    </div>
  )
}

















