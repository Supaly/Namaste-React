import { useEffect, useState } from "react";
import {CDN_MENU} from "../utils/constants"
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {
    const [menuInfo,setMenuInfo] = useState(null);
    const {resId} = useParams();
    useEffect( () => {
        fetchMenu();
    },[])


    const fetchMenu = async () => {
        const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const menuJson = await menuData.json();
        console.log(menuJson); 
        setMenuInfo(menuJson.data);
    };

    if(menuInfo===null) return <Shimmer />

    const { name,cuisines,costForTwoMessage,avgRating } = menuInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(itemCards)
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h3>Rating *{avgRating}</h3>
            <ul>
                {itemCards.map((item) => (
                    <li key = {item.card.info.id}>
                    {item.card.info.name} - Rs{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}
export default RestaurentMenu;