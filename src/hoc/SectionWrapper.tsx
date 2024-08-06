import { FunctionComponent } from "react";

interface SectionWrapperProps {
  Component: FunctionComponent;
  idName: string;
}

const SectionWrapper = ({ Component, idName }: SectionWrapperProps) =>
  function HOC() {
    return (
      <div id={idName}>
        <Component />
      </div>
    )
  }

export default SectionWrapper