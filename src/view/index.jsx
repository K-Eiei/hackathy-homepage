import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Paragraph from "../components/paragraph";
import Container from "../components/container";

export default function HomePage() {
  return (
    <Layout>
      <Container>
        <div className="w-auto h-[50px] mb-6 bg-card rounded-lg flex  justify-center items-center">
          <span className="text-center text-cta-text text-sm  md:text-base">
            {"Hello, I'm an indie app developer based in Thailand!"}
          </span>
        </div>

        <div className="w-full h-auto flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start">
          <div className="w-auto h-auto flex flex-col">
            <div className="text-3xl md:text-4xl font-bold text-cta-text">
              Kongwarit Utapao
            </div>
            <p className="text-cta-text">Digital Craftsman ( Developer )</p>
          </div>
          {/* <div className="w-[100px] h-[100px] bg-white"></div> */}
          <div className="w-[100px] h-[100px] mt-4 md:mt-0 rounded-full bg-white border-2 border-white overflow-hidden flex justify-center items-center">
            <img
              src="public/images/duck-icon.png"
              alt="Profile image"
              width={100}
              height={100}
              // className=" md:mt-0 p-1  "
            />
          </div>
        </div>

        <Section>
          <div className="w-full md:w-full text-cta-text">
            <div className="my-3 text-xl font-bold underline underline-offset-[6px] decoration-4 decoration-cta-underline">
              Work
            </div>
            <Paragraph>
              {/* <div className="w-full text-justify indent-4 hyphens-auto"> */}
              Takuya is a freelance and a full-stack developer based in Osaka
              with a passion for building digital services/stuff he wants. He
              has a knack for all things launching products, from planning and
              designing all the way to solving real-life problems with code.
              When not online, he loves hanging out with his camera. Currently,
              he is living off of his own product called.
              {/* </div> */}
            </Paragraph>
          </div>
          <div className="w-full h-auto flex justify-center items-center">
            <Link
              to="/works"
              className="w-[7.225rem]_ h-[2.5rem] my-4 px-4 bg-cta-btn hover:bg-teal-500 duration-200 flex justify-between items-center rounded-lg text-base tracking-wide font-medium text-cta-btn-text"
              type="text"
              preventScrollReset={false}
            >
              My portfolio
              {/* <span>{">"}</span> */}
              <RiArrowRightSLine className="ms-2" />
            </Link>
          </div>
        </Section>
        <div className="text-cta-text">test</div>
        <div className="h-[30rem]" />
      </Container>
    </Layout>
  );
}
