import cx from 'classnames'
import Image from 'next/image'
import {useEffect, useRef} from 'react'

import hero from '../styles/sections/hero.module.scss'
import layout from '../styles/layout.module.scss'

export default (props) => {
	const { 
		imageSrc='/images/homeHero.jpg',
		imageAlt,
		height,
		animatedV,
		children
	} = props

  const heroWrapper = useRef(null)
	useEffect(()=> {
		animatedV && heroWrapper.current.classList.add(hero.animate_in)
	}, [])
	
	return (
    <div 
			ref={heroWrapper}
			className={cx(
				hero.hero, 
				hero[height], 
				{[hero.animated_v]: animatedV}
			)}
		>
			<Image
				src={imageSrc}
				alt={imageAlt}
				layout="fill"
			/>
			{children}
    </div>
  )
}
