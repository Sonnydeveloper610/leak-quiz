import React, { useState } from "react";
import Result from "./Result";

const questions = [
  "최근 수도요금이 평소보다 많이 올랐다",
  "벽지나 천장에 젖은 자국, 곰팡이가 있다",
  "물을 잠갔는데도 물소리가 난다",
  "바닥이 젖거나 축축하다",
  "집안에서 곰팡이/하수구 냄새가 난다",
];

function QuizForm() {
  const [checked, setChecked] = useState(Array(questions.length).fill(false));
  const [result, setResult] = useState("");

  const handleChange = (idx) => {
    const newChecked = [...checked];
    newChecked[idx] = !newChecked[idx];
    setChecked(newChecked);
  };

  const checkLeak = () => {
    const score = checked.filter(Boolean).length;
    if (score <= 1) setResult("✅ 누수 가능성은 낮습니다. 정기적인 점검을 추천드립니다.");
    else if (score <= 3) setResult("⚠️ 누수 의심! 전문가의 점검을 받아보시길 권장합니다.");
    else setResult("🚨 누수 가능성 매우 높음! 즉시 전문가에게 점검을 받으세요.");
  };

  return (
    <div>
      <h1>🏠 우리집 누수 체크 자가 진단</h1>
      <form>
        {questions.map((q, idx) => (
          <label key={idx}>
            <input
              type="checkbox"
              checked={checked[idx]}
              onChange={() => handleChange(idx)}
            />
            {q}
          </label>
        ))}
        <button type="button" onClick={checkLeak}>
          진단하기
        </button>
      </form>
      <Result result={result} />
    </div>
  );
}

export default QuizForm;