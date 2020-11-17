import styleC from 'styled-components';

export const UsersChatWrapper = styleC.div
`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 10rem;

    @media screen and (max-width: 411px){
        padding-top: 7rem;
    }

    @media screen and (max-width: 320px){
        padding-top: 4rem;
    }
`

export const UsersChatContainer = styleC.div
`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 60vh;
    padding: 3rem 2rem;
    flex-flow: column;
    
`

export const UsersConversationDiv = styleC.div
`
    position: relative;
    padding: 1rem;
    width: 100%;
    overflow-y: scroll;
`

export const UsersReceiverDiv = styleC.div
`
    position: relative;
    display: flex;
    justify-content: flex-star;
    align-items: center;
    margin-bottom: 1rem;
    
`

export const UsersSenderDiv = styleC.div
`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
    
`

export const UsersAvatar = styleC.div
`
    width: 10%;
    margin: ${({margin}) => margin};

    @media screen and (max-width: 411px) {
        width: 20%;
    }
`
export const Img = styleC.img
`
    width: 100%;
`

export const UsersMessage = styleC.div
`
    font-size: 1.4rem;
    font-weight: 500;
    color: #FFF4E3;
    max-width: 50%;
    height: 100%;
    background: #FA8B34;
    padding: 1.5rem;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 1.5rem;
    border-radius: 1rem;

    @media screen and (max-width: 411px) {
        max-width: 80%;
    }
`
export const UsersChatForm = styleC.form
`
    position: relative;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
    margin: 1rem auto 0;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const UsersChatSendButton = styleC.button
`
    color: #FC724C;
    outline: none;
    background: transparent;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    font-size: 4rem;
    margin-left: 0;
    opacity: 0;
    transform: scale(0.5) translateX(-7rem);
    transition: all 0.2s ease-in-out;
    display: flex;
    z-index: 5;

    &:hover{
        transform: scale(1) translateX(0);
        opacity: 1;
    }
`

export const UsersChatInput = styleC.input
`
    border: solid #FC724C 1px;
    padding: 2rem;
    border-radius: 3rem;
    color: #FC724C;
    outline: none;
    width: 100%;
    z-index: 6;
    
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

    &:focus + ${UsersChatSendButton}{
        transform: scale(1) translateX(0);
        opacity: 1;
    }
`
