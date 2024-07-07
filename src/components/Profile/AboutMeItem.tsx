import { ReactNode } from "react";

interface AboutMeItemProps {
  header?: string;
  body: ReactNode;
}

export default function AboutMeItem({ header, body }: AboutMeItemProps) {

  return (
    <div>
      <h1 className="text-xl font-bold italic pb-2">
        {header}
      </h1>
      {body}
    </div>
  )
}