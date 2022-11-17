import React from "react";
import "../styles/components/TopHero.scss";

const TopHero = () => {
  return (
    <div className="top_hero">
      <div className="top_hero_content">
        <h1 className="title m_b_40 text_nowrap">ท้องฟ้า ไม่มีที่สิ้นสุด</h1>
        <p className="description normal_text text_22pt">
          แหล่งที่มาบางแห่งกล่าวว่า ประโยค 'ท้องฟ้าไม่มีขีดจำกัด' ถูกคิดค้นโดย
          Cervantes ใน Don Quizote ปรากฎอยู่ในรายชื่อยอดนิยมเกี่ยวกับ coinages
          ที่เกิดจาก Cervantes ยกตัวอย่างเช่น
          อย่าใส่ไข่ทั้งหมดของคุณลงในหนึ่งตะกร้า
        </p>
      </div>
    </div>
  );
};

export default TopHero;
