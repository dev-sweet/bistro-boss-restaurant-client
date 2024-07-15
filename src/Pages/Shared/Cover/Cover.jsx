import { Parallax } from "react-parallax";
// import img from "../../../assets/menu/menu-bg.png";
const Cover = ({ img, title, subtitle, mt }) => {
  return (
    <section>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          style={{ marginTop: `${mt + "px"}` }}
          className="hero min-h-[600px] p-28"
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center min-w-3/4 mt-10">
            <div className="flex items-center justify-center min-h-full">
              <div className="text-gray-100 ">
                <h3 className="text-5xl font-bold uppercase">{title}</h3>
                <p className="mt-5 text-xl uppercase">{subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Cover;
