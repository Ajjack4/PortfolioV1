import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const ViewCount = () => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const getViewCount = async () => {
      const docRef = doc(db, "websiteData", "viewCount");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setViewCount(docSnap.data().count);
      } else {
        console.log("No such document!");
      }
    };

    getViewCount();
  }, []);

  return (
    <div className="flex w-full justify-center">
      

      <button
  className="cursor-pointer bg-secondary-600 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none text-body-1 2xl:text-4xl p-10"
>
Number Of Visits: {viewCount}
 
</button>
    </div>
  );
};

export default ViewCount;
