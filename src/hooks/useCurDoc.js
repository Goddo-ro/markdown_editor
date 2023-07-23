import { useSelector } from "react-redux";

export function useCurDoc() {
  const { isNew, title, body, id, userId } = useSelector(state => state.markdown);

  return {
    isNew,
    title,
    body,
    id,
    userId,
  }
}