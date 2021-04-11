import styled from "styled-components";
import TableCell from "@material-ui/core/TableCell";
import { color } from "../../utils/colorMapping";

export const ValueCell = styled(TableCell)`
  color: ${(props) => {
    if (props.value >= 0 && props.value <= 100) {
      return `${color.lightGreen} !important`;
    } else if (props.value > 100 && props.value <= 300) {
      return `${color.orange} !important`;
    } else {
      return `${color.lightRed} !important`;
    }
  }};
`;
