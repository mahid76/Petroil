import Container from "../Layout/Container";
import supplier01 from '../../assets/supplier01.png'
import supplier02 from '../../assets/supplier02.png'
import supplier03 from '../../assets/supplier03.png'
import supplier04 from '../../assets/supplier04.png'

const Supply = () => {
	return (
		<div className="  ">
			<Container>
				<div className="pt-[78px] pb-[100px] flex justify-between items-center">
					<h3 className="max-w-[289px] font-primary font-bold leading-[72px] text-[48px]   ">
						The biggest supplier on the country
					</h3>
					<p className="max-w-[568px] font-primary font-medium text-[#6C6C6C] ">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution.
					</p>
				</div>
			</Container> 
			<div className="flex justify-between gap-x-[30px]">
				<img src={supplier01} alt="" />
				<img src={supplier02} alt="" />
				<img src={supplier03} alt="" />
				<img src={supplier04} alt="" />
			</div>
		</div>
	);
};

export default Supply;
