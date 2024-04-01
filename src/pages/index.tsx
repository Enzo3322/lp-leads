import { Lato } from "next/font/google";
import { FaCheck } from "react-icons/fa6";

const inter = Lato({
  subsets: ["latin"],
  weight: ["400", "300", "700", "900"],
});

const btnStyles =
  "bg-blue-500 text-white md:px-[100px] md:w-auto w-full h-[50px] rounded-md";

export default function Home() {
  return (
    <main
      className={`flex flex-col md:gap-40 gap-20 md:px-36 md:py-10 p-5 max-w-screen-xl m-auto ${inter.className}`}
    >
      <section id="hero">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-gray-900 uppercase">
            [NOME DA MARCA] PRESENTES
          </p>
          <h1 className="md:text-[50px] text-[40px] leading-none font-black mb-2">
            Nome do produto e/ou o resultado final obtido após o treinamento
          </h1>
          <p className="md:text-2xl text-lg mb-10 font-normal max-w-xl">
            Diga a eles o que eles tiram do seu treinamento e por que eles
            precisam disso agora.
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-10">
          <img
            src="/lp-leads/image.png"
            alt=""
            className="rounded object-cover h-96"
          />

          <button className={btnStyles}>ENTRE EM CONTATO</button>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <img
              src="/lp-leads/image.png"
              alt=""
              className="object-cover h-60 rounded"
            />
            <img
              src="/lp-leads/image.png"
              alt=""
              className="object-cover h-60 rounded"
            />
            <img
              src="/lp-leads/image.png"
              alt=""
              className="object-cover h-60 rounded"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex md:flex-row flex-col gap-6 items-start">
          <h2 className="md:text-[40px] text-[30px] font-black w-full">
            O que você vai aprender neste treinamento
          </h2>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex gap-4 items-center">
              <FaCheck size={24} />
              <p>
                Parte DOIS - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaCheck size={24} />
              <p>
                Parte DOIS - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <FaCheck size={24} />
              <p>
                Parte DOIS - Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-10">
          <h2 className="md:text-[40px] text-[30px] font-black w-full text-center">
            1. O que eles ganham com a Parte UM
          </h2>
          <div className="flex gap-6 md:flex-row flex-col-reverse">
            <div className="w-full">
              <p className="md:mb-14 mb-5 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare. Lectus vestibulum{" "}
              </p>
              <button className={btnStyles}>GARANTA SEU KIT</button>
            </div>
            <div className="w-full">
              <img
                src="/lp-leads/image.png"
                alt=""
                className="object-cover h-60 rounded"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-10">
          <h2 className="md:text-[40px] text-[30px] font-black w-full text-center">
            2. O que eles ganham com a Parte DOIS
          </h2>
          <div className="flex gap-6 md:flex-row flex-col">
            <div className="w-full">
              <img
                src="/lp-leads/image.png"
                alt=""
                className="object-cover h-60 rounded"
              />
            </div>
            <div className="w-full">
              <p className="md:mb-14 mb-5 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare. Lectus vestibulum{" "}
              </p>
              <button className={btnStyles}>GARANTA SEU KIT</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-10">
          <h2 className="md:text-[40px] text-[30px] font-black w-full text-center">
            3. O que eles ganham com a Parte TRÊS
          </h2>
          <div className="flex gap-6 md:flex-row flex-col-reverse">
            <div className="w-full">
              <p className="md:mb-14 mb-5 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Libero volutpat sed cras ornare. Lectus vestibulum{" "}
              </p>
              <button className={btnStyles}>GARANTA SEU KIT</button>
            </div>
            <div className="w-full">
              <img
                src="/lp-leads/image.png"
                alt=""
                className="object-cover h-60 rounded"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center gap-10 mb-20">
          <h2 className="md:text-[40px] text-[30px] font-black w-full text-center max-w-3xl capitalize">
            Promova sua oferta premium que é o próximo passo lógico depois que
            eles assistiram a este treinamento
          </h2>
          <button className={btnStyles}>GARANTA SEU KIT</button>
        </div>
      </section>
    </main>
  );
}
