import styled from 'styled-components'

export const colorScheme = {

    light: '#FFFFFF',
    dark: '#17293E',
    primary: '#EC4E4B',
    secondary: '#85D8F3',
    highlight: '#F8D179',
    shadow: '#A9AAAD',
	darkShadow: '#666666'

}

export const Color = styled.div`
  background-color: ${p => colorScheme[p.color]};
  width: 100px;
  height: 100px;
  display: inline-block;
`
