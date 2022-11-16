import React from 'react'
import "./modal.scss"
import metamask from "../../assets/metamaskm.svg"
import walletConnect from "../../assets/walletconnect.svg"
import close from "../../assets/x.svg"
import rightArr from "../../assets/rightarrow.svg"
import { useContext } from 'react'
import { ModalContext } from '../../utils/Modalcontext'

function Modal() {
    const{setIsModalOpen}=useContext(ModalContext)
  return (
    <div className="modal">
      <div className="modal__background">
        <div className="modal__content">
          <div className="modal__content-title">
            <h3>Connect Wallet</h3>
            <button className="btn" onClick={() => setIsModalOpen(false)}>
              <img src={close} alt={close} />
            </button>
          </div>
          <p className="select">Choose your preferred wallet:</p>
          <div className="modal__content-wallets">
            <div className="wallet">
              <img src={metamask} alt="meta mask logo" />

              <img className="arrow" src={rightArr} alt="right arrow" />
            </div>
            <div className="wallet">
              <img src={walletConnect} alt="wallet connect logo" />

              <img className="arrow" src={rightArr} alt="right arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal