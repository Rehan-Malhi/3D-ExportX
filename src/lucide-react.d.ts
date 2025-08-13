// This file fixes "could not find declaration" errors for deep icon imports
declare module "lucide-react/dist/esm/icons/*" {
  import { ForwardRefExoticComponent, RefAttributes } from "react";
  import { LucideProps } from "lucide-react";
  const Icon: ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;
  export default Icon;
}
