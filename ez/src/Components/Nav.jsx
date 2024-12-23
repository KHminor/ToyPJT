export default function Nav({ isMenu, setIsMenu }) {
  const click = (e) => {
    console.log(e.target.ariaLabel);
    console.log(isMenu);
    switch (e.target.ariaLabel) {
      case "menu":
        setIsMenu(!isMenu);
        break;
    }
  };
  return (
    <>
      <nav className='nav flex justify-evenly items-center'>
        <div className='bg-red-500 w-1/3 text-start pl-4'>이지엠앤씨</div>
        <div className='bg-green-500 w-1/3 flex justify-evenly'>
          <div>COMPANY</div>
          <div>SERVICES</div>
          <div>CONTACT</div>
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
