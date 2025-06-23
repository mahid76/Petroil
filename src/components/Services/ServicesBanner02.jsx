import service02 from '../../assets/service02.jpg'
import Button from '../Button/Button';
import Container from '../Layout/Container'

const ServicesBanner02 = () => {
	return (
		<div
			className=" bg-center bg-cover bg-no-repeat pt-[147px] pb-[139px] relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/60 before:-z-10  z-10"
			style={{
				backgroundImage: `url(${service02})`,
			}}
		>
			
		<Container>
					<div className="">
					<p className="  mb-[19px]  font-primary font-bold text-[36px] text-white">
						Supply of national industries.</p>
					<Button>Learn More</Button>
				</div>
			
		</Container>
		</div>
	);
};

export default ServicesBanner02;
