import { useSelector } from "react-redux";

export function useCurDoc() {
  const { title, body, id, userId } = useSelector(state => state.markdown);

  return {
    title,
    body,
    id,
    userId,
  }
}