import React from 'react'
import { HeaderBoxProps } from './HeaderBox.types'

const HeaderBox:React.FC<HeaderBoxProps> = ({
    title,
    type,
    subtitle,
    user,
}) => {
  return (
    <div className='header-box'>
        <h1 className='Header-box-title'>{title}
            {type === 'greeting' &&(
                <span className='text-bankGradient'>&nbsp;  {user}</span>
            )}
        </h1>
        <p className='header-box-subtext'>{subtitle}</p>
    </div>
  )
}

export default HeaderBox