import { IMG_CDN_URL } from "../config";

export const RestrauntCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {

    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="logo" />
            <h2>{name}</h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{lastMileTravelString} minutes</h4> {/*assigning data to jsx*/}
        </div>
    )
}