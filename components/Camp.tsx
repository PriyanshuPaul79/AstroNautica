import {PEOPLE_URL} from "@/constanst/Index";
import { url } from "inspector";
import Image from "next/image";


interface CampProps {
    backgroundImage  : string;
    mainText : string;
    secText : string;
    people : string;
    width?: number; 
    height?: number;
}

const Campsite = ({mainText, backgroundImage, secText, people,  width = 52, height = 52 } : CampProps) => {
    return (
        <div
            className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl `}
            style={{backgroundImage : `url(${backgroundImage}) `}}>
            <div
                className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4 ">
                    <div className="rounded-full bg-green-50 p-4 ">
                        <Image src='/folded-map.svg' alt='map' width={28} height={28}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white">{mainText}</h4>
                        <p className="regular-14 text-white">{secText}</p>
                    </div>
                </div>

                <div className="flexCenter gap-6">
                    <span className="flex -space-x-4 overflow-hidden ">{PEOPLE_URL.map((url) => (
                      <Image
                      src={url}
                      key={url}
                      alt="person"
                      width={52}
                      height={52}
                      className="inline-block h-10 w-10 rounded-full"/>
                    ))}
                    </span>

                    <p className="bold-16 md:bold-20 text-white">{people}</p>
                </div>
            </div>
        </div>
    )
}

const Camp = () => {
    return (
      <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ">
      <div className=" hide-scrollbar object-left flex h-[340px] w-[100%] items-start justify-start gap-8 overflow-x-scroll lg:h-[400px] xl:h-[640px]">

                <Campsite
                    backgroundImage="/img-1.png"
                    mainText={"Space"}
                    secText={"Endless journey"}
                    people={"40+ joined"}
                    />
                <Campsite
                    backgroundImage="/img-2.png"
                    mainText={"Jupiter"}
                    secText={" Colossal giant of our solar system "}
                    people={"60+ joined"}/>
                 <Campsite
                    backgroundImage='/img-3.png'
                    mainText={"Venus"}
                    secText={"Earth's Twin"}
                    people={"30+ joined"}/>
                 <Campsite
                    backgroundImage="/img-4.png"
                    mainText={"Our Stations "}
                    secText={"Highly Scientific"}
                    people={"90+ joined"}/>

            </div>

            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Unleash </strong>your inner astronaut
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Leave the ordinary behind and embrace the extraordinary feel the thrill of zero gravity and marvel at the wonders of the cosmos on a personalized space odyssey
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
        </section>
    )
}

export default Camp
