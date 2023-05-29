import React from 'react'
import Image from 'next/image'
import aboutUsIMg from '../public/Images/aboutIntro.jpg'

const about = () => {
  return (
    <div className="pt-[80px] w-screen h-full">
      {/* Intro Section */}
      <div className=" p-10 justify-center items-center flex flex-col w-full bg-white md:flex-row h-full">
        {/* text */}
        <div className="text-justify px-3 m-2 basis-[70%]">
          <h2 className="uppercase text-3xl mb-2">Dailekhi Sewa Samaj</h2>
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
            ipsam laudantium, aut ab soluta impedit non, neque est autem? Vitae
            fugit libero ducimus quia deleniti, inventore minus porro
            perspiciatis, nesciunt soluta dolor ea rem fugiat architecto iusto
            voluptas reiciendis numquam impedit consectetur quo! Praesentium
            fugiat sed possimus, numquam aut adipisci est nam, voluptate
            cupiditate vel quaerat iusto veniam deleniti incidunt tenetur eum!
            Accusantium in labore atque perspiciatis eveniet eligendi
            praesentium veritatis quis illo laudantium sunt, non cupiditate.
            Ipsam obcaecati nam necessitatibus consectetur odit, cumque ullam
            molestias, inventore cum corrupti sunt officiis velit veritatis nisi
            error porro minima voluptas quis accusantium dignissimos, dolorem
            fuga! Esse voluptatem laudantium aspernatur, eius rem porro nisi
            quas placeat modi nam cumque a?
          </p>
        </div>
        {/* Photo */}
        <div className="px-3 m-2 basis-[30%]">
          <Image
            src={aboutUsIMg}
            alt="aboutUs page Intro Image"
            width={1250}
            height={1200}
          />
        </div>
      </div>
      {/* Objective Section */}
      <div className="p-10 m-2 justify-center items-center flex-col h-full">
        <div className="text-justify p-3 m-2 basis-[70%] bg-[#b4b7bc]">
          <h2 className="uppercase py-5 text-3xl mb-2">Objectives of Dailekhi Sewa Samaj</h2>
          <div className="text-justify text-lg pb-5">
            <ul className="pl-5 space-y-3 list-disc">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
                distinctio.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                dolorem ipsa aliquam sunt alias minus ut cupiditate excepturi
                soluta odio. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Impedit reiciendis possimus quo molestiae atque, dolorum
                culpa dolorem molestias porro amet?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                accusantium minus aspernatur magnam provident aut?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                numquam aut porro nam doloremque aperiam itaque quas quis quos
                earum.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about