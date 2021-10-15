import React from 'react'

const GlobalSvg = ({ id }) => {
	switch (id) {
		case 'logo':
			return (
				<svg
					width='102'
					height='74'
					viewBox='0 0 152 124'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g clip-path='url(#clip0_34:4)'>
						<g filter='url(#filter0_d_34:4)'>
							<path
								d='M126.022 72.5161C128.172 57.1183 125.505 42.4086 122.581 32.086C122.409 31.5699 122.323 31.1398 122.151 30.6237C120.516 32.5161 118.71 34.1505 116.817 35.6989C116.129 36.2151 115.441 36.8172 114.753 37.3333C113.892 37.9355 113.118 38.5376 112.258 39.1398C108.387 41.8065 104.344 44.2151 100.559 46.9677C96.6882 38.1075 91.6129 29.7634 86.7957 21.3333C83.0108 14.7957 79.3979 8.17204 76.4731 1.29032C76.3011 0.860215 76.129 0.430108 75.957 0C72.9462 7.39785 69.0753 14.4516 65.0323 21.3333C60.2151 29.7634 55.1398 38.1075 51.2688 46.9677C47.4839 44.2151 43.4409 41.8065 39.5699 39.1398C38.7097 38.5376 37.8495 37.9355 37.0753 37.3333C34.4086 35.3548 31.828 33.1183 29.5914 30.6237C26.4946 40.9462 23.4839 56.3441 25.7204 72.4301C13.8495 71.2258 5.67742 68.9032 0 66.2366C2.23656 77.5914 8.86022 97.9785 27.4409 110.194C27.4409 110.194 27.5269 110.194 27.5269 110.28C28.9032 111.14 30.3656 112 31.828 112.86C32.4301 113.204 33.0323 113.462 33.6344 113.806C40 116.989 47.5699 119.226 56.5161 120.086C48.086 112.946 42.2366 105.118 38.2796 97.0323C35.5269 91.4409 33.7204 85.7634 32.6022 80.086C37.0753 80.6021 41.1183 81.5484 44.9032 82.9247C45.3333 85.5914 45.9355 88.2581 46.8817 90.9247C49.8925 99.6129 56 107.183 63.828 112.086C66.6667 113.892 69.7635 115.269 72.9462 116.301C73.5484 109.849 71.914 102.022 67.5269 94.7097C66.4086 92.9032 65.1183 91.0968 63.6559 89.3764C61.9355 82.1505 62.6237 74.3226 65.8065 67.5269C68.3011 62.2796 72.6022 55.2258 75.4409 50.2366C75.6129 49.9785 75.785 49.6344 75.957 49.3763C76.129 49.6344 76.3011 49.9785 76.3871 50.2366C79.3118 55.3118 83.6129 62.2796 86.0215 67.5269C89.2043 74.3226 89.8925 82.1505 88.1721 89.3764C80.8602 97.8925 78.1936 108.129 78.8817 116.129C78.8817 116.129 78.8817 116.129 78.8817 116.215C78.8817 116.301 78.8817 116.301 78.8817 116.301C82.0645 115.269 85.1613 113.892 88 112.086C89.2043 111.312 90.3226 110.538 91.4409 109.677C97.6344 104.86 102.366 98.3226 104.946 90.9247C105.892 88.3441 106.495 85.6774 106.925 82.9247C110.71 81.5484 114.753 80.6021 119.226 80.086C116.473 93.8495 109.591 107.957 95.3118 120C104.258 119.14 111.828 116.903 118.194 113.72C118.796 113.462 119.398 113.118 120 112.774C140.731 101.677 148.559 80.8602 151.398 68.3011C151.57 67.6129 151.742 66.9247 151.828 66.2366C145.979 68.9032 137.806 71.2258 126.022 72.5161ZM34.4086 98.3226C38.3656 105.204 43.871 111.742 51.2688 117.763C45.7634 116.559 40.8602 114.753 36.6452 112.43C20.5591 103.828 13.0753 88.8602 9.54839 77.5914C14.4516 78.7097 20.043 79.4839 26.3226 79.5699C26.4946 79.5699 26.7527 79.5699 26.9247 79.5699C28.4731 85.9355 30.7957 92.2151 34.4086 98.3226ZM48.172 54.4516C46.4516 59.4409 45.1613 64.6021 44.6452 69.8495C44.5591 71.0538 44.4731 72.1721 44.3871 73.3764C44.3871 74.3226 44.3011 75.2688 44.3011 76.3011C40.5161 74.9247 36.2151 73.8064 31.4839 73.2043C31.3118 71.3979 31.1398 69.5914 31.1398 67.871C30.7957 58.5806 32 49.8925 33.6344 42.6667C35.4409 43.7849 37.2473 44.9032 39.1398 45.8495C42.5807 47.6559 46.1075 49.3763 49.3764 51.3548C48.9462 52.3011 48.6022 53.3333 48.172 54.4516ZM67.0968 100.129C69.7634 104.43 71.1398 108.903 71.2258 113.204C71.2258 113.376 71.2258 113.548 71.2258 113.72C69.9355 113.032 68.6452 112.172 67.4409 111.312C60.043 105.978 54.5376 98.1505 51.957 89.4624C51.6129 88.2581 51.3548 87.0538 51.0968 85.8495C54.8817 87.828 58.1505 90.1505 60.9032 92.7312C63.3979 94.9677 65.4624 97.5484 67.0968 100.129ZM61.0753 69.7634C60.7312 70.9677 60.4731 72.2581 60.3011 73.4624C60.3011 73.6344 60.2151 73.7204 60.2151 73.8925C59.6129 78.0215 59.6129 82.2366 60.5591 86.1936C60.3011 86.0215 60.129 85.7634 59.871 85.5914C57.2043 83.0968 54.0215 80.8602 50.3226 78.9677C50.3226 78.1075 50.2366 77.2473 50.2366 76.3011C50.2366 75.2688 50.2366 74.1505 50.3226 73.1183C50.3226 72.9462 50.3226 72.6882 50.3226 72.5161C50.5807 68.3871 51.3548 64.2581 52.3871 60.2151C52.9032 58.3226 53.4194 56.4301 54.0215 54.6237C54.8817 55.3118 55.828 56.086 56.6022 56.8602C59.0108 59.1828 60.9893 61.8495 62.4516 64.7742C62.1075 66.4086 61.5914 68.043 61.0753 69.7634ZM81.5484 48.5161C79.6559 44.6452 77.8495 40.6882 76.4731 36.5591C76.2151 35.871 76.043 35.2688 75.871 34.5806C74.4086 39.3979 72.3441 43.957 70.1075 48.4301C68.043 52.6452 65.8925 56.8602 64.086 61.1613C62.3656 57.3763 59.6129 53.9355 56.5161 51.1828C56.2581 50.9247 56 50.6667 55.7419 50.4946C56.8602 47.4839 58.0645 44.5591 59.3548 41.6344C60.6452 38.6237 62.0215 35.6989 63.3979 32.6882C66.8387 25.3763 71.7419 16.6021 75.871 7.22581C78.7097 13.7634 81.9785 20.043 84.9032 25.7204C86.1075 28.2151 87.3118 30.5376 88.3441 32.7742C89.7204 35.6989 91.0968 38.7097 92.3871 41.7204C93.6774 44.6452 94.8817 47.5699 96 50.5806C95.7419 50.8387 95.4839 51.0968 95.2258 51.2688C92.129 54.1075 89.3764 57.4624 87.6559 61.2473C85.8495 56.9462 83.6129 52.7312 81.5484 48.5161ZM89.0323 64.6882C90.4946 61.7634 92.4731 59.0968 94.8817 56.7742C95.7419 56 96.6022 55.2258 97.4624 54.5376C98.0645 56.4301 98.6667 58.2366 99.0968 60.129C100.215 64.3441 100.989 68.6452 101.247 73.0323C101.333 75.0108 101.419 76.9032 101.333 78.8817C101.333 78.8817 101.333 78.8817 101.247 78.8817C97.5484 80.7742 94.4516 83.0108 91.6989 85.5054C91.4409 85.6774 91.2688 85.9355 91.0108 86.1075C92.3011 80.7742 91.871 75.0968 90.4946 69.7634C90.1505 68.043 89.6344 66.4086 89.0323 64.6882ZM80.4301 113.204C80.6022 103.398 87.914 92.3871 100.559 85.7634C100.301 86.9677 100.043 88.172 99.6989 89.3764C97.8065 96 94.1075 102.108 89.2903 106.925C87.7419 108.473 86.0215 109.935 84.3011 111.226C83.0968 112.086 81.8065 112.86 80.5161 113.634C80.4301 113.462 80.4301 113.29 80.4301 113.204ZM107.355 76.3011C107.441 68.9032 105.892 61.4194 103.484 54.4516C103.14 53.4194 102.71 52.3011 102.28 51.2688C105.634 49.2903 109.161 47.5699 112.516 45.7634C114.409 44.8172 116.215 43.6989 118.022 42.5806C118.28 43.6129 118.452 44.6452 118.71 45.6774C120 52.2151 120.86 59.785 120.516 67.785C120.43 69.5054 120.344 71.3118 120.172 73.1183C115.441 73.8064 111.14 74.9247 107.355 76.3011ZM115.011 112.516C110.796 114.753 105.892 116.645 100.387 117.849C114.409 106.495 121.548 93.0753 124.731 79.7419C124.903 79.7419 125.161 79.7419 125.333 79.7419C131.699 79.6559 137.29 78.8817 142.108 77.7634C138.667 88.9462 131.097 103.914 115.011 112.516Z'
								fill='url(#paint0_linear_34:4)'
							/>
						</g>
					</g>
					<defs>
						<filter
							id='filter0_d_34:4'
							x='-4'
							y='-2'
							width='159.828'
							height='128.086'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy='2' />
							<feGaussianBlur stdDeviation='2' />
							<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
							<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_34:4' />
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow_34:4'
								result='shape'
							/>
						</filter>
						<linearGradient
							id='paint0_linear_34:4'
							x1='75.914'
							y1='0'
							x2='75.914'
							y2='120.086'
							gradientUnits='userSpaceOnUse'
						>
							<stop stop-color='#7ADBAE' />
							<stop offset='1' stop-color='#1A7F72' />
						</linearGradient>
						<clipPath id='clip0_34:4'>
							<rect width='152' height='124' fill='white' />
						</clipPath>
					</defs>
				</svg>
			)
		case 'search':
			return (
				<svg
					width='32'
					height='32'
					viewBox='0 0 38 38'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M16.6667 29.3333C19.477 29.3328 22.2064 28.3919 24.4203 26.6607L31.3806 33.621L33.6194 31.3822L26.6591 24.4218C28.3913 22.2078 29.3327 19.4778 29.3333 16.6667C29.3333 9.68258 23.6507 4 16.6667 4C9.68258 4 4 9.68258 4 16.6667C4 23.6507 9.68258 29.3333 16.6667 29.3333ZM16.6667 7.16667C21.9059 7.16667 26.1667 11.4274 26.1667 16.6667C26.1667 21.9059 21.9059 26.1667 16.6667 26.1667C11.4274 26.1667 7.16667 21.9059 7.16667 16.6667C7.16667 11.4274 11.4274 7.16667 16.6667 7.16667Z'
						fill='black'
					/>
					<path
						d='M18.069 13.5945C18.6691 14.1962 19 14.991 19 15.8333H22.1667C22.1681 15.0012 22.0045 14.177 21.6854 13.4084C21.3664 12.6399 20.8982 11.9422 20.3078 11.3557C17.9107 8.96168 13.7544 8.96168 11.3588 11.3557L13.5945 13.5977C14.7978 12.3975 16.872 12.4007 18.069 13.5945Z'
						fill='black'
					/>
				</svg>
			)
		default:
			return null
	}
}

export default GlobalSvg
