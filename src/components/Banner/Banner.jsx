import banner from "../../assets/banner.jpg";
import Button from "../Button/Button";
import Container from "../Layout/Container";

const Banner = () => {
	return (
		<div
			className=" bg-center bg-cover bg-no-repeat py-[258px] relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black/60 before:-z-10  z-10"
			style={{
				backgroundImage: `url(${banner})`,
			}}
		>
			<Container>
				<div className="">
					<p className="max-w-[842px] mb-[31px]  font-primary font-bold text-[64px] text-white">
						We exist since 1975 on the oil and gas industry.
					</p>
          <Button>
            LEARN MORE
          </Button>
				</div>
			</Container>
		</div>
	);
};

export default Banner;
