import { useState } from "react";
import styles from "./nav.module.css";

export default function Nav({ isMenu, setIsMenu }) {
  const [hoverMenu, isHoverMenu] = useState("");

  const click = (e) => {
    console.log(hoverMenu);
    switch (e.target.ariaLabel) {
      case "menu":
        setIsMenu(!isMenu);
        break;
    }
  };

  const hover = (e) => {
    isHoverMenu(e.target.ariaLabel);
  };

  const hoverOut = (e) => {
    isHoverMenu("");
  };
  return (
    <>
      <nav className='nav flex justify-evenly items-center relative'>
        <div className='bg-red-500 w-1/3 text-start pl-4'>이지엠앤씨</div>
        <div className='bg-green-500 w-1/3 flex text-center relative'>
          <ul className='w-1/3 relative'>
            <li
              about='company'
              aria-label='company'
              onMouseEnter={hover}
              onMouseLeave={hoverOut}
              className='relative'
            >
              <a href='#'>
                <span>COMPANY</span>
              </a>
              <ul
                className={`${
                  hoverMenu == "company" ? "block" : "hidden"
                } absolute bg-green-500 w-full`}
              >
                <li>
                  <a href='#'>회사소개</a>
                </li>
                <li>
                  <a href='#'>비전&미션</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className='w-1/3 relative'>
            <li
              about='services'
              aria-label='services'
              onMouseEnter={hover}
              onMouseLeave={hoverOut}
            >
              <a href=''>
                <span>SERVICES</span>
              </a>
              <ul
                className={`${
                  hoverMenu == "services" ? "block" : "hidden"
                } absolute bg-green-500 w-full`}
              >
                <li>
                  <a href='#'>메디컬 마케팅</a>
                </li>
                <li>
                  <a href='#'>온라인 마케팅</a>
                </li>
                <li>
                  <a href='#'>웹·앱 개발</a>
                </li>
                <li>
                  <a href='#'>종합디자인</a>
                </li>
                <li>
                  <a href='#'>콘텐츠 제작</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className='w-1/3 relative'>
            <li
              about='contact'
              aria-label='contact'
              onMouseEnter={hover}
              onMouseLeave={hoverOut}
            >
              <a href='#'>CONTACT</a>
              <ul
                className={`${
                  hoverMenu == "contact" ? "block" : "hidden"
                } absolute bg-green-500 w-full`}
              >
                <li>
                  <a href='#'>지원하기</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='bg-blue-500 w-1/3 text-end pr-4'>
          <span className='icon' aria-label='menu' onClick={click}>
            MENU
          </span>
        </div>
      </nav>
    </>
  );
}
