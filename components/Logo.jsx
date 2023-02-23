import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href="https://www.worldometers.info/geography/alphabetical-list-of-countries/">
                <img src={logo} width="50" height="50" alt="https://www.worldometers.info/geography/alphabetical-list-of-countries/" />
            </Wrapper>
        )
    }
}

export default Logo