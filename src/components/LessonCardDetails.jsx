import { useNavigate } from "react-router-dom";


const LessonCardDetails = ({ lessonDetails }) => {
    const navigate = useNavigate();
    const { word, meaning,
        when_to_say, example, difficulty, pronunciation, part_of_speech } = lessonDetails;
    return (
        <div className={` rounded-md p-4 space-y-1 ${difficulty === "easy"
            ? "bg-green-100"
            : difficulty === "medium"
                ? "bg-yellow-100"
                : "bg-red-100"
            }`}>
            <h2 className="text-sm"><span className="font-bold text-sm">Word: </span> {word}</h2>
            <h2 className="text-sm"> <span className="font-bold text-sm">Meaning: </span> {meaning}</h2>
            <h2 className="text-sm"><span className="font-bold text-sm">Pronunciation: </span> {pronunciation}</h2>
            <h2 className="text-sm"><span className="font-bold text-sm">Part_of_speech: </span> {part_of_speech}</h2>
            <div className="text-center pt-4">
                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-accent text-sm text-white">When to say</button>
            </div>




            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box space-y-1">
                    {/* text */}
                    <h2 className="text-sm"><span className="font-bold text-sm">Word: </span> {word}</h2>
                    <h2 className="text-sm"> <span className="font-bold text-sm">Meaning: </span> {meaning}</h2>
                    <h2 className="text-sm"><span className="font-bold text-sm">When_to_say: </span> {when_to_say}</h2>
                    <h2 className="text-sm"><span className="font-bold text-sm">Example: </span> {example}</h2>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={()=> navigate("/learning")}  className="btn">Back To Lesson</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default LessonCardDetails;