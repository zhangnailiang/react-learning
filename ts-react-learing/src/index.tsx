import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import TestStateHook from './stateHook/testStateHook'
// import TestEffectHook1 from "./effectHook/testEffectHook1"
// import TestEffectHook2 from "./effectHook/testEffectHook2"
// import TestEffectHook3 from "./effectHook/testEffectHook3"
// import TestEffectHook4 from "./effectHook/testEffectHook4"
// import HookPratice from "./littlePractices/studentContainer/index"
// import Pagination from "./components/pagination/index"
// import PageContainer from "./testComponent/pagination/pageContainer"
// import UseReducer from "./useReducer/index"
// import ContextHook from "./contextHook/index"
// import CallBackHook from "./callbackHook/index"
// import MemoHook1 from "./memoHook/test1"
import MemoHook2 from "./memoHook/test2"
ReactDOM.render(
  // <PageContainer />,
  <MemoHook2 />,

  // <Pagination
  //   total={100}
  //   limit={9}
  //   panelNumber={5}
  // />,
  document.getElementById('root') as HTMLElement
);
