import * as C from "./Header.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

type Props = {
    changeTheme: () => void
    isDark: boolean;
}


const Header = ({changeTheme, isDark}:Props) => {
  return (
    <C.Header>
      <C.Container>
        <C.HeaderLogo>To-do List</C.HeaderLogo>
        <FontAwesomeIcon style={{fontSize:'25px'}} onClick={changeTheme} icon={isDark ? faToggleOff : faToggleOn} />
      </C.Container>
    </C.Header>
  );
};

export default Header;
