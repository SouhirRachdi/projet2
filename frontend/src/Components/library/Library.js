import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Library = ({ el }) => {
    const user = useSelector((state) => state.userReducer.currentUser);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <video width={320} height={240} controls>
          <source src={el.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="card-body">
          <h5 className="card-title">{el.title}</h5>
          <p className="card-text"></p>
          {user&&user.role=="prof"?
          <a href="#" className="btn btn-primary">
            Delete
          </a>:null}
        </div>
      </div>
    </div>
  );
};

export default Library;
