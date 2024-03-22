import { Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={`@font-face{
                font-family:'poppins'
                src:   url('../src/assets/fonts/Poppins/Poppins-Regular.ttf')
            }`}
	/>
);
