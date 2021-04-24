import cx from 'classnames'
import {useRef, useEffect} from 'react'
import Link from 'next/link'

import global from 'styles/global.module.scss'
import layout from 'styles/layout.module.scss'
import local from 'styles/sections/header/banner.module.scss'

export default (props) => {
	const {type="desktop"} = props
	const FactoryNavLink = (props) => {
		const {text, url} = props
		return (
			<Link href={url}>
				<div className={cx(local.banner_link, global.text_black)}>
					{text}
				</div>
			</Link>
		)
	}
  return (
		<div className={cx(
			local[type === "mobile" ? "mobile_banner" : "desktop_banner"],
			layout.f_row, 
			layout.f_wrap, 
			layout.w100_percent, 
			layout.align_center, 
			layout.justify_between
		)}>
			<div className={cx(local.banner_link_wrapper, layout.f_row, layout.align_center, layout.text_center)}>
				<FactoryNavLink text='WEDDINGS' url='/rentals/weddings' /> |
				<FactoryNavLink text='TREEHOUSES' url='/rentals/treehouses' /> | 
				<FactoryNavLink text='PRIVATE FUNCTIONS' url='/rentals/private-functions' />
			</div>
			{type !== "mobile" &&
				<div className={cx(local.banner_link_wrapper, layout.f_row, layout.align_center)}>
					<FactoryNavLink text='LOGIN' url='https://shop.treehousevineyards.com/login' /> | 
					<FactoryNavLink text='SIGN UP' url='https://shop.treehousevineyards.com/sign-up' />
				</div>
			}
		</div>
	)
}