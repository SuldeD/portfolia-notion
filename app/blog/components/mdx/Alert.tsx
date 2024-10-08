import { ReactNode } from "react";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";

const Alert = ({
  children,
  type,
}: {
  children: ReactNode;
  type: "warning" | "info";
}): JSX.Element => (
  <div className="flex gap-2 p-4 rounded-md mt-7 border border-secondary text-tertiary">
    <div className="w-fit">
      {type === "warning" ? (
        <ExclamationTriangleIcon className="w-5 h-5" />
      ) : (
        <InformationCircleIcon className="w-5 h-5" />
      )}
    </div>
    <div className="not-prose text-sm">{children}</div>
  </div>
);

export default Alert;
