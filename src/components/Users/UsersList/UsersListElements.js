import styleC from 'styled-components';

export const UsersContainer = styleC.div
`
    justify-content: center;
    height: auto;
    margin: 2rem auto;
    z-index: 90;
`

export const UsersError = styleC.div
`
    color : #FF0013;
    opacity: 0.8;
    font-size: 3.6rem;
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const UsersSearchContainer = styleC.div
`
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 1.6rem;
    
    @media screen and (max-width: 520px){
        flex-direction: column;
    }
    z-index: 98;
`

export const UsersFormTitle = styleC.h1
`
    font-size: 3.6rem;
    // color: ${({inputBoxColor}) => inputBoxColor};
    color: #FC724C;
    margin-right: 2rem;
    

    @media screen and (max-width: 411px){
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }
`

export const UsersButton = styleC.button
`
    // color: ${({inputBoxColor}) => inputBoxColor};
    color: #FC724C;
    outline: none;
    background: transparent;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-inout;
    font-size: 4rem;
    margin-left: 0;
    opacity: 0.7;
    transform: rotate(180deg) scale(0.5);
    transition: all 0.2s ease-in-out;
    z-index: 1;

   
`

export const UsersFormInput = styleC.input
`
    // border: solid ${({inputBoxColor}) => inputBoxColor} 1px;
    border: solid #FC724C 1px;
    padding: 2rem;
    border-radius: 3rem;
    // color: ${({inputBoxColor}) => inputBoxColor};
    color: #FC724C;
    outline: none;
    z-index: 1;
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        // color: ${({inputBoxColor}) => inputBoxColor};
        color: #FC724C;
        opacity: 0.5; /* Firefox */
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        // color: ${({inputBoxColor}) => inputBoxColor};
        color: #FC724C;
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
        // color: ${({inputBoxColor}) => inputBoxColor};
        color: #FC724C;
    }

    &:focus + ${UsersButton} {
            transform: scale(1.2);
            opacity: 1;
            margin-left: 1rem;
            }
        

`

export const UsersListContainer = styleC.div
`
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
    justify-content: flex-start;
    transition: all 0.2 ease-in-out;
    
    
    @media screen and (max-width: 1815px){
        justify-content: center;
    }
`

export const UserDiv = styleC.div
`
    position: relative;
    display: flex;
    align-items: center;
    
`