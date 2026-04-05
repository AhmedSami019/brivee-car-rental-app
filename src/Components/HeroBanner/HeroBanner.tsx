
const HeroBanner = () => {
  return (
    <div className="hero bg-[#5937E0] rounded-2xl py-5 grid grid-cols-1 md:grid-cols-2 gap-10 p-10 items-center">
      <div className="text-white space-y-6">
        <h2 className="text-5xl font-bold">Experience the road like never before</h2>
        <p className="font-light md:w-90">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
        <button className="btn btn-warning text-white rounded-xl">View all cards</button>
      </div>
      <div></div>
    </div>
  );
};

export default HeroBanner;
