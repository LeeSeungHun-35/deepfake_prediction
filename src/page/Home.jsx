import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='Home1'>
        <div className='Home1-content'>
          <div className='title'>AI기반 딥페이크 판독 서비스</div>
          <div className='content'>딥페이크: 진실을 왜곡하는 새로운 도구</div>
        </div>
      </div>
      <div className='Home2'>
        <div className='Home2-content'>
          <h2>현재 딥페이크로 인한 악용 사례</h2>
          <p>
            딥페이크 기술은 이미지와 비디오를 조작하여 가짜 정보를 생성할 수 있습니다. 이는
            연예인의 이미지 도용, 정치적 목적의 가짜 뉴스 제작 등 여러 방식으로 악용될 수 있습니다.
            특히, 이러한 기술은 사람들의 신뢰를 훼손하고 사회적 혼란을 초래할 수 있습니다.
          </p>
        </div>
      </div>
      <div className='Home3'>Home333</div>
    </div>
  );
}

export default Home;
