import { Link } from 'react-router-dom';
import { StyledAppBar } from './styles';

export default function AppBar() {
  return (
    <StyledAppBar>
      <Link to="/">
        <img src="/logo.svg" alt="Collectibles logo" width={137} height={20} />
      </Link>
    </StyledAppBar>
  );
}
