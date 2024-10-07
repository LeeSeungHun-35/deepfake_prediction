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
                <div className='pic1' />
                <div className='text1'>
                딥페이크 기술은 인공지능을 활용하여 영상이나 이미지를 변형하는 방식. <br />특히, 특정 인물의 얼굴이나 목소리를 조작하여 허위 정보를 퍼뜨리거나 <br />동의 없이 음란물에 사용되는 등의 사례가 증가하고 있습니다. <br />이러한 문제를 해결하기 위해 AI 기반 탐지 기술과 법적 규제가 모색되고 있으며, 사회적 논의가 필요합니다 .
                </div>
            </div>
            <div className='Home3'>Home333</div>
        </div>
    );
}

export default Home;