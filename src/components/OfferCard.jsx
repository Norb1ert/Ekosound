/* eslint-disable react/prop-types */
function OfferCard({ imagePath, alternative, title, description, date }) {
  return (
    <div className="bg-white flex shadow-md rounded-xl overflow-hidden max-w-lg md:flex-col hover:shadow-xl transition-transform duration-200 hover:-translate-y-1">
      <div>
        <img
          src={imagePath}
          alt={alternative}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="px-4 pt-4">
        <h3 className="text-xl font-semibold mb-2 text-orange-500 text-left md:text-2xl lg:text-3xl">
          {title}
        </h3>
        <p className=" text-left text-slate-600 text-md md:text-lg ">
          {description}
        </p>
        <p className="text-left text-orange-500 pt-4 text-lg md:text-xl ">
          {date}
        </p>
      </div>
    </div>
  );
}

export default OfferCard;
