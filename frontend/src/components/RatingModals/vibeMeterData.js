import anger from "../../assets/img/anger.svg";
import disappointed from "../../assets/img/disappointed.svg";
import boredom from "../../assets/img/boredom.svg";
import appreciation from "../../assets/img/appreciation.svg";
import joy from "../../assets/img/joy.svg";
import overwhelemed from "../../assets/img/overwhelmed.svg";

const marks = [
  {
    value: 0,
    label: <img src={anger} alt="anger" />,
  },
  {
    value: 20,
    label: <img src={disappointed} alt="disappointed" />,
  },
  {
    value: 40,
    label: <img src={boredom} alt="boredom" />,
  },
  {
    value: 60,
    label: <img src={appreciation} alt="appreciation" />,
  },
  {
    value: 80,
    label: <img src={joy} alt="joy" />,
  },
  {
    value: 100,
    label: (
      <img
        style={{ marginRight: "51.5px" }}
        src={overwhelemed}
        alt="overwhelemed"
      />
    ),
  },
];

export default marks;
