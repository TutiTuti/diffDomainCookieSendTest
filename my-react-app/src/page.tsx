// page.tsx
import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";

const Page: React.FC = () => {
  const [cookieValue, setCookieValue] = useState('');
  const [cookies] = useCookies();
  const sendRequest = async () => {
    try {
      const res = await fetch('/api/test-cookie', {
        // const res = await fetch('https://ficket.store/api/test-cookie', {
        method: 'GET',
        credentials: 'include', // 쿠키 주고받기 필수
      });
      const data = await res.text();
      console.log('✅ 응답:', data);
      alert('요청 완료. 쿠키가 저장됐는지 확인해보세요!');
    } catch (err) {
      console.error('❌ 요청 실패:', err);
    }
  };

  const checkCookies = () => {
    const cookiess = document.cookie;
    console.log('🍪 현재 쿠키:', cookiess);
    console.log("🍪 쿠키 내용~:", cookies["cookie-test"]);
    setCookieValue(cookiess || '없음');
  };

  useEffect(() => {
    checkCookies();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>쿠키 테스트 페이지</h1>
      <p>현재 쿠키: {cookieValue}</p>
      <button onClick={sendRequest}>서버에 요청 (쿠키 저장 시도)</button>
      <button onClick={checkCookies} style={{ marginLeft: '1rem' }}>
        현재 쿠키 확인
      </button>
    </div>
  );
};

export default Page;
