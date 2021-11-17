import { Fragment } from "react";
import ReactDOM from 'react-dom';

import ModalOverlay from "./ModalOverlay";
import Backdrop from "./Backdrop";

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
