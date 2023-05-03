import React, { useEffect, useState } from 'react';
import { CommonState } from 'middlewares/reduxTookits/commonSlice';
import SearchPT from './SearchPT';
import { SearchContentsState } from 'middlewares/reduxTookits/searchContents';
import { LogState } from 'middlewares/reduxTookits/logSlice';

const SearchCT = (props: typeSearchCT): JSX.Element => {
  const [snippet, setSnippet] = useState<string>('');
  const [didSearch, setDidSearch] = useState<boolean>(false);

  const snippetRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSearchContents = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    e?.preventDefault();

    if (e !== undefined && e.key !== 'Enter') {
      return;
    }

    if (!snippet) {
      props.handleCodeMessage('EMPTY SNIPPET', '내용을 입력해주세요.');
      handleBlur();
      return;
    }

    props.requestSearchContents(snippet, props.id);
    setDidSearch(true);
    handleBlur();
  };

  const handleBlur = () => {
    snippetRef && snippetRef.current.blur();
  };

  return (
    <SearchPT
      isNight={props.isNight}
      searchContents={props.searchContents}
      snippet={snippet}
      didSearch={didSearch}
      snippetRef={snippetRef}
      onSetSnippet={setSnippet}
      onSearchContents={handleSearchContents}
    />
  );
};

interface typeSearchCT extends CommonState, LogState, SearchContentsState {
  requestSearchContents: (snippet: string, id?: string) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default SearchCT;
