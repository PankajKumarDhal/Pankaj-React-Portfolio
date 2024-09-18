import ECommerce from "../images/ECommerce.png";
import WeatherApp from "../images/weatherapp.png";
import Cripto from "../images/Cripto.png";
import ShopFusion from "../images/ShopFusion.png";
import MSE from "../images/MSE.png";
import PARKER from "../images/PARKER.png";
import Quotes from "../images/quotes.png"
const portfolio = [
  {
    Projectname: "E-Commerce Website",
    tech: "React js",
    imageUrl: ECommerce,
    des: "ShopFusion using Reactjs and zustand, API Using FakeStoreApi",
    Demo: "e-commerce-website-two-lake.vercel.app",
    github: "https://github.com/PankajKumarDhal/E-Commerce-website",
  },
  {
    Projectname: "Cryptoview",
    tech: "HTML, CSS, Java Script, Tailwind,React js",
    imageUrl: Cripto,
    des: "ntegrated cryptocurrency data APIs (such as CoinGecko or CoinMarketCap) to fetch and display current prices,historical data, and market trends and display real-time cryptocurrency values.",
    Demo: "crypto-view-gilt.vercel.app",
    github: "https://github.com/PankajKumarDhal/Crypto-View",
  },
  {
    Projectname: "Multi Search Engine",
    tech: "HTML, CSS, Java Script, Tailwind",
    imageUrl: MSE,
    des: "mplemented a dynamic selection interface allowing users to choose their preferred search engine with a single click, enhancing user convenience and accessibility",
    Demo: "multi-search-engine-mse.vercel.app",
    github: "https://github.com/PankajKumarDhal/Multi-Search-Engine--MSE-",
  },
  {
    Projectname: "PARKER-PEN",
    tech: "HTML, CSS, Java Script, Tailwind",
    imageUrl: PARKER,
    des: " Featuring multiple sections such as Home, About Us, Menu, Collection, Pen Gifts, ink and Refills, Writing Types,World of Parker, Contact, Pen Care Guides, enhancing user experience and engagement.",
    Demo: "parker-pen.vercel.app",
    github: "https://github.com/PankajKumarDhal/PARKER-PEN",
  },
  //  {
  //   Projectname: "Weather APP",
  //   tech: "Reactjs",
  //   imageUrl: WeatherApp,
  //   des: "Weather App using Reactjs using Axios, API Using OpenWeatherMap",
  //   Demo: "https://weatherappyesg.netlify.app",
  //   github: "https://github.com/Sadanandgadwal/Weatherapp",
  // },
  // {
  //   Projectname: "ShopFusion",
  //   tech: "Reactjs",
  //   imageUrl: ShopFusion,
  //   des: "ShopFusion using Reactjs and zustand, API Using FakeStoreApi",
  //   Demo: "https://storefusion.netlify.app/",
  //   github: "https://github.com/Sadanandgadwal/Ecom",
  // },
  // {
  //   Projectname: "Quotes",
  //   tech: "Reactjs",
  //   imageUrl: Quotes,
  //   des: "Quotes using Reactjs with axios, API Using API Ninjas",
  //   Demo: "https://quotes-delta-blond.vercel.app/",
  //   github: "https://github.com/Sadanandgadwal/Quotes",
  // },
];
export default function Portfolio() {
  return (
    <div className="bg-gray-900" id="Portfolio">
      <main className="relative isolate">
        {/* Header section */}
        <div className="px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-2xl pt-14 text-center sm:pt-10">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Portfolio
            </h2>
          </div>
        </div>
        <div className="relative isolate -z-10 mt-32 sm:mt-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
            >
              {portfolio.map((project) => (
                <li key={project.Projectname}>
                  <img
                    className="aspect-[14/13] w-full rounded-2xl object-contain border cursor-pointer  border-gray-600"
                    src={project.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                    {project.Projectname}
                  </h3>
                  <p className="text-base leading-7 text-gray-300">
                    {project.tech}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {project.des}
                  </p>
                  <span
                    className="text-sm leading-6 text-gray-50 hover:text-gray-400 cursor-pointer "
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.Demo, "_blank", "noreferrer");
                    }}
                  >
                    <button className=" mx-auto text-white bg-indigo-600 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      View
                    </button>
                  </span>{" "}
                  <span
                    className="text-sm leading-6 text-gray-50 hover:text-gray-400 cursor-pointer "
                    onClick={(e) => {
                      e.preventDefault(); 
                      window.open(project.github, "_blank", "noreferrer");
                    }}
                  >
                    <button className=" mx-auto text-white bg-indigo-600 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Github
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
