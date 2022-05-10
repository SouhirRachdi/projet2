import React from "react";
import "../App.css";

const Entro = () => {
  return (
    <section className="vc_row wpb_row vc_row-fluid"  style={{marginLeft:400}}>
      <div className="maincontainer">
        <div className="row" style={{display:'flex',justifyContent: 'center'}}>
          <div className="wpb_column vc_column_container vc_col-sm-3">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper" />
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="vc_empty_space" style={{ height: 32,marginTop: 120}}>
                  <span className="vc_empty_space_inner" />
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h2 style={{ color: "#0d3f63", textAlign: "center" }}>
                      <strong>
                        <span className="colored-text">
                          <span className="last-color">Who are we </span>
                        </span>
                        <br/>
                         
                            <span style={{ color: "#F8D90F"}} >
                            learning platform
                            </span>
                          
                        
                      </strong>
                    </h2>
                  </div>
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <p style={{ textAlign: "center",color: "#FFFF" ,fontWeight: 600,width:300}}>
                      EduLearn is {" "}
                      <strong>
                        <span style={{ color: "#F8D90F"}}>an online</span>{" "}
                         teaching and learning platform for everyone.
                      </strong>{" "}
                      Classes are presented by colleagues, professors, 
                      experts and video clips and remain open for replay without time limit ..
                    </p>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-3">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper" />
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
    </section>
  );
};

export default Entro;
