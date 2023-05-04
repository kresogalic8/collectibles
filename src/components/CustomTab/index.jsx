import PropTypes from 'prop-types';
import { CircleBadge, TabButton } from './styles';

const CustomTab = ({ label, active, onClick, count }) => {
  return (
    <TabButton onClick={onClick} active={active} disableRipple>
      {label}
      {count > 0 && <CircleBadge>{count}</CircleBadge>}
    </TabButton>
  );
};

CustomTab.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  count: PropTypes.number,
};

export default CustomTab;
