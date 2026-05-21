import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { BioSection, BioYear } from "../components/bio";
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

        <div className="w-full h-auto flex flex-col justify-start items-start md:flex-row md:justify-between md:items-start">
          <div className="w-auto h-auto flex flex-col">
            <div className="text-3xl md:text-4xl font-bold text-cta-text">
              Kongwarit Utapao
            </div>
            <p className="text-cta-text">Digital Craftsman ( Developer )</p>
          </div>
          <div className="w-full md:w-auto h-auto flex md:flex-none justify-center items-center">
            <div className="w-[100px] h-[100px] mt-4 md:mt-0 rounded-full bg-white border-2 border-white overflow-hidden flex justify-center items-center">
              <img
                src="../images/duck-icon.png"
                alt="Profile image"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <Section>
          <div className="w-full md:w-full text-cta-text">
            <div className="my-3 text-xl font-bold underline underline-offset-[6px] decoration-4 decoration-cta-underline">
              Work
            </div>
            <Paragraph>
              👋Hello, I'm Kongwait Utapao, a Full-Stack Developer. I'm passionate about coding because it
              gives me the fulfillment of creating something new. ✨ I also love diving into other people's code.
              I'm always curious to see how they tackle problems and bring ideas to life! 🔍🤯 When I am not coding,
              I enjoy reading books and listening to music.
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
              <RiArrowRightSLine className="ms-2" />
            </Link>
          </div>
        </Section>

        <Section>
          <div className="w-full md:w-full text-cta-text">
            <div className="my-3 text-xl font-bold underline underline-offset-[6px] decoration-4 decoration-cta-underline">
              Bio
            </div>

            <BioSection>
              <BioYear>2024</BioYear>

              Completed my Bachelor&apos;s degree in Computer Engineering and Artificial Intelligence at Mahanakorn University of Technology.

            </BioSection>

            <BioSection>
              <BioYear>2024</BioYear>

              Web Developer Intern at GROUP MAKER COMPANY LIMITED.
              <br />
              <ul className="list-disc list-outside text-sm opacity-80 mt-1 space-y-1 indent-0 ml-6">
                <li>Designed and developed dynamic websites and cross-platform desktop applications using Electron.js
                  for the frontend and Node.js for the backend.</li>
                <li>Architected and managed MySQL database schemas.</li>
              </ul>

            </BioSection>

            <BioSection>
              <BioYear>2025</BioYear>

              Robotics Software Engineer at GROUP MAKER COMPANY LIMITED.
              <br />
              <ul className="list-disc list-outside text-sm opacity-80 mt-1 space-y-1 indent-0 ml-6">
                <li>Robot Interface & IoT Solutions.</li>
                <li>Developed a comprehensive Robot Control Application to interface directly with the robot&apos;s backend.</li>
                <li>Built control software for a &quot;Remote IO Module Box&quot; to manage I/O signals via Socket communication.</li>
                <li>Programmed ROS2 modules for &apos;Area Detect&apos; to enhance autonomous navigation safety.</li>
              </ul>

            </BioSection>

          </div>
        </Section>

        <Section >
          <div className="w-full md:w-full text-cta-text">
            <div className="my-3 text-xl font-bold underline underline-offset-[6px] decoration-4 decoration-cta-underline">
              I ♥
            </div>
            <Paragraph>
              Art🎨 Music🎵 Reading books📖 Movies🎬
            </Paragraph>
          </div>
        </Section>

      </Container>
    </Layout >
  );
}
