import Nav from "./Nav";

export default function Layout() {
  return (
    <>
      <div className='relative flex justify-center bg-black text-white hover:bg-white hover:text-black'>
        <div className='container'>
          <Nav />
        </div>
      </div>
    </>
  );
}
