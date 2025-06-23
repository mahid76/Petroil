import service03 from "../../assets/service03.jpg";
import Button from "../Button/Button";
import Container from "../Layout/Container";

const ServicesBanner03 = () => {
	return (
		<div
			className=" bg-center bg-cover bg-no-repeat pt-[147px] pb-[139px] relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/60 before:-z-10  z-10"
			style={{
				backgroundImage: `url(${service03})`,
			}}
		>
			<Container>
				<div className="">
					<p className="  mb-[19px]  font-primary font-bold text-[36px] text-white">
						National fuel distribution and supply.
					</p>
					<Button>Learn More</Button>
				</div>
			</Container>
		</div>
	);
};

export default ServicesBanner03;
