const SectionWrapper = (
  Component: React.ComponentType,
  idName: string = "",
  heading: string = "",
  subHeading: string = ""
) =>
  function HOC() {
    return (
      <div id={idName} className="sm:px-12">
        {heading && (
          <h1 className="flex-grow font-orbitron text-yellow-300 text-5xl pt-4 pb-8 text-center sm:text-left">
            {heading}
          </h1>
        )}
        {subHeading && <h3>{subHeading}</h3>}
        <div className="px-4">
          <Component />
        </div>
      </div>
    );
  };

export default SectionWrapper;
