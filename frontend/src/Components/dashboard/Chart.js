import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";
import '../../App.css';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("00:00", 0),
  createData("03:00", 300),
  createData("06:00", 600),
  createData("09:00", 800),
  createData("12:00", 1500),
  createData("15:00", 2000),
  createData("18:00", 2400),
  createData("21:00", 2400),
  createData("24:00", undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
     
        <div className="dashboard-welcome x-card-layer">
          <div className="dashboard-welcome__content x-flex-column-h-any-v-between">
            <div className="dashboard-welcome__content__body">
              <div className="dashboard-welcome__content__body__welcome">
                <span>Welcome Itaf</span>
              </div>
              <div className="dashboard-welcome__content__body__member">
                <span>You are a member of </span>
                <span className="dashboard-welcome__content__body__progress">
                Edulearn
                </span>
                <span> guild</span>
              </div>
              <div className="dashboard-welcome__content__body__completionRate">
                <div>
                  <span> You have a 0% learning progress in</span>
                  <span className="dashboard-welcome__content__body__progress">
                       your course
                  </span>
                  <span> track</span>
                </div>
              </div>
            </div>
            <a href="/graduation-report">
              <button
                type="button"
                className="ant-btn primary-button__btn-primary dashboard-welcome__content__button"
              >
                <span>Resume our course</span>
              </button>
            </a>
          </div>
          <img
            className="dashboard-welcome__image"
            src="/image1.png"
            alt="Welcome back"
          />
        </div>
     
    </React.Fragment>
  );
}
