import Carousel from "@/components/Carousel";
import HighlightsItems from "@/components/HighlightsItems";
import Image from "next/image";
import aboutUsIMg from "../public/Images/aboutIntro.jpg";
import missionImg from "../public/Images/missionHighlight.png";
import visionImg from "../public/Images/visionHighlight.png";
import normsImg from "../public/Images/normsHighlight.png";
import goalsImg from "../public/Images/goalsHighlight.png";
import { onGoalHighlight, onMissionHighlight, onNormsHighlight, onVisionHighlight } from "@/components/Paragraph";


export default function Home() {
  return (
    <div className="pt-[80px] w-screen h-full">
      {/* Introduction Home */}
      <div className="flex flex-col w-full h-full p-10 justify-center items-center bg-white md:flex-row">
        <div className="px-3 m-2 basis-[30%]">
          <Carousel />
        </div>
        {/* Introduction section*/}
        <div className="text-justify px-3 m-2 basis-[70%]">
          <h2 className="uppercase p-1 text-3xl mb-2 bg-slate-300">
            Introduction
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            commodi maxime doloribus dicta similique expedita culpa voluptatum
            atque, quam labore ea deleniti velit quis nihil accusamus
            reprehenderit mollitia sapiente nisi unde. Quis harum, voluptatum
            quisquam labore aliquid dolor eveniet nulla accusantium
            reprehenderit, eos blanditiis quod suscipit odit delectus voluptate
            fugit rem incidunt dignissimos nesciunt eaque, doloribus rerum amet.
            Deleniti, alias! Molestias est molestiae debitis sunt iste
            exercitationem perspiciatis nulla eveniet aut dolorum maxime illo
            aspernatur ab aliquid nesciunt eos, voluptatem iusto eaque ducimus
            inventore. Blanditiis accusamus earum et repellat sapiente, possimus
            ipsam
          </p>
        </div>
      </div>
      {/* HighLights */}
      <div className="p-10 justify-center bg-[#b4b7bc] items-center flex-col h-full">
        <div className="text-justify p-3 m-2">
          <h2 className="uppercase text-3xl p-1 mb-2">
            HighLights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-content-stretch ">
            <div>
              <HighlightsItems
                highlightImage={missionImg}
                highlightName={"Mission"}
                highlighDescript={onMissionHighlight}
              />
            </div>
            <div>
              <HighlightsItems
                highlightImage={visionImg}
                highlightName={"vision"}
                highlighDescript={onVisionHighlight}
              />
            </div>
            <div>
              <HighlightsItems
                highlightImage={normsImg}
                highlightName={"Norms and values"}
                highlighDescript={onNormsHighlight}
              />
            </div>
            <div>
              <HighlightsItems
                highlightImage={goalsImg}
                highlightName={"goals"}
                highlighDescript={onGoalHighlight}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Achievements */}
      <div className="flex flex-col w-full h-full p-10 justify-center items-center bg-white md:flex-row">
        {/* Introduction section*/}
        <div className="text-justify px-3 m-2 basis-[70%]">
          <h2 className="uppercase p-1 text-3xl mb-2 bg-slate-300">
            Achievements
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            commodi maxime doloribus dicta similique expedita culpa voluptatum
            atque, quam labore ea deleniti velit quis nihil accusamus
            reprehenderit mollitia sapiente nisi unde. Quis harum, voluptatum
            quisquam labore aliquid dolor eveniet nulla accusantium
            reprehenderit, eos blanditiis quod suscipit odit delectus voluptate
            fugit rem incidunt dignissimos nesciunt eaque, doloribus rerum amet.
            Deleniti, alias! Molestias est molestiae debitis sunt iste
            exercitationem perspiciatis nulla eveniet aut dolorum maxime illo
            aspernatur ab aliquid nesciunt eos, voluptatem iusto eaque ducimus
            inventore. Blanditiis accusamus earum et repellat sapiente, possimus
            ipsam
          </p>
        </div>
        <div className="px-3 m-2 basis-[30%]">
          <Image
            src={aboutUsIMg}
            alt="aboutUs page Intro Image"
            width={1250}
            height={1200}
          />
        </div>
      </div>
      {/* Major Areas of Interventions */}
      <div>
      </div>
    </div>
  );
}
