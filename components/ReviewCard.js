import Image from "next/image";

const ReviewCard = ({ imageUrl, text, info, name }) => {

    return (
        <div className="w-96 h-64 rounded-2xl shadow-lg flex flex-col space-y-5 p-5">
            <div className="flex justify-start space-x-4 items-center">
                <img src={imageUrl} width={5} className='w-8 h-8 rounded-full bg-gray-50' />

                <div className="flex flex-col">

                    <div>{name}</div>
                    <div className="text-gray-500">{info}</div>

                </div>

            </div>
            <div>{text}</div>

        </div>
    );
}

export default ReviewCard