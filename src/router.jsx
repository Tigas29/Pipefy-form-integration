import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Form = lazy(() => import("./pages/form/index"));
const PageOne = lazy(() => import("./pages/page-one/index"));
export function Router() {
  return (
    <Suspense fallback="...">
      <Routes>
        <Route path="/pagina-um" element={<PageOne />} />
        <Route path="/" element={<Form />} />
      </Routes>
    </Suspense>
  );
}
