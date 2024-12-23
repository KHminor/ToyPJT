import style from "./menu.module.css";

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
        <div
          about='menu-top'
          className='menu-top fixed w-full flex justify-center top-5'
        >
          <div className='w-4/5 flex justify-between item-center'>
            <div className='logo'>이지엠앤씨</div>
            <div className='close'>
              <span className='icon' onClick={click} aria-label='close'>
                X
              </span>
            </div>
          </div>
        </div>
        <div
          about='menu-body'
          className='menu-body w-full h-full flex justify-center items-center'
        >
          <div className='w-4/5 flex justify-between items-center space-x-4'>
            <ul about='left' className='space-y-8'>
              <li about='company' className='space-y-8'>
                <a href='' className='menu'>
                  COMPANY
                </a>
                <ul className='menu-section menu-grid'>
                  <li>
                    <a href='' className={`${style.link}`}>
                      회사소개
                    </a>
                  </li>
                  <li>
                    <a href='' className={`${style.link}`}>
                      비전&미션
                    </a>
                  </li>
                </ul>
              </li>
              <li about='services' className='space-y-8'>
                <a href='' className='menu'>
                  SERVICES
                </a>
                <ul className='menu-section menu-grid'>
                  <li>
                    <a href='' className={`${style.link}`}>
                      병원MSO
                    </a>
                  </li>
                  <li>
                    <a href='' className={`${style.link}`}>
                      온라인 마케팅
                    </a>
                  </li>
                  <li>
                    <a href='' className={`${style.link}`}>
                      웹·앱 개발
                    </a>
                  </li>
                  <li>
                    <a href='' className={`${style.link}`}>
                      종합디자인
                    </a>
                  </li>
                  <li>
                    <a href='' className={`${style.link}`}>
                      콘텐츠 제작
                    </a>
                  </li>
                </ul>
              </li>
              <li about='contact' className='space-y-8'>
                <a href='' className='menu'>
                  CONTACT
                </a>
                <ul className='menu-section menu-grid'>
                  <li>
                    <a href='' className={`${style.link}`}>
                      채용안내
                    </a>
                  </li>
                  <li>
                    <a href='' className={`${style.link}`}>
                      지원하기
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul
              about='right'
              className='space-y-4 pl-16 border-l-2 border-gray-400'
            >
              <li>
                <p className='font-light'>Phone</p>
                <p className='font-medium text-xl'>052-716-5100</p>
              </li>
              <li>
                <p className='font-light'>Address</p>
                <p className='font-medium text-xl'>
                  울산광역시 남구 갈밭로 46번길 4
                </p>
              </li>
              <li className='flex justify-start items-center space-x-3'>
                <div className='p-6 rounded-xl bg-green-500'></div>
                <div className='p-6 rounded-xl bg-purple-800'></div>
                <div className='p-6 rounded-xl bg-red-700'></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
