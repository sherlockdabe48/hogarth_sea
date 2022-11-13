import React from "react";
import "../styles/StudentTeacher.scss";
import post_icon from "../resources/icons/post_icon.svg";
import message_icon from "../resources/icons/message_icon.svg";

export const StudentTeacher = ({ isMobile }) => {
  const studentAndTeacherContents = [
    {
      name: "Post all the details",
      icon: post_icon,
      desc: "Once you've published a assignment or lesson, students have immediate access to all materials, instructions, project deadline and grading information.",
    },
    {
      name: "Stay connected",
      icon: message_icon,
      desc: "Continue conversations beyond classroom or post a debate that gets everyone talking. You can also go on an one-to-one chat. A whole new way to stay connected.",
    },
  ];
  return (
    <div className="student_teacher bg_white">
      <div className="student_teacher_image_wrapper">
        <div className="student_teacher_image m_b_44" />
      </div>
      <div className="student_teacher_desc_wrapper">
        <div className="title_wrapper m_b_32">
          <h2 className="title text_56pt text_center">Students & teacher</h2>
          <h2 className="title text_56pt text_center">
            reimagine the textbook.
          </h2>
        </div>
        <p className="student_teacher_desc normal_text text_20pt text_center">
          Teachers prepare students to lead their own classroom. It's never
          easier to create amazing lessons and deliver everything students need
          to stay engaged, all in one place.
          <br />
          Build assignments immediately and share the details with your
          students.
        </p>
      </div>
      <div
        className={`student_teacher_sub_content_wrapper ${
          !isMobile ? "grid_2c" : ""
        }`}
      >
        {studentAndTeacherContents.map((content) => {
          return (
            <div className="flex_column" key={content.name}>
              <div className="flex_center m_b_16">
                <img
                  className="s_t_icon text_orange m_r_12"
                  src={content.icon}
                  alt=""
                />
                <h3 className="title text_32pt">{content.name}</h3>
              </div>
              <hr />
              <p className="text_20pt p_r_48 p_t_16">{content.desc}</p>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
