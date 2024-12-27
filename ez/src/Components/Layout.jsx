import { useState } from "react";
import Nav from "./Nav";
import Menu from "./Menu";

export default function Layout() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <>
      {isMenu && <Menu isMenu={isMenu} setIsMenu={setIsMenu} />}
      <div className='relative flex justify-center text-white'>
        <div className='container fixed'>
          <Nav isMenu={isMenu} setIsMenu={setIsMenu} />
        </div>
      </div>
    </>
  );
}
