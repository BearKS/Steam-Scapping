import React from "react";
import "./tag.css";

export default function Tag(props) {
  let tag = "";
  if (props.text.includes("&amp;")) {
    tag = props.text.replace("&amp;", "&");
  } else {
    tag = props.text;
  }

  return <div className="bg-[#FEB29A] px-2 mr-3 mb-2 rounded-2xl">{tag}</div>;
}
