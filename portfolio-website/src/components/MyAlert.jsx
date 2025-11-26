import { Alert, Fade} from 'react-bootstrap'

export default function MyAlert({show, style, message, onClose}) {
  return (
    <Fade in={show} mountOnEnter unmountOnExit>
      <Alert onClose={onClose} dismissible variant={style} className={`position-fixed top-0 start-50 translate-middle-x mt-5 shadow fade`} style={{ zIndex: 2, width: "fit-content" }}>
        {message}
      </Alert>
    </Fade>
  );
}
