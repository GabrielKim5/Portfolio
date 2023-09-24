export default function FeaturesBlocks() {
	return (
		<section className="relative">
			<div
				className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
				aria-hidden="true"
			></div>
			<div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20">
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="h2 mb-4">Get In Contact</h2>
						<p className="text-xl text-gray-600">
							Socials, Contacts, Github, Email.
						</p>
					</div>

					{/* Items */}
					<div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<a href="https://github.com/GabrielKim5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="100"
									height="100"
									viewBox="0,0,255.99431,255.99431"
								>
									<g transform="translate(51.19886,51.19886) scale(0.6,0.6)">
										<g
											fill="#000000"
											fillRule="evenodd"
											stroke="none"
											strokeWidth="1"
											strokeLinecap="butt"
											strokeLinejoin="miter"
											strokeMiterlimit="10"
											strokeDasharray=""
											strokeDashoffset="0"
											fontFamily="none"
											fontWeight="none"
											fontSize="none"
											textAnchor="none"
										>
											<g transform="scale(8,8)">
												<path d="M16,4c-6.62891,0 -12,5.37109 -12,12c0,5.30078 3.4375,9.80078 8.20703,11.38672c0.60156,0.10938 0.82031,-0.25781 0.82031,-0.57812c0,-0.28516 -0.01172,-1.03906 -0.01562,-2.03906c-3.33984,0.72266 -4.04297,-1.60937 -4.04297,-1.60937c-0.54687,-1.38672 -1.33203,-1.75781 -1.33203,-1.75781c-1.08984,-0.74219 0.08203,-0.72656 0.08203,-0.72656c1.20313,0.08594 1.83594,1.23438 1.83594,1.23438c1.07031,1.83594 2.80859,1.30469 3.49219,1c0.10938,-0.77734 0.42188,-1.30469 0.76172,-1.60547c-2.66406,-0.30078 -5.46484,-1.33203 -5.46484,-5.92969c0,-1.3125 0.46875,-2.38281 1.23438,-3.22266c-0.12109,-0.30078 -0.53516,-1.52344 0.11719,-3.17578c0,0 1.00781,-0.32031 3.30078,1.23047c0.95703,-0.26562 1.98438,-0.39844 3.00391,-0.40234c1.01953,0.00391 2.04688,0.13672 3.00391,0.40234c2.29297,-1.55078 3.29688,-1.23047 3.29688,-1.23047c0.65625,1.65234 0.24609,2.875 0.12109,3.17578c0.76953,0.83984 1.23047,1.91016 1.23047,3.22266c0,4.60938 -2.80469,5.62109 -5.47656,5.92188c0.42969,0.36719 0.8125,1.10156 0.8125,2.21875c0,1.60547 -0.01172,2.89844 -0.01172,3.29297c0,0.32031 0.21484,0.69531 0.82422,0.57813c4.76563,-1.58984 8.19922,-6.08594 8.19922,-11.38672c0,-6.62891 -5.37109,-12 -12,-12z"></path>
											</g>
										</g>
									</g>
								</svg>
							</a>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Github
							</h4>
							<p className="text-gray-600 text-center">
								View projects from my repositories.
							</p>
						</div>

						{/* 2nd item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAAAsTAAALEwEAmpwYAAACr0lEQVR4nO2aTYhOURjHf0YzhkjJZGbjY6SUsJhGk8UQs6QoHztZsbCwtB07O4PZYGfKwkJqipKlSMlH5HtBPlIIr3wzR6cedZte7rnnnnPveXn+9W+axTn3eX7v6TnPfbqgUqlUKpVKpVKFUDuwCOhrIdt4O0IkPxc4BnwATAu6ARyVPLy0AHiaQCIh/FjyKaxzCQQf0mM+EG4lEHhIn/aBsB34nkDwIfwSWImnVgCXE0jC1xPAiTKF8bemADuANwkkVcSPgCECq1uomsT9DTgAdBJR64D7CSTbzBeBZVSk6cAw8DWBxK3fAXuBNmrQcuBSzQBOAT0Osc4omtwq4IE0GHkPsPR3A28rTv4JsMExl2ty3W8qAmFk0lHb43DUbOE8WUHyP4CDwMyceGYBh4GfmbVHikAYbfJwS7PfYe1a4G4kADfkl83TRjkpk9ePloVg5EgdEsouhfNLoOQ/yX72lf5v6sm5xoNAMOLnwBaHfZYAF0oCOAssdGjodgHvc/YKCsGIx4H5jh3nK49+365zuaFcW/soEAzwEdgHTM3Zc44MOCYC9fs+vUo0CEZ83bFoDQJ3/rDHQ2C9wx5rgHseMUaHYOT6GnEonJ3yKzZkXUP+n5azrqvk+0slEIzYjuU2O3ZxS+Vo59WVncDrknFVCsFkCqfXbC+jxcD5QPHUAsFI4Rz2GH+3S8H9HDCW2iAY8U1gwPH5q4HbEWKoHYLJXH/2umym2dKRZvv9fw6CyXSc26TgIX+3Ai8iPzcpCEZsJ1RnKpxUJQnBVGyFgEJAIaAQUAgoBBQCCgGFgEKgNIT9CbS4MWznGs4aSiDgGLafFTirDbiaQNAhfSXz6l5otvcsgeBD2A5+e/FUN3C8xb9otV/kziOAOoRkXwu5N9S3zSqVSqVSqVQq/nP9Av87uqPzK7fyAAAAAElFTkSuQmCC" />
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Email
							</h4>
							<p className="text-gray-600 text-center">gabekim234@gmail.com</p>
						</div>

						{/* 3rd item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<a href="https://www.linkedin.com/in/gabriel-kim-3b3602249/">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="100"
									height="100"
									viewBox="0,0,255.99431,255.99431"
								>
									<g transform="translate(38.39915,38.39915) scale(0.7,0.7)">
										<g
											fill="#000000"
											fillRule="nonzero"
											stroke="none"
											strokeWidth="1"
											strokeLinecap="butt"
											strokeLinejoin="miter"
											strokeMiterlimit="10"
											strokeDasharray=""
											strokeDashoffset="0"
											fontFamily="none"
											fontWeight="none"
											fontSize="none"
											textAnchor="none"
										>
											<g transform="scale(10.66667,10.66667)">
												<path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM9,17h-2.523v-7h2.523zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM18,17h-2.442v-3.826c0,-1.058 -0.651,-1.302 -0.895,-1.302c-0.244,0 -1.058,0.163 -1.058,1.302c0,0.163 0,3.826 0,3.826h-2.523v-7h2.523v0.977c0.325,-0.57 0.976,-0.977 2.197,-0.977c1.221,0 2.198,0.977 2.198,3.174z"></path>
											</g>
										</g>
									</g>
								</svg>
							</a>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								LinkedIn
							</h4>
							<p className="text-gray-600 text-center">
								Connect with me on LinkedIn
							</p>
						</div>

						{/* 4th item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAACh0lEQVR4nO2bOWtVQRSAvyjRRBEjNuKCuCHWouIaC3EhRlD8DSIi2CoovocoBAWxUKy1solWahOIptPGQrFxQRsVjE3cF54MzIWH5M7ce+dKXs45H0w/fJyZOWfODBiGYRiGYchnDrAJ2FVwrEQBu4EPQKvkuAvMRSjzgE8VpGTjAkLZnCDFjUcIZWOimBcIZV2imHcIZWmimAmE0pcopuU3cHHMBP4kinHLUSSvEsUcQCj3E8WIzWWuJIp5gFCOJYr5CcxHIP01nEwHEUgv8C1RzEWEMpoopolQziZmv6sQSn9FKd+BAQQzCxgvKcXtS3tQwPUSUn4Agyhhm0mZnC7gZYFIEVsbhWhGpOxHKYsCyZ470lVzLUeMu57oQTErgF85ck6hnJuBLHcJilnjs9q8DqQ7wdRyPnBCHUF5o/9NYEm5qFLL4UDUPJd6c1eUOwE5w5r3m4XA24CcIRSzPZDbuHESxZyJFJjHUcoM4HZETh2R4067c8Al4NB06Y33AmMROUMJG7K7Efw8SVX/0Hc8B32vvCNlLQCeRuQMV5j83pJtnAn/dtDdIT324lzuNaUsi5xUbjwrkQTuq6G3lZUrU85i4Elkol+AE5GlVTZSYsPdDnTEshorMNl7OVX5QKBYrTp20iHMBm4VmLCLnkbbZVddy6djxWRH+elIEth+E9jwp01Lupj257GpL7REislqq1DhqVZMhkvGXpuY/Ey58Z822WkbMe2sBm4U3JxViclY7h9DfjUx+R3PZoFeuZqI+RdXKmwBrgIfaxKzAWF0A1t9ojhScbm99xu+aHqAHcBR4LKvnN3/qN85Usb9f03V9PkvRWuB9T7SxP7PNAzDMAzDwPMXEjVM4Bqh3rcAAAAASUVORK5CYII=" />
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Phone
							</h4>
							<p className="text-gray-600 text-center">(123)-456-7890</p>
						</div>

						{/* 5th item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<a href="https://www.google.com/maps?sca_esv=567928140&rlz=1C1UEAD_enUS937US937&output=search&q=houston+texas&source=lnms&entry=mc&sa=X&ved=2ahUKEwiBldmdm8KBAxVFIjQIHen-Ds8Q0pQJegQIDBAB">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOUlEQVR4nO3Yy2oUQRiG4TdrycIoKCKYpQpR8XgBIhg3ChrJ0sMF6AVoQNTEjQbEy/KAGlcRRNClcRHiYWEiBTUwhOm/u+ebVdX3QG2mp2vol57urgYzMzOzYTPAHDCfx1z+zAKzwBLwBthpGGnbw/xdy/YBq8DfINzu8Qd4kfet2inga49wu8d34ByVugb8EuINRprjKpU5DWxNIN5g/AbOU4n9+a+3M+HxrZY79WqHGB+Bp8CtPJaBtQ77Padwsy132x/ADWBqxL7pswVgo+XufISCLbXEO9phjmMtER9QsLfBgV/vMc/NYJ7XFGoG2A6ueaP+tk2mgmti+o29FOhEcNY8GWO+5WC+tHYuznxwwOlO29edYL7LFOhKcMC3x5jvbm0BzwYHnJ75+loJ5jtDoSuQ7YYDXhvjJvKpYa5/Ja9I3gVnTXo06Wqx5Z1hsR4HB76RH5LbHAd+BvM8omCHWpZyG/lMbFrKLbbES0u5gxTuVRBg+Jq4MvQy4VlwzRseL6nAHuBzhxh9xxdgmkpcADYnGG+zpheqA5cm9FY6zXGRSp0E1oV463mNXbXp/DKhz9m4lfep5prXxQHgPvAhCPceuJe/aw0WgoBpm7VwQJEDihxQ5IAiBxQ5oMgBRQ4ockCRA4ocUOSAIgcUOaDIAUUOKHJAkQOKHFDkgCIHFDmgyAFFDihyQJEDihxQ5IAiBxQ5oMgBRQ4ockCRA4ocUOSAIgcUOaDIAUWHc8RRI20zMzMzDP4DbJCnqElHNvEAAAAASUVORK5CYII=" />
							</a>
							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Where?
							</h4>
							<p className="text-gray-600 text-center">Houston, Texas</p>
						</div>

						{/* 6th item */}
						<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
							<a href="https://twitter.com/i/flow/login?lang=en">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="100"
									height="100"
									viewBox="0,0,255.99431,255.99431"
								>
									<g transform="translate(51.19886,51.19886) scale(0.6,0.6)">
										<g
											fill="#000000"
											fillRule="nonzero"
											stroke="none"
											strokeWidth="1"
											strokeLinecap="butt"
											strokeLinejoin="miter"
											strokeMiterlimit="10"
											strokeDasharray=""
											strokeDashoffset="0"
											fontFamily="none"
											fontWeight="none"
											fontSize="none"
											textAnchor="none"
										>
											<g transform="scale(5.12,5.12)">
												<path d="M50.0625,10.4375c-1.84766,0.82031 -3.82812,1.37109 -5.91016,1.62109c2.125,-1.27344 3.75781,-3.28906 4.52344,-5.6875c-1.98437,1.17578 -4.19141,2.03125 -6.53125,2.49219c-1.875,-2 -4.54687,-3.24609 -7.50391,-3.24609c-5.67969,0 -10.28516,4.60156 -10.28516,10.28125c0,0.80469 0.09375,1.58984 0.26953,2.34375c-8.54687,-0.42969 -16.12109,-4.52344 -21.19531,-10.74609c-0.88672,1.52344 -1.39062,3.28906 -1.39062,5.17187c0,3.56641 1.8125,6.71484 4.57422,8.5625c-1.6875,-0.05469 -3.27344,-0.51953 -4.66016,-1.28906c0,0.04297 0,0.08594 0,0.12891c0,4.98438 3.54688,9.13672 8.24609,10.08594c-0.85937,0.23438 -1.76953,0.35938 -2.70703,0.35938c-0.66406,0 -1.30859,-0.0625 -1.9375,-0.1875c1.3125,4.08203 5.10938,7.0625 9.60547,7.14453c-3.51562,2.75781 -7.94922,4.39844 -12.76953,4.39844c-0.83203,0 -1.64844,-0.04687 -2.44922,-0.14453c4.54687,2.92188 9.95312,4.62109 15.76172,4.62109c18.91406,0 29.25781,-15.66797 29.25781,-29.25391c0,-0.44531 -0.01172,-0.89453 -0.02734,-1.33203c2.00781,-1.44922 3.75,-3.26172 5.12891,-5.32422z"></path>
											</g>
										</g>
									</g>
								</svg>
							</a>

							<h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
								Twitter
							</h4>
							<p className="text-gray-600 text-center">
								Because X is overrated anyway.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
