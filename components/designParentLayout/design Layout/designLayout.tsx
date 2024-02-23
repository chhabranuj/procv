import { useState } from "react";
import { useRouter } from "next/router";
import designStyle from "./designLayout.module.sass";
import DesignCard from "../designCardLayout/designCardLayout";
import LoaderLayout from "@/components/loaderLayout/loaderLayout";

const Design = () => {
  const data = [
    {
      name: "SparkFrame - Green",
      price: "525",
      rating: "4.4",
      link: "https://sparkframegreen-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1H_MhZsKXXHNLEz65PssXFaWRiY9G3064/view?usp=sharing",
    },
    {
      name: "VibeCard - Green",
      price: "600",
      rating: "4.6",
      link: "https://vibecardgreen-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1ojCBtjH5rDAFb2udJ5t_uV2NLHLNFxgd/view?usp=sharing",
    },
    {
      name: "FreshCanvas - Standard",
      price: "550",
      rating: "4.5",
      link: "https://chhabranuj.netlify.app/",
      image:
        "https://drive.google.com/file/d/1JVbBIcYJnbOinumIDeOO-pvkobq0DggF/view?usp=sharing",
    },
    {
      name: "SparkFrame - Blue",
      price: "575",
      rating: "4.6",
      link: "https://sparkframeblue-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1d5_mq2Je2jXZhtL4VMurd0Z_Qbi_SpJP/view?usp=sharing",
    },
    {
      name: "VibeCard - Red",
      price: "700",
      rating: "4.8",
      link: "https://vibecardred-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1YpD7fPyBdqN6pmzQXUPyV_tx9rO46pmH/view?usp=sharing",
    },
    {
      name: "FreshCanvas - Light",
      price: "650",
      rating: "4.7",
      link: "https://freshcanvaslight-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1JVHSoIlrSPbY-g70zdmszU932spac8dq/view?usp=sharing",
    },
    {
      name: "ClarityVue - Dark",
      price: "600",
      rating: "4.6",
      link: "https://clarityvuedark-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1ma6J_fK77_t0kVNpnBbeR71uYTJoi0Ts/view?usp=sharing",
    },
    {
      name: "PrimeProfile - Standard",
      price: "550",
      rating: "4.5",
      link: "https://primeprofile-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1WKucyg_BZGCx5NEr7YurFMGgFqJsXraq/view?usp=sharing",
    },
    {
      name: "ClarityVue - Light",
      price: "500",
      rating: "4.3",
      link: "https://clarityvue-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/11SkvBFPk5d6IhR5ubpHmwAnOeyr9A-1X/view?usp=sharing",
    },
    {
      name: "SparkFrame - Purple",
      price: "550",
      rating: "4.5",
      link: "https://sparkframepurple-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1UfyxG2FlcN2uqT6jLIN-nNyVZKZl-_6q/view?usp=sharing",
    },
    {
      name: "VibeCard - Blue",
      price: "650",
      rating: "4.7",
      link: "https://vibecardblue-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1eFngUqovDNZKXTNsaIHtMxQD8I9eR9ra/view?usp=sharing",
    },
    // {
    //   name: "FreshCanvas - Dark",
    //   price: "700",
    //   rating: "4.8",
    //   link: "https://vibecardred-procv.netlify.app/",
    //   image:
    //     "https://drive.google.com/file/d/1wcrRo5POVHXRAkgj1hUXApa9ui3OhEsC/view?usp=sharing",
    // },
    {
      name: "FreshCanvas - Gold",
      price: "800",
      rating: "4.9",
      link: "https://freshcanvasgold-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1DC4rBFnWKwNc4OjceWAj_znuD_FMPreX/view?usp=sharing",
    },
    {
      name: "SparkFrame - Red",
      price: "600",
      rating: "4.7",
      link: "https://sparkframe-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1LSOCPqAAuxzFuqEOB3aLEnbL2FznEOOh/view?usp=sharing",
    },
    {
      name: "VibeCard - Orange",
      price: "750",
      rating: "4.9",
      link: "https://vibecard-procv.netlify.app/",
      image:
        "https://drive.google.com/file/d/1SXzBQVSsfIOvbc9s781eillje0JN0slV/view?usp=sharing",
    },
    // {
    //   name: "FreshCanvas - Gold",
    //   price: "800",
    //   rating: "4.9",
    //   link: "https://freshcanvasgold-procv.netlify.app/",
    //   image:
    //     "https://drive.google.com/file/d/1DC4rBFnWKwNc4OjceWAj_znuD_FMPreX/view?usp=sharing",
    // },
  ];
  const router = useRouter();
  const [loader, setLoader] = useState<boolean>(false);

  const naviagteToContact = (title: string) => {
    setLoader(true);
    router.push({ pathname: "/contact", query: { name: title } }, "/contact");
    setInterval(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <div className={designStyle.designParent}>
      {data.map((item, index) => {
        return (
          <DesignCard
            data={item}
            key={index}
            toTheContact={naviagteToContact}
          />
        );
      })}

      {loader && <LoaderLayout />}
    </div>
  );
};

export default Design;
