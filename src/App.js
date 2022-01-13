import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import BoardMain from "./routes/board/BoardMain";
import BoardView from "./routes/board/BoardView";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/board" component={BoardMain}></Route>
        <Route path="/board/view/:id" component={BoardView}></Route>
        <Route path="/movie/detail/:id" component={Detail}></Route>
        <Route path="/search" exact={true} component={Search}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

/*
네이버 api 애플리케이션에서 검색 부분에서 등록을 했으므로, 지역이든 영화든 url 부분만 바꾸면 가능함.

BrowserRouter는 브라우저의 현재 URL과 UI를 동기화하며, 이것은 HTML-5 History API를 통해 수행됩니다. 
반면, HashRouter는 URL의 해시 부분을 사용하여 동기화합니다.

Switch는 Route 컴포넌트가 중복으로 렌더링될 컴포넌트를 하나만 렌더링되도록 도와줍니다.
exact는 path 속성에 넣은 경로값이 정확히 URL의 경로값과 일치할 때만 렌더링되도록 돕습니다
*/
