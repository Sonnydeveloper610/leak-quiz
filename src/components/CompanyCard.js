import React from "react";

function CompanyCard() {
  return (
    <div className="company-card">
      <h2>🔧 마스터 탑 누수</h2>
      <p>누수탐지 및 방수공사, 수도배관, 오하수배관, 고압세척</p>
      <p>하수구 막힘, 변기 및 수전교체, 해빙 등</p>
      <p>건물, 아파트, 빌라 등 <strong>보수공사 전문 업체</strong>입니다.</p>
      <p>
        ✔️ <strong>합리적인 가격</strong>과 <strong>친절한 서비스</strong>, <strong>최신형 첨단장비</strong>로 고객님을 찾아뵙겠습니다.
      </p>
      <p className="tel">
        📞 <a href="tel:01058958389">TEL : 010-5895-8389</a>
      </p>
    </div>
  );
}

export default CompanyCard;
