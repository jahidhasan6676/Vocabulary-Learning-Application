

const Faqs = () => {
    return (
        <div className="mt-20 space-y-2">
            <div className="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">Is this platform free to use?</div>
                <div className="collapse-content">
                    <p>Yes! All beginner lessons are free, and advanced features are available with a premium plan.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What languages are available?</div>
                <div className="collapse-content">
                    <p>You can learn Japanese.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">How long does it take to see progress?</div>
                <div className="collapse-content">
                    <p>With regular practice, you can see noticeable progress within a month.</p>
                </div>
            </div>
        </div>
    );
};

export default Faqs;