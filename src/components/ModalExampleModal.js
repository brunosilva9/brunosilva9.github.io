import React from "react";
import { Button, Modal } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation("global");
  return (
    <div style={{ textAlign: "center", fontWeight: "500" }}>
      <Modal
        centered={false}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button> {t("Modal.button")}</Button>}
      >
        <Modal.Header>{t("Modal.header")}</Modal.Header>
        <Modal.Content>
          <Modal.Description>{t("Modal.Description")}</Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>OK</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default ModalExampleModal;
