import { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";



const ReviewCard = () => {
   
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("../reviewData.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className="mt-20">
           
                <h2 className="text-2xl font-semibold text-center">Feedback Section</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            data.map((detailsData,index) => <ReviewDetails key={index} detailsData={detailsData}></ReviewDetails>)
          }
          </div>
         
        </div>
    );
};

export default ReviewCard;