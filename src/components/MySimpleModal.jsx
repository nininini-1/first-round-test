import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledModalRoot = styled.div`
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);

  > .my-modal {
    position: relative;
    width: 768px;
    margin: 0 auto;
    top: 100px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    .my-modal-header,
    .my-modal-content,
    .my-modal-footer {
      padding: 16px 24px;
    }
    .my-modal-close {
      float: right;
    }
    .my-modal-content {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    .my-modal-footer {
      text-align: right;
      & > button {
        margin-left: 12px;
      }
    }
  }
`;

const MySimpleModal = ({
  visible = false,
  onClose,
  onOk,
  closable = true,
  width,
  style,
  title = "标题",
  centered = true,
  content,
  children,
  footer = [
    <button key="cancel" onClick={onClose}>
      取消
    </button>,
    <button key="submit" type="primary" onClick={onOk}>
      确定
    </button>,
  ],
}) => {
  return (
    visible &&
    ReactDOM.createPortal(
      <StyledModalRoot>
        <div className="my-modal">
          <div className="my-modal-header">
            <span>{title}</span>
            {closable && (
              <button onClick={onClose} className="my-modal-close">
                x
              </button>
            )}
            <div></div>
          </div>
          <div className="my-modal-content">{content || children}</div>
          <div className="my-modal-footer">{footer.map((item) => item)}</div>
        </div>
      </StyledModalRoot>,
      document.body
    )
  );
};

export default React.memo(MySimpleModal);
