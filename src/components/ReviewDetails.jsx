

const ReviewDetails = ({ detailsData }) => {
    const { name, profilePic, review, rating } = detailsData;
    return (
        <div className=" p-5 space-y-3  rounded-md shadow-md hover:shadow-lg hover:scale-105 transform transition-all duration-300 mt-8">
            <img className="w-20 h-20 rounded-full" src={profilePic} alt="" />
            <p className="text-sm font-medium text-gray-500">{review}</p>
            <h4 className="font-semibold">{name}</h4>
            <div className="flex items-center gap-3 "><span><div className="rating rating-sm">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            </div></span>{rating}</div>


        </div>
    );
};

export default ReviewDetails;