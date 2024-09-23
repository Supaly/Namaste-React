import ResContainer from "./ResContainer";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);
    return (
      <div className="body">
        <div className="search">
          <button onClick={() => {
            const filtered_data = listOfRestaurent.filter((res) => res.info.avgRating > 4.2)
            setListOfRestaurent(filtered_data);
          }}
          > filter Top 5 Restaurents </button>
        </div>
        <div className="Res-container">
          {/* <ResContainer name='KFC'/> */}
          {listOfRestaurent.map((restaurent) =>
          <ResContainer key={restaurent.info.id} resData={restaurent}/>
        )
        }
        </div>
      </div> 
    );
  }

  export default Body;