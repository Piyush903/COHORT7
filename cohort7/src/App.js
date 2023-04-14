import "./App.css";

import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Login = lazy(() => import("./pages/Login"));
// const Sidebar2 = lazy(() => import("./Components/Sidebar/Sidebar2"));
// const Home = lazy(() => import("./pages/Dashboard/Home"));
// const Sales = lazy(() => import("./pages/Dashboard/Sales"));
// const Organisation = lazy(() => import("./pages/Organisation/Organisation"));
// const Branches = lazy(() => import("./pages/Branches/Branches"));
// const BranchForm = lazy(() => import("./forms/BranchForm/BranchForm"));
// const Warehouses = lazy(() => import("./pages/Warehouses/Warehouses"));
// const WarehouseForm = lazy(() => import("./forms/WarehouseForm/Warehouseform"));
// const User = lazy(() => import("./pages/User_Roles/User"));
// const Userform = lazy(() => import("./forms/UserForm/Userform"));
// const Roles = lazy(() => import("./pages/User_Roles/Roles"));
// const RoleForm = lazy(() => import("./forms/RolesForm/RoleForm"));
// const Myaccount = lazy(() => import("./forms/MyaccountForm/Myaccount"));
// const Items = lazy(() => import("./pages/Items/Items"));
// const Category = lazy(() => import("./pages/Category/Category"));
// const Product = lazy(() => import("./Components/Product/Product"));
// const TransferOrder = lazy(() => import("./pages/TransferOrder/TransferOrder"));
// const ProductForm = lazy(() => import("./forms/ProductForm/ProductForm"));
// const ProductCategory = lazy(() =>
//   import("./Components/Category/ProductCategory")
// );
// const CategoryForm = lazy(() => import("./forms/CategoryForm/CategoryForm"));
// const TransferOrderForm = lazy(() =>
//   import("./forms/TransferOrderForm/TransferOrderForm")
// );
// const TransferOrderDetail = lazy(() =>
//   import("./Components/TransferOrder/TransferorderDetail")
// );
function App() {
  // const location=useLocation()
  // const id = location.pathname.split('/').pop();
  return (
    <div className="center">
      <div className="App">
      {/* <Login /> */}
     
      <Suspense fallback={<div>Loading...</div>}>
         {/* {(location.pathname === '/home' || location.pathname === '/sales' || location.pathname === '/inventory/items' || location.pathname === `/inventory/items/products/${id}` || location.pathname === `/products/updates/${id}` || location.pathname.includes('/products/add') || location.pathname === '/inventory/category' || location.pathname === '/transferorderform' || location.pathname === `/transferorder/detail/${id}` || location.pathname === '/organisation_profile' || location.pathname === '/branches' || location.pathname === '/branchform' || location.pathname.includes('/warehouses') || location.pathname.includes('/updatebranch')|| location.pathname.includes('/warehouseform')|| location.pathname.includes('/updatewarehouse')|| location.pathname.includes('/user')|| location.pathname.includes('/roles')|| location.pathname.includes('/userform')|| location.pathname.includes('/updaterole')|| location.pathname.includes('/myaccount')|| location.pathname.includes('/roleform')|| location.pathname.includes('/updateuser')|| location.pathname === `/category/updates/${id}`|| location.pathname === `/inventory/category/products/${id}`)&& <div className="d-flex branchgrid" style={{ height: "10vh" }}>
            <Sidebar2 />
          </div>} */}
        <Routes>
          <Route path="/" element={<Login />} />
          
          {/* <Route path="/home" element={<Home />} /> */}
          
        </Routes>
      </Suspense>
    </div>
    </div>
  );
}

export default App;
