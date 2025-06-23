import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Container from "../Layout/Container";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Header = () => {
	return (
		<div className="bg-[#282828] py-4">
			<Container>
				<div className="flex justify-between">
					<div className="flex items-center gap-x-[5px] ">
						<MdOutlineMarkEmailUnread color="#ffffff" size={20} />
						<a className="font-primary text-[12px] flex text-white  " href="#">
							mail@yourcompany.com <span className="ml-6 mr-6">|</span>
							<div className="flex items-center gap-x-[5px]">
								<LiaPhoneVolumeSolid color="#ffffff" size={20} />
								<span> +896 120 5889 (Toll free)</span>
							</div>{" "}
						</a>
					</div>
					<div className="flex gap-x-[19px] ">
            <FaFacebookF size={20} color="#ffffff" />
            <FaTwitter size={20} color="#ffffff" />
            <FaLinkedinIn size={20} color="#ffffff" />
            <IoLogoInstagram size={20} color="#ffffff" />
          </div>
				</div>
			</Container>
		</div>
	);
};

export default Header;
