import { IconButton, ButtonToolbar } from 'rsuite';
import PageEndIcon from '@rsuite/icons/PageEnd';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <br />
      <hr />
      <h1>Bienvenid@</h1>
      <hr />
      <br />
      <ButtonToolbar style={{ justifyContent: 'center' }}>
        <IconButton color='violet' appearance='primary' icon={<PageEndIcon />}>
          <Link
            to={'/form'}
            style={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {' '}
            Dar Clases
          </Link>
        </IconButton>
      </ButtonToolbar>
    </div>
  );
};
