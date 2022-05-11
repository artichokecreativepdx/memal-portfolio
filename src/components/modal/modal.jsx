import React from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';

function ModalForImg() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Content image>
        <Image size="medium" src="/images/wireframe/image-square.png" wrapped />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)} positive>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalForImg;
