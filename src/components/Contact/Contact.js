import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import { MdPhoneAndroid, MdEmail } from "react-icons/md";


export default class Contact extends Component {
  render() {
    return (
      <div className="about">
        <h3>Контакт подаци</h3>

        <span>
          <FaHome /> <span>Рентгенова 31/19, 18000 Ниш</span>
        </span>
        <span>
          <MdEmail /> <span>aleksic.f@gmail.com</span>
        </span>
        <span>
          <MdPhoneAndroid /> <span>065/8834-816</span>
        </span>
      </div>
    );
  }
}
