import React from 'react'
import { useState } from 'react'

import Day from '../../static/sun.svg'
import Night from '../../static/moon.svg'

import styled from 'styled-components'

const Button = styled.button`
    width: 50px;
    background-color: transparent;
    border: none;
    margin: 1.5em 0;
    cursor: pointer;
`

const Image = styled.img`
    margin: 0;
`

const DayNight = () => {
    const [dayNight, setDayNight] = useState(false)

    return(
        <div className={`wrapper `}>
            <Button class={``} onClick={() => setDayNight(() => !dayNight)}>
                {/* {dayNight === true ? <p>true</p> : <p>false</p>} */}
                {dayNight === false ? <Image className="day" src={Day}></Image> : <Image className="night" src={Night}></Image>}
            </Button>
        </div>
    )
}

export default DayNight