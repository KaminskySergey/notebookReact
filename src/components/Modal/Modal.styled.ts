import styled from 'styled-components';


export const Backdrop = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  position: absolute;
  max-width: 95%;
  /* padding: 48px 18px 40px; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFF;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
border-radius: 40px;
`

export const CloseModal = styled.button`
  position: absolute;
  top: 19px;
  right: 19px;
  transition: all 250ms;
  cursor: pointer;

  stroke: ${props => props.theme.buttonAddTaskColor};

  &:hover,
  &:focus {
    stroke: ${props => props.theme.buttonBackgroundColor};
  }
`;
