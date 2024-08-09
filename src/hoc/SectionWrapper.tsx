const SectionWrapper = (
  Component: React.ComponentType,
  idName: string = "",
  heading: string = "",
  subHeading: string = ""
) =>
  function HOC() {
    return (
      <div id={idName} className="p-4 sm:p-0 sm:w-3/5 sm:m-auto">
        {heading && (
          <h1 className="flex-grow font-orbitron text-yellow-300 text-5xl">
            {heading}
          </h1>
        )}
        {subHeading && <h3>{subHeading}</h3>}
        <Component />
      </div>
    );
  };

export default SectionWrapper;
