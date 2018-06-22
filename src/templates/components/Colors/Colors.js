import styled from 'styled-components'

export const colorScheme = {

    bright: '#F3E8C8',
    highlightCold: '#38BCC3',
    highlightWarm: '#E99644',
    shoutWarm: '#CF4E1E',
    extra: '#6FD2CF'

}

export const Color = styled.div`
  background-color: ${p => colorScheme[p.color]};
  width: 100px;
  height: 100px;
  display: inline-block;
`
