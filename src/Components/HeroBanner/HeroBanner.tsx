import bannerCar from "../../assets/all-car/banner-car.png";

const HeroBanner = () => {
  return (
    <div className="bg-[#5937E0] rounded-2xl grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 px-10 py-20">
      <section className="text-white space-y-6">
        <h2 className="text-5xl font-bold">
          Experience the road like never before
        </h2>
        <p className="font-light md:w-90">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper
        </p>
        <button className="btn btn-warning text-white rounded-xl">
          View all cards
        </button>
      </section>
      <section className="">
        <div className="flex justify-center md:justify-end md:mr-16">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 z-10">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>

          <div className="hidden md:block absolute w-lg right-90 top-64">
          <img src={bannerCar} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
