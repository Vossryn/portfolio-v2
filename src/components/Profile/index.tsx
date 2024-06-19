import SectionHeading from "../SectionHeading";

export default function Profile() {
  return (
    <div id="#profile" className="bg-circuit-board">
      <div className="p-4 sm:p-0 sm:w-3/5 sm:m-auto">
        <SectionHeading heading="Profile" />
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex flex-col gap-2 border text-white rounded-lg p-2">
            <div className="border text-white rounded-lg min-h-36 min-w-36">Family Image</div>
            <div>Personal Info</div>
          </div>
          <div>
            Bio Info
          </div>
        </div>
      </div>
    </div>
  );
}
