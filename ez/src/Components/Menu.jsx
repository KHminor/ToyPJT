export default function Menu({ isMenu, setIsMenu }) {
  const click = (e) => {
    console.log(e.target.ariaLabel);
    switch (e.target.ariaLabel) {
      case "close":
        setIsMenu(!isMenu);
        break;
    }
  };
  return (
    <>
      <div className='absolute w-full h-screen z-10 bg-gray-500'>
        <div className='menu-top fixed w-full flex justify-center top-5'>
          <div className='w-4/5 flex justify-between item-center'>
            <div className='logo'>이지엠앤씨</div>
            <div className='close' onClick={click} aria-label='close'>
              X
            </div>
          </div>
        </div>
        <div className='menu-body w-full h-full flex justify-center items-center'>
          <div className='w-4/5 flex'>
            <div
              about='left'
              className='flex flex-col justify-center items-start space-y-8'
            >
              <div about='company'>
                <div className='text-left h2Tag pb-8'>
                  <h2>COMPANY</h2>
                </div>
                <div className='menu-grid pTag'>
                  <div>
                    <p>회사소개</p>
                  </div>
                  <div>
                    <p>비전&미션</p>
                  </div>
                </div>
              </div>
              <div about='services'>
                <div className='text-left h2Tag pb-8'>
                  <h2>SERVICES</h2>
                </div>
                <div className='menu-grid pTag'>
                  <div>
                    <p>병원MSO</p>
                  </div>
                  <div>
                    <p>온라인 마케팅</p>
                  </div>
                  <div>
                    <p>웹·앱 개발</p>
                  </div>
                  <div>
                    <p>종합디자인</p>
                  </div>
                  <div>
                    <p>콘텐츠 제작</p>
                  </div>
                </div>
              </div>
              <div about='contact'>
                <div className='text-left h2Tag pb-8'>
                  <h2>CONTACT</h2>
                </div>
                <div className='menu-grid pTag'>
                  <div>
                    <p>회사소개</p>
                  </div>
                  <div>
                    <p>비전&미션</p>
                  </div>
                </div>
              </div>
            </div>
            <div about='right' className=''></div>
          </div>
        </div>
      </div>
    </>
  );
}
