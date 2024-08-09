import { type FC, type PropsWithChildren } from "react";

// interface InfoBoxProps {
//   mode: "hint" | "warning";

//   //by default adding this question mark an undefined value is added up, if we dont pass any thing
//   warninglevel?: "low" | "medium" | "high";
// }

//apart from using the above custom type
//when props value are dependable upon other props value
//then we should use DISCRIMINATED UNION
//like this

interface HintBoxProps {
  mode: "hint";
}
interface WarningBoxProps {
  mode: "warning";
  warninglevel: "low" | "medium" | "high";
}
type InfoBoxProps = HintBoxProps | WarningBoxProps;
const InfoBox: FC<PropsWithChildren<InfoBoxProps>> = (props) => {
  const { children, mode } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { warninglevel } = props;
  return (
    <aside className={`infobox infobox-warning warning--${warninglevel}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
