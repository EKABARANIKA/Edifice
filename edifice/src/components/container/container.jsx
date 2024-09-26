import { Admin, Comments, Arrow , Dot} from "../icons/icons";
import "./container.css";
export default function Container(props){
    return(
        <div className="container">
            <img src={props.img} alt="" />
           <div className="container-content">
             <div className="box">
                <div className="box-content">
                 <Admin />
                 <p> By: Admin </p>
                </div>
                <div className="box-content">
                  <Dot />
                </div>
                <div className="box-content">
                  <Comments />
                  <p> 83 Comments </p>
                </div>
             </div>
             <h3>Wins 2023 good design London Award</h3>
             <div className="box-content anchor">
                <a href="/">Read More</a>
                <Arrow />
            </div>
           </div>
        </div>
    )
}