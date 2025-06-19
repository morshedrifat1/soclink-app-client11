import { Fade } from "react-awesome-reveal";
const EventGallery = ({galleryImg}) => {
  return (
    <div className="max-w-[1420px] mx-auto px-5 pb-20">
      <Fade>
        <div className="space-y-3">
          <p className="text-center text-sm font-semibold border border-secondary rounded-full w-fit mx-auto px-5 bg-subHeading text-heading">
            Event Gallery
          </p>

          <h1 className="text-center text-heading text-2xl sm:text-3xl md:text-4xl font-bold">
            See Our Community in Action
          </h1>
          <p className="text-center text-base md:text-lg font-normal text-base-content max-w-150 mx-auto">
            Witness the incredible impact our volunteers are making across
            different communities and events.
          </p>
        </div>
      </Fade>
      <Fade>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
          {galleryImg.map((img)=><div className="shadow rounded-lg bg-base-200 group transition relative cursor-pointer">
            <img
              src={img.imgUrl}
              className="w-full h-50 object-cover group-hover:scale-[1.01] transition-transform duration-200 rounded-lg relative"
              alt=""
            />
            <button className="backdrop-blur-2xl px-2 py-0.5 rounded-full bg-subHeading text-navlink text-[12px] border border-white backdrop-saturate-150 absolute top-2 right-2">
              {img.eventCategory}
            </button>
          </div>)}
        </div>
      </Fade>
    </div>
  );
};

export default EventGallery;
