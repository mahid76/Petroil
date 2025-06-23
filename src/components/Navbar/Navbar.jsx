import Container from "../Layout/Container";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const navList = [
    {
      title:"Home",
    },
    {
      title:"About",
    },
    {
      title:"Services",
    },
    {
      title:"Gallery",
    },
    {
      title:"Blog",
    },
  ]
	return (
		<div
			className="py-[27px] bg-primary
        "
		>
			<Container>
				<div className="flex justify-between items-center">
          <div><img src={logo} alt="Logo" /></div>
          <div className="flex gap-x-[72px] items-center">
            
              <ul className="flex gap-x-[47px] text-white  font-primary font-semibold  ">
               {navList.map((items)=>
              (
                <li><a href="#">{items.title}</a></li>
              )
              )}
              </ul>
            
            <div>
              <button
                className=" text-white  font-primary font-semibold border-2 border-white py-[14px] px-8 "
              >
                CONTACT
              </button>
              
            </div>
          </div>
        </div>
			</Container>
		</div>
	);
};

export default Navbar;
