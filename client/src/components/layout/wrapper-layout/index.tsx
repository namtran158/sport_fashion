import { useSelector } from "react-redux";
import { appState } from "src/features/app/app-slice";
import FooterLayout from "../footer";
import HeaderLayout from "../header";

function WrapperLayout({ children }: any) {
  const { mobileHeaderOpen: open } = useSelector(appState);
  return (
    <div>
      <HeaderLayout />
      {!open && <div className="bg-zinc-50">{children}</div>}
      {!open && <FooterLayout />}
    </div>
  );
}

export default WrapperLayout;
