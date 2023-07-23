import { useSelector } from "react-redux";

export function useMarkdowns() {
  const { markdowns } = useSelector(state => state.markdowns);

  return markdowns;
}