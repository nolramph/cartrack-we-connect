import styleC from 'styled-components';

export const ModalContainer = styleC.div
`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 100;
`

export const ModalContent = styleC.div
`
    width: 100%;
    height: 100vh;
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 100;
    background: #fff;
    padding: 0 1.6rem;

    @media screen and (max-width: 570px){
        flex-direction: column;
    }
`
export const ModalTitle = styleC.h1
`
    font-size: 3.6rem;
    color: #FC724C;
    margin-bottom: 1rem;
`

export const ModalInput = styleC.input
`
    // border: solid ${({inputBoxColor}) => inputBoxColor} 1px;
    border: solid #FC724C 1px;
    padding: 2rem;
    border-radius: 3rem;
    // color: ${({inputBoxColor}) => inputBoxColor};
    color: #FC724C;
    outline: none;

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
`
export const ModalButton = styleC.button
`
    // color: ${({inputBoxColor}) => inputBoxColor};
    color: #FC724C;
    outline: none;
    background: transparent;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    font-size: 4rem;
    margin-left: 0;
    z-index: 999;
    display: flex;

   
`

export const ModalError = styleC.div
`
    display: flex;
    align-items:center;
    justity-content: center;
    color : #FF0013;
    opacity: 0.8;
    font-size: 2.6rem;
    margin-top: 2rem;
`