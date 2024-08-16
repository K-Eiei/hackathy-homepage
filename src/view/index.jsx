import React from "react";
import { useColorMode } from "../components/theme";
import Layout from "../components/layouts/article";
import Section from "../components/section";

export default function HomePage() {
  const { toggleColorMode } = useColorMode();

  return (
    <Layout >
      <div className="w-full h-full flex justify-center mt-10"  >
        <div className="w-[480px] h-auto flex flex-col items-center ">

          <div className="w-[85%] md:w-full h-[50px] mb-2 bg-card rounded-lg flex  justify-center items-center" >
            <span className="text-center text-cta-text text-sm  md:text-base">
              {"Hello, I'm an indie app developer based in Thailand!"}
            </span>
          </div>

          <div className="text-3xl font-bold text-cta-text" >
            Kongwarit Utapao
          </div>

          <button
            className="w-[200px] h-[40px] mt-4 bg-cta-btn rounded-full font-bold text-cta-btn-text"
            type="text"
            onClick={() => toggleColorMode()}
          >
            Click
          </button>

          <Section>
            <div className="w-[85%] md:w-full text-cta-text">
              <div className="text-xl font-bold underline underline-offset-2">
                Work
              </div>
              <div className="">
                Takuya is a freelance and a full-stack developer based in Osaka with a
                passion for building digital services/stuff he wants. He has a knack
                for all things launching products, from planning and designing all the
                way to solving real-life problems with code. When not online, he loves
                hanging out with his camera. Currently, he is living off of his own
                product called{' '}
              </div>
            </div>
          </Section>

          <div className="w-1 h-[70rem] bg-cta-text" />

        </div>
      </div>
    </Layout>
  );
}
