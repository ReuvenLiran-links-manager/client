import React, { useState, FunctionComponent } from "react";
import PropTypes, { InferProps } from "prop-types";
import { InputField, Button, ButtonIcon } from "../components";
import { Icons } from '../components/types';

const types = {};

type Props = InferProps<typeof types>;

const TopBar: FunctionComponent<Props> = props => {
  const [link, setLink] = useState("");

  return (
    <header className="top-bar">
      <ButtonIcon icon={Icons.MENU} className="btn-primary" onClick={() => {}} />
      <InputField
        onChange={({ target: { value } }) => setLink(value)}
        value={link}
      />
      <Button className="btn-primary" onClick={_ => {}}>
        Add
      </Button>
    </header>
  );
};

TopBar.propTypes = types;

export default TopBar;

// class TopBar extends React.PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       link: '',
//     };
//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(e) {
//     const {
//       target: {
//         value: link,
//       },
//     } = e;
//     this.setState({
//       link,
//     });
//   }

//   render() {
//     const {
//       link,
//     } = this.state;
//     const {
//       onCreate,
//       onExpand,
//     } = this.props;
//     return (
//       <div className="top-bar">
//         <Button
//           className="btn btn-primary"
//           onClick={onExpand}
//         >
//           Ex
//         </Button>
//         <InputField
//           onChange={this.onChange}
//           value={link}
//         />
//         <Button
//           className="btn-primary"
//           onClick={_ => onCreate(link)}
//         >
//           Add
//         </Button>
//       </div>
//     );
//   }
// }

// TopBar.propTypes = {
//   onCreate: PropTypes.func.isRequired,
// };
// export default TopBar;
