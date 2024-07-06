const Nav = () => {
  const NavLinkText = "text-[16px] text-black/70 font-medium";

  return (
    <div className="container flex py-3 rounded-[20px] px-10 fixed z-50 top-3 right-0 left-0  justify-between items-center mx-auto bg-slate-50">
      <h2 className=" text-3xl font-sans font-semibold">KR</h2>
      <div className=" flex justify-between gap-x-10 items-center">
        <h2 className={NavLinkText}>Home</h2>
        <h2 className={NavLinkText}>Products</h2>
        <h2 className={NavLinkText}>Abouts</h2>
        <h2 className={NavLinkText}>Contact Us</h2>
      </div>
    </div>
  );
};

export default Nav;
