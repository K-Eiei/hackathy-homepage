import React from "react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Link } from "react-router-dom";
import Paragraph from "../components/paragraph";
import Container from "../components/container";

export default function HomePage() {

  return (
    <Layout>
      <Container>
        <div className="w-auto h-[50px] mb-2 bg-card rounded-lg flex  justify-center items-center" >
          <span className="text-center text-cta-text text-sm  md:text-base">
            {"Hello, I'm an indie app developer based in Thailand!"}
          </span>
        </div>

        <div className="text-3xl font-bold text-cta-text" >
          Kongwarit Utapao
        </div>

        <Link to="/works" className="w-[200px] h-[40px] mt-4 px-7 bg-cta-btn hover:bg-teal-700 duration-200 flex justify-between items-center rounded-full text-lg font-semibold text-cta-btn-text"
          type="text"
          preventScrollReset={false}
        >
          My portfolio
          <span>{">"}</span>
        </Link>

        <Section>
          <div className="w-full md:w-full text-cta-text">
            <div className="text-xl font-bold underline underline-offset-2">
              Work
            </div>
            <Paragraph>
              {/* <div className="w-full text-justify indent-4 hyphens-auto"> */}
              Takuya is a freelance and a full-stack developer based in Osaka with a
              passion for building digital services/stuff he wants. He has a knack
              for all things launching products, from planning and designing all the
              way to solving real-life problems with code. When not online, he loves
              hanging out with his camera. Currently, he is living off of his own
              product called.
              {/* </div> */}
            </Paragraph>
          </div>
        </Section>

        <div className="h-[30rem]" />
      </Container>
    </Layout>
  );
}
