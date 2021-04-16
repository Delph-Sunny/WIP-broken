import React from 'react';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal
} from '@material-ui/core/';
import useStyles from './styles';


const ReviewModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box className={classes.box}>
        <Button
          onClick={handleOpen}
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submit}>
          Review this item
        </Button>
      </Box>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Review Your Product</h2>
            <p id='transition-modal-description'>
              The standard Lorem Ipsum passage, used since the 1500s Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Section 1.10.32 of de Finibus Bonorum et Malorum, written by
              Cicero in 45 BC Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ReviewModal;