const MapLayout = () => {
	return (
		<div className="h-[450px] w-full flex flex-col">
			<div className="flex-1 relative">
				<iframe
					title="Google Map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2840152412253!2d-122.4473038234906!3d37.75875337199279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3c0bcaa1b5%3A0x8c75ccde15ae25a2!2sGolden%20Gate%20Park!5e0!3m2!1sen!2sus!4v1719260844044!5m2!1sen!2sus"
					className="w-full h-full border-0"
					loading="lazy"
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default MapLayout;
