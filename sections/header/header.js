import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'

import MobileNav from './mobile'
import DesktopNav from './desktop'
import nav from './links'

import hs from 'styles/sections/header.module.scss'
import layout from 'styles/layout.module.scss'



export default (props) => {
	const {
		width,
		breakpoint=1200
	} = props

  return (
		<div className={cx(hs.header)}>
			<div className={cx(hs.nav_bar, layout.f_row, layout.justify_start, layout.align_end)}>
				<Link href='/'>
					<Image 
						src="/images/logo.png"
						alt="logo"
						height="60px"
						width="138px"
						className={hs.logo}
					/>
				</Link>
				{width > breakpoint ? <DesktopNav nav={nav} /> : <MobileNav nav={nav} />}
			</div>
		</div>
	)
}

