import { appRoutes } from "../../const/route";
import { MatchRoutes } from "./match-route";

export default function RouteOperator() {
  return <MatchRoutes routes={appRoutes} />;
}
