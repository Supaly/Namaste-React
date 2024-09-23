import { CDN_URL } from "../utils/constants";

const ResContainer = (props) => {
    const {resData} = props;
    const {
      name,
      cloudinaryImageId,
      cuisines,
      costForTwo,
      avgRating
    } = resData?.info
    return (
      <div className="resCard">
        <img alt="logo" src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{costForTwo}</h3>
        <h3>Rating {avgRating}</h3>
      </div>
    )
  }

  export default ResContainer;