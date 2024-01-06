

const Review = ({ review }) => {
    const { comment, photo, email, name, date, time } = review;
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img className="w-12 h-12 rounded-full" src={photo} alt="" />
                    <div>
                        <h2>{name}</h2>
                        <p className="text-sm">{email}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>
            <p className="my-4">{comment}</p>
        </div>
    );
};

export default Review;