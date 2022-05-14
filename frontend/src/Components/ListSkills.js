import React from "react";

import '../App.css';

import { useSelector } from "react-redux";

const ListSkills = () => {

  const user = useSelector((state) => state.userReducer.currentUser);
  return (
    <React.Fragment>
    {user.role == "student" ? ( <div className="x-card-layer dashboard-todo x-flex-column-h-any-v-start">
        <div className="dashboard-todo__title">
          <span>Last Achieved Skills</span>
        </div>
        <div className="dashboard-todo__body">
          <div className="dashboard-todo__body__no-data x-flex-h-center-v-center">
            <div className="dashboard-skills-achievements__body__content__skill">
              <a href="/tracks/3489fe7f-bdba-4764-bbe8-25883185b44d/nodes/9146cbf9-6f95-47a8-b10e-04432e6609a8">
                <span className="dashboard-skills-achievements__body__content__skill__name">
                  <span className="hide-long-text">Deployment P...</span>
                </span>
              </a>
              <div className="ant-progress ant-progress-line ant-progress-status-active ant-progress-show-info ant-progress-default">
                <div>
                  <div className="ant-progress-outer">
                    <div className="ant-progress-inner">
                      <div
                        className="ant-progress-bg"
                        style={{
                          width: "100%",
                          height: 6,
                          backgroundImage:
                            "linear-gradient(to right, rgb(96, 85, 202) 0%, rgb(41, 27, 185) 100%)",
                        }}
                      />
                    </div>
                  </div>
                  <span className="ant-progress-text" title="100%">
                    100%
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-skills-achievements__body__content__skill">
              <a href="/tracks/3489fe7f-bdba-4764-bbe8-25883185b44d/nodes/9146cbf9-6f95-47a8-b10e-04432e6609a8">
                <span className="dashboard-skills-achievements__body__content__skill__name">
                  <span className="hide-long-text">Deployment P...</span>
                </span>
              </a>
              <div className="ant-progress ant-progress-line ant-progress-status-active ant-progress-show-info ant-progress-default">
                <div>
                  <div className="ant-progress-outer">
                    <div className="ant-progress-inner">
                      <div
                        className="ant-progress-bg"
                        style={{
                          width: "100%",
                          height: 6,
                          backgroundImage:
                            "linear-gradient(to right, rgb(96, 85, 202) 0%, rgb(41, 27, 185) 100%)",
                        }}
                      />
                    </div>
                  </div>
                  <span className="ant-progress-text" title="100%">
                    100%
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-skills-achievements__body__content__skill">
              <a href="/tracks/3489fe7f-bdba-4764-bbe8-25883185b44d/nodes/9146cbf9-6f95-47a8-b10e-04432e6609a8">
                <span className="dashboard-skills-achievements__body__content__skill__name">
                  <span className="hide-long-text">Deployment P...</span>
                </span>
              </a>
              <div className="ant-progress ant-progress-line ant-progress-status-active ant-progress-show-info ant-progress-default">
                <div>
                  <div className="ant-progress-outer">
                    <div className="ant-progress-inner">
                      <div
                        className="ant-progress-bg"
                        style={{
                          width: "100%",
                          height: 6,
                          backgroundImage:
                            "linear-gradient(to right, rgb(96, 85, 202) 0%, rgb(41, 27, 185) 100%)",
                        }}
                      />
                    </div>
                  </div>
                  <span className="ant-progress-text" title="100%">
                    100%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
       ):( 
        null
        )}
        </React.Fragment>
    
  );
};

export default ListSkills;
