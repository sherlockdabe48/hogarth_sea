import React from "react";
import "../styles/components/StudentTeacher.scss";
import { ReactComponent as PostIcon } from "../resources/icons/post_icon.svg";
import { ReactComponent as MessageIcon } from "../resources/icons/message_icon.svg";

export const StudentTeacher = ({ isMobile }) => {
  const studentAndTeacherContents = [
    {
      name: "โพสต์รายละเอียดทั้งหมด",
      icon: <PostIcon className="s_t_icon m_r_12" />,
      desc: "เมื่อคุณได้ตีพิมพ์งานหรือบทเรียนที่นักเรียนสามารถเข้าใจได้ในทันที เนื้อหาและคำแนะนำ รวมถึงกำหนดวันที่เสร็จสิ้นโครงการและการจัดลำดับข้อมูล",
    },
    {
      name: "เชื่อมต่ออยู่เสมอ",
      icon: <MessageIcon className="s_t_icon m_r_12" />,
      desc: "การสนทนาที่ต่อเนื่อง นอกเหนือจากในห้องเรียนหรือการแสดงอภิปราย รับฟังการพูดคุยของทุกคน  คุณยังสามารถพูดคุยส่วนตัวแบบหนึ่งต่อหนึ่งได้อีกด้วย ทั้งหมดนี้ในวิธีการเชื่อมต่อแบบใหม่",
    },
  ];
  return (
    <div className="student_teacher bg_white">
      <div className="student_teacher_image_wrapper">
        <div className="student_teacher_image m_b_44" />
      </div>
      <div className="student_teacher_desc_wrapper">
        <div className="title_wrapper m_b_32">
          <h2 className="title text_56pt text_center">
            นักเรียนและครูปฏิวัติตำราเรียน
          </h2>
        </div>
        <p className="student_teacher_desc normal_text text_20pt text_center">
          ครูอาจารย์เตรียมการให้นักเรียนในการเป็นผู้สอนในห้องเรียนของพวกเราเอง
          มันไม่ง่ายเลยที่จะสร้างการเรียนการสอนอันน่าทึ่งและมอบทุกอย่างให้นักเรียนตามที่ต้องการได้ทั้งหมดในครั้งเดียว
          <br />
          สร้างและมอบหมายงานได้ทันทีและส่งรายละเอียดให้นักเรียนของคุณ
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
                {content.icon}
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
