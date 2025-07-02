import ServicesBanner01 from "./ServicesBanner01";
import ServicesBanner02 from "./ServicesBanner02";
import ServicesBanner03 from "./ServicesBanner03";

const Services = () => {
	return (
		<div className="mt-5">
			<div className="flex">
				<div className="w-1/2 flex flex-col items-end  justify-center pr-[149px]">
				<h2 className="font-primary text-[64px] font-bold text-black ">Our Services</h2>
				<p className="font-primary max-w-[405px]  font-medium text-secondary ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
				</div>
				<div className="w-1/2">
					<ServicesBanner01 />
				</div>
			</div>
			<div className="flex">
				<div className="w-1/2">
					<ServicesBanner02 />
				</div>
				<div className="w-1/2 block">
					<ServicesBanner03 />
				</div>
			</div>
		</div>
	);
};

export default Services;
