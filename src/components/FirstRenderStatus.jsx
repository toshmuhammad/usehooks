import { useIsFirstRender } from "../hooks/useIsFirstRender";

export default function FirstRenderStatus() {
  const isFirst = useIsFirstRender();

  return <div>{isFirst ? "First Render" : "Re-rendered"}</div>;
}
