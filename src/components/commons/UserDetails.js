import styleC from 'styled-components';

export const HeaderUserContainer = styleC.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 411px){
        margin-bottom: 3rem;
    }
`

export const HeaderOptions = styleC.div
`
    
    padding: 1rem;
    border: solid 1px #FC724C;
    transition: all 0.2s ease-in-out;
    text-align: center;
    margin-top: 1rem;
   
`

export const HeaderUserName = styleC.div
`
    display: flex;
    align-items: center;
`


export const HeaderUser = styleC.div
`
    color: #F56032;
    font-weight: bold;
    position: relative;
    cursor: pointer;
    text-align: center;
    margin:auto;
    display : flex;
    flex-direction: column;
    justify-content: center;
    

`