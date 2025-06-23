import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import Container from "../Layout/Container";

const Blog = () => {
	const blogList = [
		{
			image: blog01,
			title:
				"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
		},
		{
			image: blog02,
			title:
				"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
		},
		{
			image: blog03,
			title:
				"lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.",
		},
	];
	return (
		<div className="py-[110px] bg-[#F0F0F0] ">
			<Container>
				<div>
					<div className="flex justify-between">
						{blogList.map((items) => (
							<div
								style={{
									backgroundImage: `url(${items.image})`,
								}}
								className="w-[339px] before:absolute relative before:top-0 before:left-0 before:w-full before:h-full before:bg-black/60 before:-z-10 z-10 pt-[75px] pb-[56px] pl-[46px] "
							>
								<h3
									className="max-w-[249px]  font-primary fontvol
                 text-2xl text-white mb-[52px] "
								>
									{items.title}
								</h3>
               
                  <a href="#">
                    <p className="font-primary inline-block font-semibold' text-white text-[12px] px-[22px] py-[10px] bg-white/50 ">
                      Read more
                    </p>
                  </a>
               
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Blog;
