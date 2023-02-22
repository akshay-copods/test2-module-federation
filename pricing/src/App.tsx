import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from 'react-error-boundary';

import "./index.scss";
const FormC = React.lazy(() => import("signup/FormC"))
const Header = React.lazy(() => import("shel/Header"))
const Layout = React.lazy(() => import("shel/Layout"))
const App = () => (
  <div className="flex flex-col h-screen h bg-red-400">
    <div className="bg-blue-300">
      <React.Suspense fallback={<h1>Loading</h1>}>
        <ErrorBoundary fallback={<div className="h-full w-full bg-gray-300">I am fallback</div>}>

          <Layout />
        </ErrorBoundary>
      </React.Suspense>

    </div>
    <div className="flex h-full">
      <div className="bg-yellow-200">
        Workflow
      </div>
      <div className="flex-1 flex justify-center items-center bg-green-300">
        <React.Suspense fallback={<h1>Loading</h1>}>
          <ErrorBoundary fallback={<div className="h-full w-full">I am fallback</div>}>
            <FormC />
          </ErrorBoundary>
        </React.Suspense>
      </div>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
