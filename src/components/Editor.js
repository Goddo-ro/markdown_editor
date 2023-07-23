import React from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

const Editor = ({value, setValue}) => {
  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  return (
    <CodeMirror
      value={value}
      theme="dark"
      extensions={[
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true,
        }),
      ]}
      onChange={onChange}
    />
  );
};

export default Editor;