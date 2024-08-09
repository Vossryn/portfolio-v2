import { FunctionComponent } from "react";

interface SectionWrapperProps {
  Component: FunctionComponent;
  idName: string;
}

const SectionWrapper = ({ Component, idName }: SectionWrapperProps) =>
  function HOC() {
    return (
      <div id={idName} className="p-4 sm:p-0 sm:w-3/5 sm:m-auto">
        <Component />
      </div>
    )
  }

export default SectionWrapper